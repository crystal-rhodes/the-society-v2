import React, { Component } from 'react'
import {  OutlinedButton } from '../common/Button';

const CommentListItem = (props) => {
    return <div>This is a Comment
    
    <OutlinedButton size="medium" color="primary">
        Edit
    </OutlinedButton>
    
    <OutlinedButton size="medium" color="secondary">
        Delete
    </OutlinedButton>

    </div>
}

export default CommentListItem