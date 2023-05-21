import React from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom"
import { AppState } from "../Context/AppProvider";


export default function UserComponent() {
    const { user, setUser } = AppState()
    const history = useHistory()

    const deleteUser = async (idx) => {

        try {
            const response = await fetch(`https://64464d9e0431e885f00e495b.mockapi.io/guvi/${idx}`, {
                method: "DELETE"
            })
            const data = await response.json();
            console.log("after deletedata", data)
            const alterList = user.filter((per) => per.id !== idx)
            setUser(alterList)

            if (!data) {
                console.log("couldn't delete data")
            }



        } catch (error) {
            console.log(error)

        }






    }




    return (
        <BaseApp
            title="STUDENT DETAILS LIST">

            <div className="user-content">

                {
                    user && (

                        user?.map((person, idx) => (
                            <div key={idx} className="user-card">
                                <h1>{person.name}</h1>
                                <p>BATCH : {person.batch}</p>
                                <p>EMAIL : {person.email}</p>
                                <p>EXPERIENCE: {person.experience}</p>
                                <div className="btn-group">
                                    <button
                                        onClick={() => history.push(`/edit/${person.id}`)}
                                        className="btn">EDIT</button>
                                    <button className="btn"
                                        onClick={() => history.push(`/user/${idx}`)}
                                    >VIEW</button>
                                    <button className="btn"
                                        onClick={() => deleteUser(person.id)}
                                    >DELETE</button>

                                </div>
                            </div>

                        )))}
            </div>
        </BaseApp>
    )
}