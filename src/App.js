import React, {useState} from 'react';
import './App.css';


import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {

    let [current, setCurrent] = useState('about');

    let renderPage = () => {

		switch (current) {

			case 'about':
				return <About />;
			case 'portfolio':
				return <Portfolio />;
            case 'resume':
				return <Resume />;
			case 'contact':
				return <Contact />;
			
			default:
				return null;

		}

	};


    return(
        <div>
            <div className="header">
				<Header current={current} setCurrent={setCurrent}></Header>
			</div>
			<div>
				<main>{renderPage()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
        </div>
    );

}

export default App;