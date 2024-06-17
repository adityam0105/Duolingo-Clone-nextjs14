"use client"
import React, { useTransition } from 'react';
import { Card } from './card';
import { courses, userProgress } from '@/db/schema';
import { useRouter } from 'next/navigation';
import { upsertUserProgress } from '@/actions/user-progress';
import { toast } from 'sonner';


type Course = {
  id: number;
  title: string;
  imageSrc: string;
};

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
    const router = useRouter();
    const [pending,startTransition] = useTransition();

    const onClick = (id:number)=>{
        if(pending) return;

        if(id === activeCourseId){
            return router.push("/learn")
        }
        startTransition(()=>{
          upsertUserProgress(id)
          .catch(()=>toast.error("Something Went Wrong"))
        });
    }
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          title={c.title}
          imageSrc={c.imageSrc}
          onClick={onClick}
          disabled={false}
          active={c.id === activeCourseId}
        />
      ))}
    </div>
  );
};
