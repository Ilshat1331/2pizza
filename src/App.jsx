import React from 'react';
import 'normalize.css';
import './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './Routes/Home'
import About from './Routes/About'

function App() {
	return (
		<BrowserRouter>
			<NavMenu />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</BrowserRouter>
	);
}

export default App;
