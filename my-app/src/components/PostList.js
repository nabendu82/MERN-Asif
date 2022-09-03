import React, { Component } from 'react'
import PostItem from './PostItem';

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // async componentDidMount() {
    //     const url = 'https://jsonplaceholder.typicode.com/posts'
    //     const res = await fetch(url);
    //     const posts = await res.json();
    //     this.setState({ posts })
    // }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                this.setState({ posts })
            })
            .catch(err => console.log(err))
    }

    render() {
        return this.state.posts.map(item => <PostItem key={item.id} item={item} />)
    }
}

export default PostList
