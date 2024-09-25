import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to X100Contract Educational Badge System
      </Typography>
      <Typography variant="body1" paragraph>
        Manage and issue educational badges on the Solana blockchain.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button fullWidth variant="contained" component={RouterLink} to="/create-badge">
            Create Badge
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button fullWidth variant="contained" component={RouterLink} to="/issue-badge">
            Issue Badge
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button fullWidth variant="contained" component={RouterLink} to="/student-profile">
            View Student Profile
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button fullWidth variant="contained" component={RouterLink} to="/unlock-content">
            Unlock Content
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;