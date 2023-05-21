import React, { useEffect } from 'react'
import { useState } from 'react';

import { createContext } from 'react'

import { useContext } from 'react';

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [usert, setUsert] = useState([])

    useEffect(() => {
        const getuserDetails = async () => {
            try {
                const response = await fetch("https://64464d9e0431e885f00e495b.mockapi.io/guvi", {
                    method: "GET",
                })
                const data = await response.json()
                console.log(data)
                setUser(data)
                if (!data) {
                    console.log("unable to fetch api")
                }

            } catch (error) {
                console.log(error)
            }
        }
        getuserDetails();

    }, [])



    useEffect(() => {
        const getuserDetailst = async () => {
            try {
                const responset = await fetch("https://64464d9e0431e885f00e495b.mockapi.io/users", {
                    method: "GET",
                })
                const datat = await responset.json()
                console.log(datat)
                setUsert(datat)
                if (!datat) {
                    console.log("unable to fetch api")
                }

            } catch (error) {
                console.log(error)
            }
        }
        getuserDetailst();

    }, [])

    return (
        <AppContext.Provider
            value={{ user, setUser, usert, setUsert }}
        >
            {children}
        </AppContext.Provider>
    )

}


export const AppState = () => {
    return useContext(AppContext)
}


export default AppProvider