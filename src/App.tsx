import React from 'react';
import './App.css';

import {AppBar, Box, Button, Container, Grid, IconButton, Paper, Theme, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import {BaseCSSProperties} from "@material-ui/core/styles/withStyles";

interface StyleProps {
    root: BaseCSSProperties,
    menuButton: BaseCSSProperties,
    title: BaseCSSProperties,
    mainFeaturesPost: BaseCSSProperties,
    mainFeaturesPostContent: BaseCSSProperties,
    overlay: BaseCSSProperties,
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
    root: {
        flexGrow: 3
    },
    menuButton: {
        marginRight: theme.spacing(2)  /*1 - 8px */
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom:theme.spacing(4),
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
    },
    mainFeaturesPostContent : {
        position: "relative",
        padding:theme.spacing(6),
        marginTop:theme.spacing(8)
    },
    overlay: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundOverlay:'rgba(0,0,0,.3)'
    }

}))

function App() {
    const classes = useStyles({} as StyleProps)
    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                            <MenuIcon fontSize={"large"} className={classes.menuButton}/>
                        </IconButton>
                        <Typography variant={"h6"} className={classes.title}>My first experience with
                            Material-UI </Typography>
                        <Box mr={3}>
                            <Button color={"inherit"} variant={"outlined"}>Log in </Button>
                        </Box>
                        <Button color={"secondary"} variant={"contained"}>Sign up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component={"h1"}
                                        color={"inherit"}
                                        variant={"h3"}
                                        gutterBottom>
                                        My first experience with
                                        Material-UI
                                    </Typography>
                                    <Typography
                                        variant={"h5"}
                                        component={"h5"}
                                        color={"inherit"}
                                        paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam beatae
                                        ducimus eaque eum repellat, repudiandae veniam voluptas. Aut, beatae, ullam!
                                    </Typography>
                                    <Button variant={"contained"} color={"secondary"}>
                                        learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}

export default App;
