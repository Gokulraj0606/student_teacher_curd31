import React from "react";
import { useHistory } from "react-router-dom";

export default function NoPage() {
    const history = useHistory()
    return (
        <div>
            <h1>HI YOU VISITED WRONG PAGE 404❗</h1>
            <button onClick={() => history.push("/")}>DASHBOARD</button>

        </div>
    )
}
