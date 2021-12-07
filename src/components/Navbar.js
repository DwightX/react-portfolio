import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

export default function MenuAppBar() {
const matches = useMediaQuery('(min-width:768px)');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar className="bb" elevation={0} style={{ margin: 0 }} position='static'>
        <Toolbar maxWidth='lg'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DC.
          </Typography>
                <div>
                  <Link className="linksHead" sx={{m:2}} href="#about__block">ABOUT</Link>
                  <Link className="linksHead" sx={{m:2}} href="#exp__block">EXPERIENCE</Link>
                  <Link className="linksHead" sx={{m:2}} href="#project__block">PROJECTS</Link>
                </div>
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
              >
                <MenuItem onClick={handleClose}>ABOUT</MenuItem>
                <MenuItem onClick={handleClose}>PROJECTS</MenuItem>
                <MenuItem onClick={handleClose}>CONTACT</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
  );
}
