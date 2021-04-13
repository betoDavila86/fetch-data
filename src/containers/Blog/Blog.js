import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route } from 'react-router-dom'

class Blog extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul className="list-links">
                            <li className="list-item"><a className="link" href="/">Home</a></li>
                            <li className="list-item"><a className="link" href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;