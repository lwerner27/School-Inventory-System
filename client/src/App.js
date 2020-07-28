import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                <div class='container'>
                    <Link class='navbar-brand' to='/'>
                        HPS Inventory
                    </Link>
                </div>
            </nav>
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
