import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div className='app'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        HPS Inventory
                    </Link>
                </div>
            </nav>
            <Switch>
                <Route path='/accounts/register'>
                    <Register />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                {/* This must be the final Route */}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
