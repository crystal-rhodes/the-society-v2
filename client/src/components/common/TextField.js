import TextField from '@material-ui/core'
import React from 'react'

export default (props) => {
    const {
        children,
        id,
        label,
        className,
        value,
        onChange,
        type
    } = props;

    return <TextField
        margin="normal"
        variant="outlined"
        id
        label
        className
        value
        onChange
        type
    />
}