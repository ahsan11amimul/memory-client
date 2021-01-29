
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from '../../styles';

function Home() {
    const [postId, setPostId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch, postId]);
    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setPostId={setPostId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form postId={postId} setPostId={setPostId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
