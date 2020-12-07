import React from "react";
import {NavLink} from "react-router-dom";

//
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const Navbar = (props) => {

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={'navbar ' + classes.toolbar } >
                <NavLink to="/" exact>
                    <ListItem style={{height: 64}} className="brand" button key={'TodoApp'} >
                        <ListItemIcon><SpeakerNotesIcon /></ListItemIcon>
                        <ListItemText primary={'TodoApp'} />
                    </ListItem>
                </NavLink>
            </div>
            <Divider />
            <List className='navbar'>
                <NavLink  to="/" exact>
                    <ListItem button key={'Home'} >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </NavLink>
                <NavLink  to="/bin" exact>
                    <ListItem button key={'Bin'} >
                        <ListItemIcon><DeleteIcon /></ListItemIcon>
                        <ListItemText primary={'Bin'} />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
            <List>
                {['Settings', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{text === 'Settings' ? <SettingsIcon /> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Todo App
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />

            </main>
        </div>
    );
    // return (
        // <header>
        //     <nav className="navbar">
        //         <ul>
        //             <li><NavLink to="/" exact>My Notes</NavLink> </li>
        //             <li><NavLink to="/new">New Note</NavLink></li>
        //             <li><NavLink to="/bin">Bin</NavLink></li>
        //         </ul>
        //     </nav>
        //     <hr/>
        // </header>
    // )
}

export default Navbar;
