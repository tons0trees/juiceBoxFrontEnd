import React from "react"
import {Navbar, PostList} from "./"
import { getPosts, login } from "../api"


const Main = () => {

    return (
        <div id="main">
            <Navbar />
            <PostList />
        </div>
    )
}

export default Main;