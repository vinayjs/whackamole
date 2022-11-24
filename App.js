import React from 'react';
import GameBoard from './components/GameBoard';
import Home from './components/HomePage';
import { Provider} from  'react-redux'
import store from './redux/store';
import Navigator from './routes/HomeStack'
import HomePage from './components/HomePage';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator/>
    {/* <HomePage/> */}
    </Provider>
  );
}

