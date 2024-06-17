import {  ReferenceInput, required, SimpleForm, TextInput, BooleanInput, Edit } from "react-admin"

export const challengeOptionsEdit = ()=>{
    return(
        <Edit>
            <SimpleForm>
                <TextInput source="text" validate={[required()]} label="Text"/>
                <BooleanInput source="correct" label="Correct option"/>
                <ReferenceInput source="challengeId" reference="challenges"/>
                <TextInput source="imageSrc" label="Image URL" />
                <TextInput source="audioSrc" label="Audio URL" />
            </SimpleForm>
        </Edit>
    )
}