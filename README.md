# Chat App with Firebase Firestore

A simple chat application built with React, Next.js, and Firebase Firestore.

## Prerequisites

- Node.js >= 18
- Yarn or npm

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vladickweb/webchat
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-app
   ```

3. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

4. Create a Firebase project and set up Firestore:
   - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Set up Firestore and create a collection named "messages".
   - 
5. Create a `.env` file at the root of the project with your Firebase configuration:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=x-xxxxxxxxxx
   ```

   For simplicity, you can copy the provided `.env.example` file and replace the placeholder values.

6. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

7. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the chat app in action.

## Demo

Check out the live demo: [Chat App Demo](https://webchat-silk-two.vercel.app/)

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.