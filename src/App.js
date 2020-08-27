import React from 'react';
import { Provider } from 'react-redux'
import Sidebar from './components/sidebar/index'
import Video from './components/video/index'
import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
