import React from 'react';
import '../css/homepane.css';
import '../css/sidebar.css';
import '../css/App.css';
import thumbnail from '../assets/thumbnail.jpg';
import { Card, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: {
        color: 'white',
        justifyContent: 'left'
    },
    subheader: {
        color: '#909090'
    }
  }));

function HomePane() {
    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header">
                <Card className="card" style={{ backgroundColor: "black" }}>
                    <img className="cardmedia" src={thumbnail} alt="Thumbnail" />
                    {/* <div className="innercontent">
                        <div className="cardicon-panel">
                            <div className="cardicon"></div>
                        </div>
                        <div className="cardtitle">AK74u type beat</div>
                        <MoreVertIcon className="cardmui-icon"
                            style={{ fontSize: 26 }} />
                    </div> */}
                    <CardHeader
                        classes={{
                            title: classes.title,
                            subheader: classes.subheader
                        }}
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon className="cardicon"/>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                </Card>
            </header>
        </div>
    );
}

export default HomePane;
