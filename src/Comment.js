// add Comment component here
import React, { Component } from 'react';
export default class Comment extends Component {
    render (args) {
        return <div className="comment">{this.props.commentText}</div>;
    } 
}