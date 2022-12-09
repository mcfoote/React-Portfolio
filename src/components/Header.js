import React from 'react';
import Navigation from './Navigation'

function Header(props) {

    const {
        current,
        setCurrent
    } = props;

    return (

        <header>
            <div>
                <h1>Mitchell Foote's Portfolio</h1>
            </div>
            <div>
                <Navigation current={current} setCurrent={setCurrent}></Navigation>
            </div>
        </header>

    );

}

export default Header;
