# 100xContract: Educational Badge System on Solana

This project implements an educational badge system on the Solana blockchain. It allows for the creation, issuance, and management of educational badges, as well as student profiles.

## Features

- Create and manage badge authorities
- Create badges with customizable properties
- Issue badges to students
- Create and manage student profiles
- Unlock content associated with badges

## Getting Started

### Prerequisites

- Solana CLI
- Anchor Framework
- Node.js and npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/x100contract.git
   cd x100contract
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the program:
   ```
   anchor build
   ```

### Deployment

The program is deployed on Solana's devnet at the address: `DAemEKoviGS9u1NYDUQL8LspGd11j9qdxkG6RWXhXiF7`

To deploy your own instance:

1. Update the `Anchor.toml` file with your own program ID
2. Deploy to devnet:
   ```
   anchor deploy --provider.cluster devnet
   ```



## Testing

Run the test suite with:


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
