import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null,
        loaded: false,
        error: false,
    }
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id))
                axios.get(`/posts/${this.props.id}`)
                    .then(response => {
                        this.setState({ post: response.data })
                        this.setState({ loaded: true })
                    })
                    .catch(error => {
                        this.setState({ error: true })
                        this.setState({ loaded: true })
                    })
        }
    }

    handleDeletePost = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(response => console.log('The post was successfully deleted'))
            .catch(console.error)
    }

    render() {
        let post;
        if (!this.state.error) {
            post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
            if (this.props.id && this.state.loaded) {
                const { state: { post: { title, body } } } = this
                post = (
                    <div className="FullPost">
                        <h1>{title}</h1>
                        <p>{body}</p>
                        <div className="Edit">
                            <button onClick={this.handleDeletePost} className="Delete">Delete</button>
                        </div>
                    </div>

                );
            }
        } else {
            post = <p style={{ textAlign: 'center' }}>Something went wrong :´(</p>;
        }
        return post;
    }
}

export default FullPost;