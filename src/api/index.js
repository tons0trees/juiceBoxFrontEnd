const url = 'https://secure-gorge-12590.herokuapp.com'

const requestObj = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}

export async function getPosts(authToken) {
    if (authToken) {
        requestObj.headers.Authorization = `Bearer ${authToken}`
    }

    try {
        const response = await fetch(`${url}/api/posts`,requestObj)

        const {posts} = await response.json()

        return posts;
    } catch (error) {
        console.error(error)
    }
}

export async function login(username, password) {
    requestObj.method = 'POST'
    requestObj.body =JSON.stringify({ username, password })

    try {
        const response = await fetch(`${url}/api/users/login`, requestObj)

        const {token} = await response.json()

        return token
    } catch (error) {
        console.error(error)
    }
}

export async function getPostsWithTags(searchTags, authToken) {
    if(authToken) {
        requestObj.headers.Authorization = `Bearer ${authToken}`
    }

    try {
        const response = await fetch(`${url}/api/tags/${searchTags}/posts`, requestObj)

        const {posts} = await response.json()

        console.log('hopefully tags show', posts)

    } catch (error) {
        console.error(error)
    }
}