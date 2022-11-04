import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import {Navbar, PostList} from "./"
import { getPosts, login } from "../api"


const Main = () => {

    return (
        <BrowserRouter>
            <div id="main">
                <Navbar />
                <Routes>
                    <Route
                        exact path="/"
                        element={<PostList/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main;