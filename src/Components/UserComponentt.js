import React from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom"
import { AppState } from "../Context/AppProvider";


export default function UserComponentt() {
    const { usert, setUsert } = AppState()
    const historyt = useHistory()

    const deleteUsert = async (tidx) => {


        try {
            const response = await fetch(`https://64464d9e0431e885f00e495b.mockapi.io/users/${tidx}`, {
                method: "DELETE"
            })
            const datat = await response.json();
            console.log("after deletedata", datat)

            const alterListt = usert.filter((per) => per.tid !== tidx)
            setUsert(alterListt)

            if (!datat) {
                console.log("couldn't delete data")
            }



        } catch (error) {
            console.log(error)

        }



    }




    return (
        <BaseApp
            title="TEACHER DETAIL LIST">

            <div className="user-content-teacher">

                {usert.map((person, tidx) => (
                    <div key={tidx} className="user-card-teacher">
                        <h1>{person.tname}</h1>
                        <p>BATCH : {person.tbatch}</p>
                        <p>EMAIL : {person.temail}</p>
                        <p>CLASS TIMING: {person.texperience}</p>
                        <div className="btn-group">
                            <button
                                onClick={() => historyt.push(`/editt/${person.tid}`)}
                                className="btn-teacher">EDIT</button>
                            <button className="btn-teacher"
                                onClick={() => historyt.push(`/usert/${tidx}`)}
                            >VIEW</button>
                            <button className="btn-teacher"
                                onClick={() => deleteUsert(person.tid)}
                            >DELETE</button>

                        </div>
                    </div>

                ))}
            </div>
        </BaseApp>
    )
}