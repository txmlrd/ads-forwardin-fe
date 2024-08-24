# ADS Forwardin Front-End Intern Test Case

This project is a test case implementation for ADS Digital Partner Intern FE. It includes a landing page, authentication system using NextAuth, and a dashboard with various features.

## Project Details

- **Name:** I Gusti Agung Ngurah Adhi Sanjaya
- **Email:** gungadhisanjaya@gmail.com
- **University:** Institut Teknologi Sepuluh Nopember
- **Repository Link:** [GitHub Repository](https://github.com/txmlrd/ads-forwardin-fe)
- **Live Demo:** [ads-forwardin-test-case.vercel.app](https://ads-forwardin-test-case.vercel.app/)

## Credentials

### Sign In
- **Email:** user@example.com
- **Password:** pass

### Sign Up
- **Email:** user@example.com
- **Username:** user
- **Phone Number:** 6212345678
- **Password:** Password123!

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```
   git clone https://github.com/txmlrd/ads-forwardin-fe.git
   ```
2.  **Navigate to the Project Directory:**
 ```
   cd ads-forwardin-fe
```
3. **Instal Depedency:**
 ```
   npm install
```
4. **Set Up Environment Variables: Create a .env.local file in the root directory and add the following environment variables:**
 ```
  NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=rahasia123

```
5. **Run App:**
```
npm run dev
```


### Issues Encountered
- **Initial Configuration Error:** There was an issue where the NextAuth path was incorrectly set, leading to authentication failures. This was resolved by updating the path to the correct configuration.
- **Environment Variables:** Missing or incorrectly set environment variables can cause issues, particularly the `NEXTAUTH_SECRET` in production, which was addressed during the setup.

## Conclusion
This project demonstrates the integration of Next.js with NextAuth for a secure and responsive authentication system. The implementation covers key functionalities such as registration, login, and a user dashboard, all designed with a focus on user experience and security.
