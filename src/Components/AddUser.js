import React, { useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppState } from "../Context/AppProvider";

export function AddUser() {
    const { user, setUser } = AppState()
    const history = useHistory()

    const [name, setName] = useState("")
    const [id, setId] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");

    const addNewUser = async (e) => {
        const newUser = {
            id,
            name,
            batch,
            email,
            experience
        }
        e.preventDefault();
        try {
            const response = await fetch("https://64464d9e0431e885f00e495b.mockapi.io/guvi", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data)
            setUser([...user, newUser])
            history.push("/")
            setName("");
            setId("");
            setExperience("");
            setEmail("");
            setBatch("");

        } catch (error) {
            console.log(error)

        }


    }


    return (
        <BaseApp
            title={"ADD STUDENT DETAILS"}
        >
            <div>
                <input
                    placeholder="Student id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                /> {" "}
                <input
                    placeholder="Student name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                /> {""}
                <input
                    placeholder="Batch"
                    value={batch}
                    onChange={(event) => setBatch(event.target.value)}
                /> {""}
                <input
                    placeholder="Student email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                /> {""}
                <input
                    placeholder="Experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                /> {""}
                <button
                    onClick={addNewUser}
                >ADD</button>
            </div>
        </BaseApp>



    )
}