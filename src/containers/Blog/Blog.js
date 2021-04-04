import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios'
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        post: null
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Beto'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
    }

    handleOutputSelectedPost = (id) => {
        this.setState({ post: id })
    }

    render() {
        const { state: { posts, post }, handleOutputSelectedPost } = this;
        const postsOutput = posts.map((post) => <Post onOutputPost={() => handleOutputSelectedPost(post.id)} key={post.id} title={post.title} author={post.author} />)

        return (
            <div>
                <section className="Posts">
                    {postsOutput}
                </section>
                <section>
                    <FullPost selectedPost={post} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;