# Rentify Web App

Welcome to Rentify, a web application designed to streamline the process of renting properties. This README file will guide you through the flow of the project and its features.

## Project Overview

Rentify is a web application that facilitates the interaction between property sellers and buyers. It allows sellers to list their properties and buyers to browse and express interest in these properties. The application ensures a user-friendly experience with a clear separation of functionalities for buyers and sellers.

## Developer Information

**Developer:** Shreyal Jain  
**Position:** 3rd Year B.Tech CSE Student  
**Role:** Full Stack Web Developer

## Application Flow

### Landing Page

- **Purpose:** The entry point of the application.
- **Features:**
  - Users can choose to sign up or log in.

### Sign Up

- **Purpose:** To allow new users to create an account.
- **Process:**
  - Users provide necessary information to create an account.
  - Upon successful account creation, users are directed to the login page.

### Login

- **Purpose:** To authenticate users and direct them to the appropriate dashboard.
- **Features:**
  - Users select their role as either a buyer or a seller.
  - Depending on the selection, users are redirected to the respective page.

### Seller Dashboard

- **Features:**
  - **Property Form:**
    - Sellers fill out a form with details about the property they wish to sell.
    - On submission, the property details are uploaded to the database.
  - **Show My Properties Button:**
    - Displays a list of all properties uploaded by the seller.
  - **Property Management:**
    - Sellers can update or delete their property listings.

### Buyer Dashboard

- **Features:**
  - **Property Listings:**
    - Buyers can browse through all properties listed by various sellers.
  - **Interest Button:**
    - By clicking "I am interested," buyers can view the seller's contact details.

### Logout

- **Purpose:** To end the user session and clear local storage.
- **Process:**
  - Users can log out by clicking the logout button.
  - This action clears the local storage and redirects users to the home page.

### Authentication

- **Purpose:** To ensure that users can access the functionalities only after logging in.
- **Process:**
  - If a user tries to access any feature without logging in, they are redirected to the login page.

### Access Control

- **Logged-in Users:**
  - Can access all functionalities specific to their role (buyer or seller).
- **Non-Logged-in Users:**
  - Are redirected to the login page if they try to access restricted areas.

## Note on Responsiveness

Please note that the UI is not 100% responsive. Kindly forgive any inconvenience this may cause.

## Dummy Account for Testing

To try out the application, you can use the following dummy email and password:

- **Email:** rajesh123@gmail.com
- **Password:** 123456

## Conclusion

Rentify provides a seamless platform for property rental management, catering to both sellers and buyers with dedicated features for each. Enjoy using Rentify to simplify your property rental processes.

For any further assistance, please contact the developer.

**Shreyal Jain**  
**3rd Year B.Tech CSE Student**
