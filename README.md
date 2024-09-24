# Crowdfunding DApp
This is a decentralized crowdfunding application where users can create campaigns, donate to campaigns, and track the progress of fundraising campaigns using Ethereum smart contracts. The frontend is built using React with Vite, and the smart contract is written in Solidity.

## Features
- `Create Campaigns:` Users can create crowdfunding campaigns by providing details such as the title, description, target amount, deadline, and an image.
- `Donate to Campaigns:` Users can contribute funds to any campaign by sending Ether.
- `Track Donations:` The app tracks all donators and their donations, and the amount collected for each campaign.
- `List Campaigns:` All campaigns are listed and viewable on the platform.

## Technologies Used
### Frontend:
- React with Vite for fast development.
- Tailwind CSS for styling.
- Thirdweb & Ethers.js for interacting with the Ethereum blockchain.

### Backend:
- Solidity for the Ethereum smart contract.
- Hardhat for development and testing of the contract.

## Smart Contract Overview
The smart contract (Crowdfunding.sol) manages the logic for creating and funding campaigns. Below are the main functionalities of the contract:

### Functions:
- `createCampaign:` Allows a user to create a new campaign by providing the campaign details.
- `donateToCampaign:` Allows users to donate to an existing campaign by sending Ether.
- `getDonators:` Returns the list of donators and their donations for a specific campaign.
- `getCampaigns:` Retrieves all the campaigns created on the platform.

## License
This project is licensed under the MIT License.

## Contributions
Feel free to fork this repository and contribute! All contributions are welcome.
