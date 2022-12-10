import React from 'react';
import './App.css';


import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

    return(
        <div>
            <div className="header">
				<Header></Header>
			</div>
			<div>
				<Footer></Footer>
			</div>
        </div>
    );

}

export default App;