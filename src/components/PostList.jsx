import React, { useEffect, useState } from 'react'
import {IndividualPost} from './'
import { getPosts } from '../api';

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function callGetPosts() {
            const newPosts = await getPosts()
            setPosts(newPosts)
        }
        callGetPosts()
    },[])

    return (
        <div id='post_list'>
            {posts.map(elem => <IndividualPost key={`post_${elem.id}`} post={elem}/>)}
        </div>
    );
};

export default PostList