import {
    AppBar,
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton, TextField, Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {useState} from "react";
import {BaseCSSProperties} from "@material-ui/core/styles/withStyles";
import {makeStyles} from "@material-ui/core/styles";
export interface HeaderStyleProps {
    root: BaseCSSProperties,
    menuButton: BaseCSSProperties,
    title: BaseCSSProperties,
}

export const useStyles = makeStyles<Theme, HeaderStyleProps>((theme) => ({
    root: {
        flexGrow: 3
    },
    menuButton: {
        marginRight: theme.spacing(2)  /*1 - 8px */
    },
    title: {
        flexGrow: 1
    }
}))


export const Header = () => {
    const classes = useStyles({} as HeaderStyleProps)
    const [open,setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                        <MenuIcon fontSize={"large"} className={classes.menuButton}/>
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>My first experience with
                        Material-UI </Typography>
                    <Box mr={3}>
                        <Button color={"inherit"} variant={"outlined"} onClick={handleClickOpen}>Log in </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby={'form-dialog-title'}>
                            <DialogTitle id='form-dialog-title' >Log in </DialogTitle>
                            <DialogContent>
                                <DialogContentText>Log in to see</DialogContentText>
                                <TextField
                                    autoFocus
                                    margin={"dense"}
                                    id={'name'}
                                    label={'Email Adress'}
                                    type={'email'}
                                    fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin={"dense"}
                                    id={'pass'}
                                    label={'Password'}
                                    type={'password'}
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color={"primary"} >Cancel</Button>
                                <Button onClick={handleClose} color={"primary"} >Log in</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Button color={"secondary"} variant={"contained"}>Sign up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}