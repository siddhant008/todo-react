import React from "react";
import axios from "../axios-notes";
//import components
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import RestoreIcon from '@material-ui/icons/Restore';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles({
    root: {
        width: 250,
        height: 250,
        marginTop: 15,
        marginRight: 15,
        display: "inline-block"
    },
    title: {
        textAlign: "center"
    },
    description: {
        width: 220,
        position: "relative",
        height: 85,
        // overflow: "auto"
    }
});

const Todo = (props) => {
    const classes = useStyles();

    const toBinHandler = () => {
        let tempTodo = {...props.todos};
        let data = {
            bin: true,
            title: props.title,
            description: props.description,
            pinned: false,
        }
        axios.put('/mynotes/' + props.index + '.json', data)
            .then((response) => {
                tempTodo[props.index].bin = true;
                props.setTodos(tempTodo);
            })
            .catch(error => console.log(error));
    }

    const toMyNotesHandler = () => {
        let tempTodo = {...props.todos};
        let data = {
            bin: false,
            title: props.title,
            description: props.description,
            pinned: false,
        }
        axios.put('/mynotes/' + props.index + '.json', data)
            .then((response) => {
                tempTodo[props.index].bin = false;
                props.setTodos(tempTodo);
            })
            .catch(error => console.log(error));
    }

    const pinHandler = () => {
        let tempTodo = {...props.todos};

        let data = {
            bin: false,
            title: props.title,
            description: props.description,
            pinned: !props.todos[props.index].pinned,
        }
        axios.put('/mynotes/' + props.index + '.json', data)
            .then((response) => {
                tempTodo[props.index].pinned = !props.todos[props.index].pinned;
                console.log(tempTodo)
                props.setTodos(tempTodo);
            })
            .catch(error => console.log(error));
    }

    let buttons = props.bin ?
        <span className="binCrossMark"><Button onClick={toMyNotesHandler}><RestoreIcon/></Button></span> :
        <div>
            <span className="binCrossMark"><Button onClick={toBinHandler}><DeleteIcon/></Button></span>
            {props.todos[props.index].pinned ?
                <span className="binCrossMark"><Button
                    onClick={pinHandler}><LocationOnIcon/></Button></span> :
                <span className="binCrossMark"><Button onClick={pinHandler}><LocationOnOutlinedIcon/></Button></span>
            }
        </div>
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                    {props.title}
                </Typography>
                <hr/>
                <br/>
                <Typography className={classes.description} variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <hr/>
            <CardActions>
                {buttons}
            </CardActions>
        </Card>
    )
}

export default Todo;
