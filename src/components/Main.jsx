import React from "react"
import {Navbar} from "./"
import { getPosts, login, getPostsWithTags} from "../api"



const Main = () => {
    getPosts()
    login("albert", "bertie99")
    getPostsWithTags(searchTags, posts)

    return (
        <div id="main">
            <Navbar />
        </div>
    )
}

export default Main;