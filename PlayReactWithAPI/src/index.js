import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import 'babel-polyfill';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import NavBar from './components/NavBar';
import asyncComponent from './components/asyncComponent';


const Home = asyncComponent(() => import('./components/Home').then(module => module.default), { name: 'Home' });
const About = asyncComponent(() => import('./components/About').then(module => module.default), { name: 'About' });


const routes = (
    <Router>
        <div>
            <NavBar />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </div>
    </Router>
);
ReactDOM.render(
    routes, document.getElementById('app')
);