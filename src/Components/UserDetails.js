import React from "react";
import BaseApp from "../Core/Base";
import { useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";

export default function UserDetails() {
    const { user } = AppState()
    const { id } = useParams()
    const person = user[id]

    return (
        <BaseApp title={"STUDENT DETAILS"}>
            <div className="user-content">
                <div className="user-card">
                    <h1>{person.name}</h1>
                    <p>BATCH : {person.batch}</p>
                    <p>EMAIL : {person.email}</p>
                    <p>EXPERIENCE: {person.experience}</p>

                </div>


            </div>

        </BaseApp>
    )
}