import React, { useState } from 'react';
import { getProgram } from '../utils/anchor';
import { useWallet } from '@solana/wallet-adapter-react';

const IssueBadge = () => {
  const { publicKey } = useWallet();
  const [badgeId, setBadgeId] = useState(0);
  const [student, setStudent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const program = getProgram();
    try {
      await program.rpc.issueBadge(badgeId, {
        accounts: {
          badge: publicKey,
          studentProfile: new publicKey(student),
          authority: publicKey,
          badgeAuthority: publicKey,
        },
        signers: [],
      });
      alert('Badge issued successfully!');
    } catch (error) {
      console.error('Error issuing badge:', error);
      alert('Error issuing badge');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Badge</h2>
      <input
        type="number"
        placeholder="Badge ID"
        value={badgeId}
        onChange={(e) => setBadgeId(Number(e.target.value))}
        required
      />
      <input
        type="text"
        placeholder="Student Public Key"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        required
      />
      <button type="submit">Issue Badge</button>
    </form>
  );
};

export default IssueBadge;