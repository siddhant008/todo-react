import React, {useState} from "react";
import axios from "../axios-notes";
//comp
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const CreateTodo = (props) => {
    const [tempTodo, setTempTodo] = useState({title: '', description: '', pinned: false, bin: false});
    const [error, setError] = useState({t: false, d: false});
    const classes = useStyles();

    const titleHandler = (e) => {
        const updatedTodo = {...tempTodo};
        updatedTodo.title = e.target.value;
        let tempError = {...error}
        !tempTodo.title ? tempError.t=true : tempError.t=false;
        setError(tempError);
        setTempTodo(updatedTodo);
    }
    const descriptionHandler = (e) => {
        const updatedTodo = {...tempTodo};
        updatedTodo.description = e.target.value;
        let tempError = {...error}
        !tempTodo.description ? tempError.d=true : tempError.d=false;
        setError(tempError);
        setTempTodo(updatedTodo);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(tempTodo.title && tempTodo.description) {
            axios.post('/mynotes.json', tempTodo)
                .then((response) => {
                    console.log(response.data.name)
                        let temptodos = {...props.todos}
                        temptodos[response.data.name] = {
                            title: tempTodo.title,
                            description: tempTodo.description,
                            pinned: false,
                            bin: false
                        }
                        props.setTodos(temptodos);
                    }
                )
                .catch(error => console.log(error));
            setTempTodo({title: '', description: '', bin: false, pinned: false});
        }else{
            let temp = {...error}
            !tempTodo.title ? temp.t=true : temp.t=false;
            !tempTodo.description ? temp.d=true : temp.d=false;
            setError(temp);
        }
    }

    return (
        // <form className="createTodoForm">

        <form className={classes.root} noValidate autoComplete="off">

            <TextField
                error={error.t}
                /*{error.d ? 'hide':'show'}*/
                id="outlined-required"
                label="Title"
                variant="outlined"
                value={tempTodo.title}
                onChange={titleHandler}
            /><br/>
            <TextField
                required
                error={error.d}
                id="outlined-required"
                label="Description"
                variant="outlined"
                onChange={descriptionHandler}
                value={tempTodo.description}
            /> <br/>
            <Button variant='contained' color='primary' onClick={onSubmitHandler}> Create </Button>
        </form>
    );

}

export default CreateTodo;
