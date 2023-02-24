# FlowDock
![Untitled](https://user-images.githubusercontent.com/76788555/221181641-6f953f3f-dc2a-4918-af8e-6c4d7632907b.png)


Slack-like web application built with `React.js`.

**Other used technologies are:** Firebase (Authentication, Firestore Database, Hosting), styled-components, React Spinners, Redux Toolkit

🔗 [Demo Link](https://slack-clone-6cc34.web.app/)

## Installation

Before running the application, you need to set the required environment variables. In order to do that, you can use the provided example env file.

Get to the **root directory** of the project and rename the existing file named `.env.example` to `.env.local` first. After that, open up the file and fill it in like the following.

```bash
REACT_APP_FIREBASE_API_KEY=API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=PROJECT_ID.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=PROJECT_ID.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=SENDER_ID
REACT_APP_FIREBASE_APP_ID=APP_ID
```

In order to get your own Firebase information, you need to initialize a Firebase Web App project first. After creating a new Firebase Web App project, you will be able to get the config object. See the [documentation](https://firebase.google.com/docs/web/learn-more#config-object) to learn more.

## Running Locally

1 - Install dependencies via npm

```bash
$ npm install
```

2 - Run the application by using the following command

```bash
$ npm start
```

After that, you should be able to display the app on http://localhost:3000 in your browser.

## License

