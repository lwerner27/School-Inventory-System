import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Auth0Provider
        domain='lucasjwerner.us.auth0.com'
        clientId='yU9DNtVYfT5taAbMmVhtQV4SDiIzd75P'
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
