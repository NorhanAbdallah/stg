import React from 'react';
import TableData from './Components/Table/table'
import './App.css';
import {Provider} from 'react-redux'
import store from './Components/Redux/Store/index'

function App() {
    return (<Provider store={store}>
        <div className="App">
            <TableData/>
        </div>
    </Provider>);
}

export default App;
