import update from 'react-addons-update';

let defaultState = {
  messages: [],
  user: void 0,
  subs: [],
  currentSub: void 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGES':
      return update(state, {
        messages: { $set: action.val },
      });
    case 'SET_USER':
      return update(state, {
        user: { $set: action.val },
      });
    case 'UPDATE_SUBS':
      return update(state, {
        subs: { $set: action.val },
      });
    case 'SET_CURRENT_SUB':
      return update(state, {
        currentSub: { $set: action.val },
      });
    default:
      return state;
  }
};
