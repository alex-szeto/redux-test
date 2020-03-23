import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost} from '../actions/postAction.js'


class Postform extends Component{
    state = {
        title: "",
        body: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)
        console.log(this.props)
    }

    render(){
        return(
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label> Title: </label><br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div>
                    <label> Body: </label><br/>
                    <textarea name="body" value={this.state.body} onChange={this.handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default connect(null, {createPost})(Postform)