import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios'
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        post: null,
        error: false,
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Beto'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => this.setState({ error: true }))
    }

    handleOutputSelectedPost = (id) => {
        this.setState({ post: id })
    }

    render() {
        const { state: { posts, post, error }, handleOutputSelectedPost } = this;
        const postsOutput = posts.map((post) => <Post onOutputPost={() => handleOutputSelectedPost(post.id)} key={post.id} title={post.title} author={post.author} />)

        return (
            <div>
                {!error && <section className="Posts">
                    {postsOutput}
                </section>}
                {!error && <section>
                    <FullPost id={post} />
                </section>}
                {error && <p style={{textAlign: 'center'}}>Something went wrong! :(</p>}
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;