import configureStore from './store/configureStore';
import { assignBugToUser, loadBugs } from './store/bugs';

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 1)), 2000);
