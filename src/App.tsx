import React, {useState} from 'react';
import './App.css';

import {
    AppBar, BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    Card, CardActions, CardContent, CardMedia,
    Container,
    Grid,
    IconButton,
    Paper,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
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
    },
    cardMedia : {
        paddingTop:'56.25%'
    },
    cardContent : {
        flexGrow:1
    },
    cardGrid : {
        marginTop:theme.spacing(4)
    }

}))

function App() {
    const classes = useStyles({} as StyleProps)
    const cards = [1,2,3,4,5,6,7,8,9]
    const [value, setValue] = useState('recents');
    const handleChange = (event:any,newValue:string) => {
        setValue(newValue)
    }
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
                <div className={classes.mainContent}>
                    <Container maxWidth={"md"}>
                        <Typography
                            variant={"h2"}
                            align={"center"}
                            color={"textPrimary"}
                            gutterBottom
                        >Valtikamore</Typography>
                        <Typography
                            variant={"h5"}
                            align={"center"}
                            color={"textSecondary"}
                            paragraph
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam beatae
                            ducimus eaque eum repellat, repudiandae veniam voluptas. Aut, beatae, ullam!</Typography>
                        <div className={classes.mainButton}>
                            <Grid container spacing={3} justify={'center'}>
                                <Grid item>
                                    <Button variant={'contained'} color={"primary"}>Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={'outlined'} color={"primary"}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth={"md"}>
                    <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item xs={12} sm={6} md={4} key={card}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={'https://source.unsplash.com/random'}
                                            title={'image title'}/>
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant={'h5'} gutterBottom>
                                                Blog post
                                            </Typography>
                                            <Typography variant={'h5'} gutterBottom>
                                                Blog post Valtikamore Blog post Valtikamore
                                                Blog post Valtikamore Blog post Valtikamore
                                                Blog post Valtikamore Blog post Valtikamore
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size={'small'} color={'primary'}>
                                                View
                                            </Button>
                                            <Button size={'small'} color={'primary'}>
                                                Edit
                                            </Button>
                                            <LayerIcon/>
                                            <PlayCircleFilledIcon/>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography
                    variant={'h6'}
                    align={'center'}
                    gutterBottom> Footer</Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label={'Recents'}
                        value='recents'
                        icon={<RestoreIcon/>}/>
                    <BottomNavigationAction
                        label={'Favorites'}
                        value='favorites'
                        icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction
                        label={'Nearby'}
                        value='nearby'
                        icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction
                        label={'Folder'}
                        value='folder'
                        icon={<FolderIcon/>}/>

                </BottomNavigation>
                <Typography
                    align={'center'}
                    color={"textPrimary"}
                    component={'p'}
                    variant={"subtitle1"}
                >
                    Valtikamore - my first experience with material ui
                </Typography>
            </footer>
        </>
    );
}

export default App;
