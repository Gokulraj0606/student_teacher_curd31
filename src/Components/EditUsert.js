import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AppState } from "../Context/AppProvider";

const EditUsert = () => {
    const { usert, setUsert } = AppState()
    const [tname, setTname] = useState("");
    const [tidx, setTidx] = useState("");
    const [tbatch, setTbatch] = useState("");
    const [temail, setTemail] = useState("");
    const [texperience, setTexperience] = useState("");

    const { tid } = useParams()

    const selectedUsert = usert.find((per) => per.tid === tid);
    const historyt = useHistory()


    useEffect(() => {
        setTidx(selectedUsert.tid)
        setTname(selectedUsert.tname)
        setTbatch(selectedUsert.tbatch)
        setTemail(selectedUsert.temail)
        setTexperience(selectedUsert.texperience)
    }, [])




    const updateUsert = async () => {
        const editIndext = usert.findIndex(per => per.tid === tid)


        const editedDatat = {
            tid: tidx,
            tname,
            tbatch,
            temail,
            texperience
        }

        try {
            const responset = await fetch(`https://64464d9e0431e885f00e495b.mockapi.io/users/${tidx}`, {
                method: "PUT",
                body: JSON.stringify(editedDatat),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const datat = await responset.json();
            console.log(datat)

            usert[editIndext] = datat
            setUsert([...usert]);
            historyt.push("/t");


        } catch (error) {
            console.log(error)

        }





    }




    return (
        <BaseApp
            title={"EDIT CAR DETAILS"}
        >
            <div>
                <input
                    placeholder="tid"
                    value={tidx}
                    onChange={(event) => setTidx(event.target.value)}
                />
                <input
                    placeholder="tname"
                    value={tname}
                    onChange={(event) => setTname(event.target.value)}
                />
                <input
                    placeholder="batch"
                    value={tbatch}
                    onChange={(event) => setTbatch(event.target.value)}
                />
                <input
                    placeholder="temail"
                    value={temail}
                    onChange={(event) => setTemail(event.target.value)}
                />
                <input
                    placeholder="texperience"
                    value={texperience}
                    onChange={(event) => setTexperience(event.target.value)}
                />
                <button
                    onClick={updateUsert}
                >EDIT</button>
            </div>
        </BaseApp>
    )
}

export default EditUsert