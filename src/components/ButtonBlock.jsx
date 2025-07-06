import { Button } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const ButtonBlock = ({ title, ookisa, iro, text }) => {
    return (
        <div>
            <AccessAlarmIcon />
            <h1>{title}</h1>
            <div>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
            <Button variant="contained" color={iro} size={ookisa}>{text}</Button>
        </div>
    )
}

export default ButtonBlock