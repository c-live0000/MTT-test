import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>ヘッダー</Typography>
                <AccountCircleOutlinedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header