import { NavigateNext, VolumeDown, VolumeUp } from '@mui/icons-material'
import { Avatar, Breadcrumbs, Link, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'


const MuiTask = ({ taskTitle, direction, sliderDefaultValue, spacing }) => {
    const [value, setValue] = useState(sliderDefaultValue)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleLinkClick = (event) => {
        event.preventDefault()
    }

    const breadcrumbs = [
        <Link underline='hover' Key='1' color='inherit' href='/' onClick={handleLinkClick}>
            MUI
        </Link>,
        <Link
            underline='hover'
            key='2'
            color='inherit'
            href='/'
            onClick={handleLinkClick}
        >
            Core
        </Link>,
        <Typography key='3' sx={{ color: 'grey' }}>
            Breadcrumb
        </Typography>
    ]

    return (
        <div>
            <Typography variant="h3" gutterBottom>
                {taskTitle}
            </Typography>

            <Stack
                direction={direction}
                spacing={spacing}
                sx={{ justifyContent: "center", alignItems: "center", mb: 2 }}
            >
                <Avatar alt="MirrorMan-Logo" src="/public/mirrorman-logo.png" />
                <Avatar alt="GsPlayground-Logo" src="/public/G'slogo.png" />
            </Stack>

            <Stack spacing={spacing} direction={direction} sx={{ alignItems: 'center', mb: 2 }}>
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <VolumeUp />
            </Stack>

            <Stack spacing={2} >
                <Breadcrumbs
                    separator={<NavigateNext fontSize='small' />}
                    sx={{
                        color: 'white',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2
                    }}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

        </div>
    )
}

export default MuiTask