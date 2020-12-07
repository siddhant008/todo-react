import React from "react";
import axios from "../axios-notes";
//import components
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import RestoreIcon from '@material-ui/icons/Restore';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
        position: "relative",
        height: 85
    }
});

const Todo = (props) => {
    const classes = useStyles();

    const toBinHandler = (e) => {
        let tempTodo = {...props.todos};
        let data = {
            bin: true,
            title: props.title,
            description: props.description,
            pinned: props.todos[props.index].pinned,
        }
        axios.put('/mynotes/'+ props.index+'.json', data)
            .then((response) => {
                tempTodo[props.index].bin = true;
                console.log(tempTodo)
                props.setTodos(tempTodo);
            })
            .catch(error => console.log(error));
    }
    const toMyNotesHandler = (e) => {
        let tempTodo = {...props.todos};
        let data = {
            bin: false,
            title: props.title,
            description: props.description,
            pinned: props.todos[props.index].pinned,
        }
        axios.put('/mynotes/'+ props.index+'.json', data)
            .then((response) => {
                tempTodo[props.index].bin = false;
                console.log(tempTodo)
                props.setTodos(tempTodo);
            })
            .catch(error => console.log(error));
    }
    let buttons = props.bin ? <span className="binCrossMark"><Button onClick={toMyNotesHandler}><RestoreIcon /></Button></span> :
        <span className="binCrossMark"><Button onClick={toBinHandler}><DeleteIcon  /></Button></span>

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
                    {props.title}
                </Typography>
                <hr/><br/>
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
