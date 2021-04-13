import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Beto'
    }

    handleNewPost = () => {
        const { state: { title, content, author } } = this
        const body = {
            title,
            content,
            author
        }
        axios.post(`/posts`, body)
            .then(response => console.log(response.data))
    }

    render() {
        const { state: { title, content, author }, handleNewPost } = this
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Beto">Beto</option>
                    <option value="Marta">Marta</option>
                </select>
                <button onClick={handleNewPost}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;