import React from 'react'

const IndividualPost = ({post}) => {
    return (
        <div className='individual_post'>
            <h3>{post.title}: <small>{post.author.username}</small></h3>
            <p>{post.content}</p>
            <p>{post.tags.map(elem => <span key={`tag_${elem.id}`}> {elem.name} </span>)}</p>
        </div>
    );
};

export default IndividualPost