import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    AppBar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'white'
    }
}))

export const AppNavigator = () => {
    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.AppBar} variant="h6">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}