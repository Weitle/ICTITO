import { AppBar, Toolbar, Typography, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  menuLinks: {
    '& > *': {
      margin: theme.spacing(2)
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" style={{backgroundColor: "#e60027"}}>
      <Toolbar>
        <Typography variant="h5" >ICT自主交付与运营服务</Typography>
        <div className={classes.menuLinks}>
          <Link variant="h6" color="inherit" component={NavLink} to="/projects">项目管理</Link>
          <Link variant="h6" color="inherit" component={NavLink} to="/engineers">队伍建设</Link>
           
        </div>
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;