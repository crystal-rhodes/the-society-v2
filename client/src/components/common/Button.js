import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const _ContainedButton = (props) => {
    const {
        children, classes, onClick, color
    } = props;

    return  <Button variant="contained" color={color} className={classes.button} onClick={onClick}>
    {children}
  </Button>
}

_ContainedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const ContainedButton = withStyles(styles)(_ContainedButton);

const _OutlinedButton = (props) => {
    const {
        children, classes, onClick, color
    } = props;

    return  <Button variant="outlined" color={color} className={classes.button} onClick={onClick}>
    {children}
  </Button>
}

_OutlinedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const OutlinedButton = withStyles(styles)(_OutlinedButton)
  
export {  ContainedButton, OutlinedButton }
