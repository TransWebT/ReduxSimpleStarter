import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBMpQ7Gp_WJUN4NfbjEntbquA3Z2OFNIXo';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
*/
