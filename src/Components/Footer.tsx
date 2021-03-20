import {BottomNavigation, BottomNavigationAction, Theme, Typography} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import React, {useState} from "react";
import {BaseCSSProperties} from "@material-ui/core/styles/withStyles";
import {makeStyles} from "@material-ui/core/styles";

export interface FooterStyleProps {
    root: BaseCSSProperties,
}

export const useStyles = makeStyles<Theme, FooterStyleProps>((theme) => ({
    root: {
        flexGrow: 3
    }
}))
export const Footer = () => {
    const classes = useStyles({} as FooterStyleProps)
    const [value, setValue] = useState('resents');
    const handleChange = (event:any,newValue:string) => {
        setValue(newValue)
    }
    return (
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
                    label={'Resents'}
                    value='resents'
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
    )
}