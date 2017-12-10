import fire from './fire';
import firebase from 'firebase';

/*
Exports:
*/

/*
Redux Actions:
*/
export const updateMessages = (message, oldMessages) => ({
  type: 'UPDATE_MESSAGES',
  val: combineMessagesOrSubs(message, oldMessages),
});

export const clearMessages = () => ({
  type: 'UPDATE_MESSAGES',
  val: [],
});

export const updateSubs = (sub, oldSubs) => ({
  type: 'UPDATE_SUBS',
  val: combineMessagesOrSubs(sub, oldSubs),
});

export const setMessages = array => ({
  type: 'UPDATE_MESSAGES',
  val: array,
});

export const setUser = user => ({
  type: 'SET_USER',
  val: user,
});

//we need to: listenForMessages(oldMessages, dispatch, sub);
export const setCurrentSub = sub => ({
  type: 'SET_CURRENT_SUB',
  val: sub,
});
//
// export const runSetCurrentSub = (dispatch, sub) => {
//   return dispatch => {
//     dispatch(setCurrentSub(sub))
//     dispatch(clearMessages())
//     listenForMessages([], dispatch, sub);
//   }
// }

export const signIn = new Promise((resolve, reject) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  fire
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('Success!', user);
      resolve(user);
    })
    .catch(function(error) {
      console.error(error.code, error.message);
    });
});

export const addChatMessage = (text, user, nameOfSubToUploadTo) =>
  uploadFireMessage(text, user, nameOfSubToUploadTo);

export const addSub = text => uploadFireSub(text);

export const listenForMessages = (
  oldMessages,
  dispatch,
  nameOfSubToListenFrom
) => {
  let messagesRef = fire
    .database()
    .ref(nameOfSubToListenFrom)
    .orderByKey()
    .limitToLast(100);

  messagesRef.on('child_added', snapshot => {
    const message = createMessage(snapshot),
      updatedMessage = updateMessages(message, oldMessages);
    dispatch(updatedMessage);
  });
};

export const listenForSubs = (oldMessages, dispatch) => {
  let messagesRef = fire
    .database()
    .ref('sub')
    .orderByKey()
    .limitToLast(100);

  messagesRef.on('child_added', snapshot => {
    const message = createSubObj(snapshot),
      updatedMessage = updateSubs(message, oldMessages);
    dispatch(updatedMessage);
  });
};

/*
Internal Methods
*/

const combineMessagesOrSubs = (message, oldMessages) => {
  oldMessages.push(message);
  return [...oldMessages];
};

const createMessage = snapshot => {
  const data = JSON.parse(snapshot.val());

  return {
    text: data.val,
    name: data.sender,
    id: snapshot.key,
  };
};

const createSubObj = snapshot => ({
  text: snapshot.val(),
  id: snapshot.key,
});

const uploadFireMessage = (text, user, nameOfSubToUploadTo) =>
  fire
    .database()
    .ref(nameOfSubToUploadTo)
    .push(JSON.stringify({ val: text, sender: user }));

const uploadFireSub = name =>
  fire
    .database()
    .ref('sub')
    .push(name);
