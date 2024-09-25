import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box, useMediaQuery, useTheme } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import CreateBadge from './components/CreateBadge';
import IssueBadge from './components/IssueBadge';
import StudentProfile from './components/StudentProfile';
import UnlockContent from './components/UnlockContent';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header isMobile={isMobile} />
      <Container component="main" sx={{ mt: isMobile ? 7 : 8, mb: 2, flex: 1, p: isMobile ? 2 : 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-badge" element={<CreateBadge />} />
          <Route path="/issue-badge" element={<IssueBadge />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/unlock-content" element={<UnlockContent />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;