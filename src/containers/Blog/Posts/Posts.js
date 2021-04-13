import React from 'react'
import './Posts.css'
import Post from '../../../components/Post/Post'
import axios from '../../../axios'

class Posts extends React.Component {
    state = {
        posts: [],
        post: null,
        error: false,
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 3);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Beto'
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                console.log(error)
                // this.setState({ error: true })
            })
    }

    handleOutputSelectedPost = (id) => {
        this.setState({ post: id })
    }

    render() {
        let postsOutput = this.state.posts.map(post => <Post onOutputPost={() => this.handleOutputSelectedPost(post.id)} key={post.id} title={post.title} author={post.author} />)

        if (this.state.error) {
            postsOutput = (<p style={{ textAlign: 'center', backgroundColor: 'salmon', padding: '15px' }}>Something went wrong! :(</p>)
        }
        return (
            <section className="Posts">
                {postsOutput}
            </section>
        );
    }
}

export default Posts;