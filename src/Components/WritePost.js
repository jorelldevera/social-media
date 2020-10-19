import React from 'react';

import '../Styles/WritePost.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    button: {
        borderRadius: 8,
        width: 85,
        height: 45,
        fontSize: 14,
        textTransform: "none",
        marginRight: 52,
        background: "#EB5757",
        color: "white",
    },
    textField: {
        width: 446,
    },
});

function WritePost() {
    const classes = useStyles();

    return (
        <div className='write-post'>
            <Avatar className='avatar'>J</Avatar>
            <TextField className={classes.textField} id="standard-basic" placeholder="Write Post"/>
            <Button className={classes.button} variant="contained">
                Post
            </Button>
        </div>
    );
}

export default WritePost;