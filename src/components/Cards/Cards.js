import React from 'react';
import {Card,CardContent,Typography,Grid, ButtonBase,Button,AppBar,Toolbar,IconButton} from '@material-ui/core';
import styles from './Cards.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';





const Cards =({articles})=>{
    
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    
    
      maxWidth: 7000,
      
      
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}),
);
const classes = useStyles();
    

    console.log(articles);
    
    return(
        
       <div>
         <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid Updates in India
          </Typography>
          
        </Toolbar>
      </AppBar> 
        {articles.map(items=>{
            return(
                <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} href={items.url} >
              <img className={classes.img} alt="complex" src={items.urlToImage}  href={items.url} / >
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <p style={{textAlign:'left' }}>{items.title}</p>
                </Typography>
                <Typography variant="body2" gutterBottom>
                {items.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" fontWeight= "1000">
                <b className="s">{items.author}</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" fontWeight= "1000">
                <b className="s">{new Date(items.publishedAt).toDateString()}</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button variant="contained" color="primary" href={items.url}>
     Read Full Post
</Button>
              
                  
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
               
            






                
            )
        })}
           
           </div>  
        

    )
}


export default Cards




