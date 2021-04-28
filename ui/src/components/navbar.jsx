import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{backgroundColor: "#e60027"}}>
      <Toolbar>
        <Typography variant="h5" >ICT自主交付与运营服务</Typography>
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;