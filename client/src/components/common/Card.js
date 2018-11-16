import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        marginBottom: 12,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const _SimpleCard = (props) => {
    const {
        classes, children
    } = props;

    return (
        <Card className={classes.card}>

        {children}

    </Card>
    );
}

_SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SimpleCard = withStyles(styles)(_SimpleCard);

export {
    SimpleCard
}