import React, { useEffect, useState } from 'react'
import {IndividualPost} from './'
import { getPosts } from '../api';

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function useGetPosts() {
            const newPosts = await getPosts()
            setPosts(newPosts)
        }
        useGetPosts()
    },[])

    return (
        <div id='post_display'>
            {posts.map(elem => <IndividualPost />)}
        </div>
    );
};

export default PostList