import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/accounts/register'>
                    <Register />
                </Route>
                {/* This must be the final Route */}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
