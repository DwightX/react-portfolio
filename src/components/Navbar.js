import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';

export default function MenuAppBar() {
const matches = useMediaQuery('(min-width:768px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="bb" sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dwight Carter Jr
          </Typography>
                { matches && <div>
                  <Link className="linksMain" sx={{m:2}} href="#">ABOUT</Link>
                  <Link className="linksMain" sx={{m:2}} href="#">PROJECTS</Link>
                  <Link className="linksMain" sx={{m:2}} href="#">CONTACT</Link>
                </div>
              }
            <div>
               {!matches && <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ mr: 2 }}
            > 
            <MenuIcon />
             </IconButton> }
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
    </Box>
  );
}
