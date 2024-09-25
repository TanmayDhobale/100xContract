# X100Contract: Educational Badge System on Solana

This project implements an educational badge system on the Solana blockchain, with a React-based frontend for user interaction. It allows for the creation, issuance, and management of educational badges, as well as student profiles and content unlocking.

## Features

- Create and manage badge authorities
- Create badges with customizable properties
- Issue badges to students
- Create and manage student profiles
- Unlock content associated with badges
- Responsive web interface for easy interaction on various devices

## Technology Stack

- Solana Blockchain
- Anchor Framework for Solana program development
- React for frontend development
- Material-UI for responsive and attractive UI components
- React Router for navigation


## Key Components

1. **Solana Program**: Implements the core logic for badge creation, issuance, and management.

2. **React Frontend**: Provides a user-friendly interface for interacting with the Solana program.

3. **Header**: Responsive navigation component that adapts to different screen sizes.

4. **Home**: Landing page with quick access to main features.

5. **CreateBadge**: Form for creating new educational badges.

6. **IssueBadge**: Interface for issuing badges to students.

7. **StudentProfile**: View and manage student profiles and their earned badges.

8. **UnlockContent**: Access content associated with earned badges.

## Getting Started

### Prerequisites

- Node.js and npm
- Solana CLI
- Anchor Framework

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/x100contract.git
   cd x100contract
   ```

2. Install dependencies for the Solana program:
   ```
   npm install
   ```

3. Build and deploy the Solana program:
   ```
   anchor build
   anchor deploy
   ```

4. Install frontend dependencies:
   ```
   cd x100contract-frontend
   npm install
   ```

5. Start the frontend development server:
   ```
   npm start
   ```

## Usage

1. Connect your Solana wallet (e.g., Phantom) to the application.
2. Use the "Create Badge" feature to create new educational badges.
3. Issue badges to students using the "Issue Badge" functionality.
4. Students can view their profiles and earned badges in the "Student Profile" section.
5. Use "Unlock Content" to access content associated with earned badges.

