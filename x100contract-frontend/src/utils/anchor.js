import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import idl from '../idl/x100contract.json';
const programID = new PublicKey('DAemEKoviGS9u1NYDUQL8LspGd11j9qdxkG6RWXhXiF7');
const network = 'https://api.devnet.solana.com';
const opts = {
  preflightCommitment: 'processed'
};

export const getProvider = () => {
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(connection, window.solana, opts);
  return provider;
};

export const getProgram = () => {
  const provider = getProvider();
  return new Program(idl, programID, provider);
};