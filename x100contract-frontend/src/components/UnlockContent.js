import React, { useState } from 'react';
import { getProgram } from '../utils/anchor';
import { useWallet } from '@solana/wallet-adapter-react';

const UnlockContent = () => {
  const { publicKey } = useWallet();
  const [badgeId, setBadgeId] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const program = getProgram();
    try {
      const result = await program.rpc.unlockContent(badgeId, {
        accounts: {
          badge: publicKey,
          studentProfile: publicKey,
          student: publicKey,
        },
        signers: [],
      });
      setContent(result.content);
    } catch (error) {
      console.error('Error unlocking content:', error);
      alert('Error unlocking content');
    }
  };

  return (
    <div>
      <h2>Unlock Content</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Badge ID"
          value={badgeId}
          onChange={(e) => setBadgeId(Number(e.target.value))}
          required
        />
        <button type="submit">Unlock Content</button>
      </form>
      {content && (
        <div>
          <h3>Unlocked Content</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default UnlockContent;