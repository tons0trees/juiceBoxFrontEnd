import React from "react"
import {Navbar} from "./"
import { getPosts, login } from "../api"


const Main = () => {
    getPosts()
    login("albert", "bertie99")

    return (
        <div id="main">
            <Navbar />
        </div>
    )
}

export default Main;