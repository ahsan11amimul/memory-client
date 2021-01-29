import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

function Form({ postId, setPostId }) {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const [postData, setPostData] = useState({
        title: '', message: '', tags: '', selectedFile: ''
    });
    const dispatch = useDispatch();
    const post = useSelector((state) => postId ? state.posts.find((p) => p._id === postId) : null);
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (postId) {
            dispatch(updatePost(postId, { ...postData, name: user?.result?.name }));
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));

        }
        clearHandler();
    }
    const clearHandler = () => {
        setPostId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });

    }
    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
        </Typography>
            </Paper>
        );
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">{postId ? 'Updating' : 'Creating'} a Memory ...</Typography>

                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearHandler} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
