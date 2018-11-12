import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles
} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const _OutlinedTextField = (props) => {
    const {
        classes, type, label, id, defaultValue
    } = props;

    return <TextField
    type={type}
    label={label}
    id={id}
    defaultValue={defaultValue}
    className={classes.textField}
    margin="normal"
    variant="outlined"
    />
}

const _RegularTextField = (props)  => {
  const {
      classes, type, label, id, defaultValue 
  } = props;

  return <TextField
  type={type}
  label={label}
  id={id}
  defaultValue={defaultValue}
  className={classes.textField}
  margin="normal"
  />
}

_OutlinedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

_RegularTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

const OutlinedTextField = withStyles(styles)(_OutlinedTextField);
const RegularTextField = withStyles(styles)(_RegularTextField);


export {
    OutlinedTextField,
    RegularTextField
}