import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../';

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  user: state.user,
  subs: state.subs,
  currentSub: state.currentSub,
});

const mapDispatchToProps = dispatch => ({
  listenForSubs: subs => actions.listenForSubs(subs, dispatch),
  setCurrentSub: sub => {
    dispatch(actions.setCurrentSub(sub));
    dispatch(actions.clearMessages());
    actions.listenForMessages([], dispatch, sub);
  },
  setUser: user => dispatch(actions.setUser(user)),
});

const FilterApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default FilterApp;