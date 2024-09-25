/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Alert, useMediaQuery, useTheme } from '@mui/material';
import { getProgram } from '../utils/anchor';
import { useWallet } from '@solana/wallet-adapter-react';
import { BN } from '@project-serum/anchor';

const CreateBadge = () => {
  const { publicKey } = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [unlockContent, setUnlockContent] = useState('');
  const [status, setStatus] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const program = getProgram();
    try {
      await program.rpc.createBadge(name, description, new BN(maxSupply), unlockContent, {
        accounts: {
          badgeAuthority: publicKey,
          authority: publicKey,
          systemProgram: web3.SystemProgram.programId,
        },
      });
      setStatus({ type: 'success', message: 'Badge created successfully!' });
    } catch (error) {
      console.error('Error creating badge:', error);
      setStatus({ type: 'error', message: 'Error creating badge' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: isMobile ? '100%' : 400, margin: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Badge
      </Typography>
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Max Supply"
        type="number"
        value={maxSupply}
        onChange={(e) => setMaxSupply(e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Unlock Content"
        value={unlockContent}
        onChange={(e) => setUnlockContent(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Create Badge
      </Button>
      {status && (
        <Alert severity={status.type} sx={{ mt: 2 }}>
          {status.message}
        </Alert>
      )}
    </Box>
  );
};

export default CreateBadge;