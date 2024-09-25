import React, { useState } from 'react';
import { getProgram } from '../utils/anchor';
import { useWallet } from '@solana/wallet-adapter-react';

const StudentProfile = () => {
  const { publicKey } = useWallet();
  const [student, setStudent] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const program = getProgram();
    try {
      const studentProfile = await program.account.studentProfile.fetch(new publicKey(student));
      setProfile(studentProfile);
    } catch (error) {
      console.error('Error fetching student profile:', error);
      alert('Error fetching student profile');
    }
  };

  return (
    <div>
      <h2>Student Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Public Key"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
          required
        />
        <button type="submit">View Profile</button>
      </form>
      {profile && (
        <div>
          <h3>Profile Details</h3>
          <p>Student: {profile.student.toString()}</p>
          <p>Badges: {profile.badges.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;