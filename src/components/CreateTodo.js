import React, {useState} from "react";
import axios from "../axios-notes";
//comp
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        textAlign: 'center',
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
        setTempTodo(updatedTodo);
        let tempError = {...error}
        !e.target.value ? tempError.t=true : tempError.t=false;
        console.log(tempError.t, )
        setError(tempError);

    }
    const descriptionHandler = (e) => {
        const updatedTodo = {...tempTodo};
        updatedTodo.description = e.target.value;
        setTempTodo(updatedTodo);
        let tempError = {...error}
        !e.target.value ? tempError.d=true : tempError.d=false;
        setError(tempError);
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
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                error={error.t}
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
            <Button
                endIcon={<AddCircleOutlineIcon/>}
                variant='contained'
                color='primary'
                onClick={onSubmitHandler}
            > Create </Button>
        </form>
    );

}

export default CreateTodo;
