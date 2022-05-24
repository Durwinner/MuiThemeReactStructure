import { createStore } from 'redux';
import reducer from 'context/redux/reducers/reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);
const persister = 'Free';

export { store, persister };
//192.168.1.23
//3306
//test
//test
//test
