import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBLg7yMQV9RHe6ungMq7W7WAlhSIY3P9zI',
  authDomain: 'chattest-86073.firebaseapp.com',
  databaseURL: 'https://chattest-86073.firebaseio.com',
  projectId: 'chattest-86073',
  storageBucket: 'chattest-86073.appspot.com',
  messagingSenderId: '965999974090',
};

export default firebase.initializeApp(config);
