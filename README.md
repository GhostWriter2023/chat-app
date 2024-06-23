# Chat App

## Objective
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## Context
More and more people use their phones for daily tasks, such as shopping, creating to-do lists, communicating with friends, scheduling meetings, and more. That's why many companies offer native mobile versions of their web apps, or even skip creating a web app entirely.

In the past, building high-quality mobile apps required a lot of time and money because writing apps for different platforms like iOS and Android required specialized programmers who could build and maintain multiple codebases.

Over time, however, new technologies emerged that made it easier for companies to build and maintain mobile applications using familiar syntax. One of these technologies is React Native, a framework for building Android and iOS apps that only requires one codebase.

This project will be using React Native, Expo, and Google Firestore Database to build a chat app worhty of a developer's portfolio that can be used to demonstrate the developer's knowledge of JavaScript mobile development.

## Project Overview & Requirements
The following sections provide information about the requirements for the app.

## The 5 Ws
**Who** — The users of the mobile chat app. These could be friends, family, or other students on this course. The codebase will be used by other developers working on the product.

**What** — A native chat app built with React Native, as well as all the relevant documentation.

**When** — Whenever users of the chat app want to communicate with each other.

**Where** — The app will be optimized for both Android and iOS devices. The developer will use Expo to develop the app and Google Firestore to store the chat messages.

**Why** — Mobile chat apps are among the most commonly downloaded and used apps in the world, so knowing how to build a chat app is an indispensable skill. The app will demonstrate the developer's React Native development skills.

## Key Features
● A page where users can enter their name and choose a background color for the chat screen before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat must provide users with two additional communication features: sending images and location data.

● Data gets stored online and offline.

## User Stories
● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.

● As a user, I want to be able to send messages to my friends and family members to exchange the latest news.

● As a user, I want to send images to my friends to show them what I’m currently doing.

● As a user, I want to share my location with my friends to show them where I am.

● As a user, I want to be able to read my messages offline so I can reread conversations at any time.

● As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Test Scenarios
**Scenario 1:** User successfully joins the chat room and selects a background color.

**Scenario 2:** User sends a text message and it appears in the chat.

**Scenario 3:** User sends an image from the phone’s library, and it appears in the chat.

**Scenario 4:** User shares location, and it appears in the chat as a map view.

**Scenario 5:** User reads messages offline, and previously stored conversations are available.

**Scenario 6:** User accesses the chat app using a screen reader, and all functionalities are accessible.

## Technologies Used for this Project
- JavaScript (ES2015+)
- Node.js Modules
- Express
- Various middleware packages & Package Managers
- React
- React Native
- React Native Project with Expo
- Android Studio
- Gifted Chat
- Google Firebase
- Cloud Firestore
- HTML5 Web Storage API
- ChatGPT

## Getting Started

The application is accessible at GitHub at the following link:
   [https://github.com/GhostWriter2023/chat-app](https://github.com/GhostWriter2023/chat-app)

### Setting Up the Development Environment

1. **Clone/Download the Project:**
   ```sh
   git clone https://github.com/GhostWriter2023/chat-app.git
   cd chat-app

2. **Install Dependencies:**
   Make sure you have Node.js installed. Then, run:
   ```sh
   npm install
3. **Set Up Expo:**
   If you haven't already, install the Expo CLI:
   ```sh
   npm install -g expo-cli

4. **Install Android Studio:**
   Follow the instructions to install Android Studio. Make sure you set up the Android SDK and Android Virtual Device (AVD).

5. **Running the App:**
   To start the development server, run:
   ```sh
   expo start
### Database Configuration
1. **Firebase Setup:**
   - Go to Firebase Console.
   - Create a new project.
   - Set up Firestore Database.
   - In your project settings, obtain the Firebase configuration and replace the configuration in App.js with your Firebase credentials.
2. **Firestore Rules:**
   Ensure your Firestore rules allow read and write access for authenticated users.

### Necessary Libraries
Make sure all necessary libraries and dependencies are installed:
   - @react-navigation/native
   - @react-navigation/native-stack
   - expo
   - expo-status-bar
   - firebase react

## Author
GhostWriter
