import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          X100Contract: Educational Badge System
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/create-badge">
            Create Badge
          </Button>
          <Button color="inherit" component={RouterLink} to="/issue-badge">
            Issue Badge
          </Button>
          <Button color="inherit" component={RouterLink} to="/student-profile">
            Student Profile
          </Button>
          <Button color="inherit" component={RouterLink} to="/unlock-content">
            Unlock Content
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;