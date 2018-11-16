import React, {
    Component
} from 'react'
import { SimpleCard } from '../common/Card'
import Typography from '@material-ui/core/Typography';
import {
    withStyles
} from '@material-ui/core/styles';
import moment  from 'moment';

const styles = {
    title: {
        fontSize: 14,
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

    const birthDateFormatted = moment.unix(birthDate).format('LL')
    const createdAtFormatted = moment(createdAt).format('LL')

    return <SimpleCard>
      <Typography className={classes.title} variant="title" >
        {name}
      </Typography>
      <Typography color="textSecondary">
        {email || <i>Email is hidden</i>}
      </Typography>
      <Typography  color="textPrimary" gutterBottom>
      Gender: {gender}
    </Typography>
      <Typography component="p">
        Birthday: {birthDateFormatted}
      </Typography>
      <Typography component="p">
        Joined {createdAtFormatted}
      </Typography>
        </SimpleCard> 
})