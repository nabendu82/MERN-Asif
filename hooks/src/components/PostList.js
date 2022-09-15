import axios from 'axios';
import { useState, useEffect } from 'react'
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             setPosts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },[]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data)
        }
        getPosts()
    },[])

    return posts.map(item => <PostItem key={item.id} item={item} />)
}

export default PostList