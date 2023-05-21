import React from "react";
import { useHistory } from "react-router-dom"

export default function BaseApp({ title, style, children }) {
    const history = useHistory();
    const historyt = useHistory();
    return (
        <div>
            <div className="nav-styles">
                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => history.push("/adduser")}
                    >Add Student</button>
                </span>

                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => historyt.push("/addusert")}
                    >Add Teacher</button>
                </span>

                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => history.push("/")}
                    >Student Dashboard</button>
                </span>


                <span>
                    <button
                        className="nav-buttons"
                        onClick={() => historyt.push("/t")}
                    >teacher Dashboard</button>
                </span>

            </div>
            <div className="title">{title}</div>
            <div className="children">
                {children}
                <footer>
                    contact us
                    <div>email:fsdguvi@gmail.com</div>
                    <div>phone:9876543210</div>
                </footer>

            </div>

        </div>
    )
}