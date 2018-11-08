import Button from '@material-ui/core/Button'
import React from 'react'

export default (props) => {
    const {
        children
    } = props;

    return <Button 
        variant="contained" 
        color="primary"
        className="button" 
        
    >{children}</Button>
}