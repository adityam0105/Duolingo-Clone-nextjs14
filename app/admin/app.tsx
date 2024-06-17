"use client"

import {Admin, Resource} from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list"
import { CourseCreate } from "./course/create"
import { CourseEdit } from "./course/edit"
import { UnitList } from "./unit/list"
import { UnitCreate } from "./unit/create"
import { UnitEdit } from "./unit/edit"
import { LessonList } from "./lesson/list"
import { lessonCreate } from "./lesson/create"
import { lessonEdit } from "./lesson/edit"
import { ChallengeList } from "./challenges/list"
import { challengeCreate } from "./challenges/create"
import { challengeEdit } from "./challenges/edit"
import { ChallengeOptionsList } from "./challengeOptions/list"
import { challengeOptionsCreate } from "./challengeOptions/create"
import { challengeOptionsEdit } from "./challengeOptions/edit"

const dataProvider = simpleRestProvider("api/")

const App = ()=>{
    return(
    
    <Admin dataProvider={dataProvider}>
        <Resource 
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
        />
        <Resource 
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
        />
        <Resource 
        name="lessons"
        list={LessonList}
        create={lessonCreate}
        edit={lessonEdit}
        recordRepresentation="title"
        />
        <Resource 
        name="challenges"
        list={ChallengeList}
        create={challengeCreate}
        edit={challengeEdit}
        recordRepresentation="question"
        />
        <Resource 
        name="challengeOptions"
        list={ChallengeOptionsList}
        create={challengeOptionsCreate}
        edit={challengeOptionsEdit}
        recordRepresentation="text"
        options={{label: "Challenge Options"}}
        />
    </Admin>
    
    )
}
export default App;