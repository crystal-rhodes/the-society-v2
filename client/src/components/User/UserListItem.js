import React, {
    Component
} from 'react'
import { SimpleCard } from '../common/Card'
import Typography from '@material-ui/core/Typography';
import {
    withStyles
} from '@material-ui/core/styles';

const styles = {
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

export default withStyles(styles)((props) => {
    const {
        classes
    } = props;

    const {
        id,
        name,
        gender,
        email,
        birthDate,
        createdAt
    } = props.user


    return <SimpleCard>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {gender}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {email}
      </Typography>
      <Typography component="p">
        Birthday: {birthDate}
      </Typography>
      <Typography component="p">
        Joined Date: {createdAt}
      </Typography>
        </SimpleCard>
})