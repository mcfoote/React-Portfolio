import React from 'react';

function Navigation(props) {

    const {
        current,
        setCurrent
    } = props;

    return(

        <nav>
            <ul className='flex-row mobile-view'>
                <li className={current === "about" ? "mx-3 navActive" : "mx-3"}>
					<span onClick={() => setCurrent("about")}>About Me</span>
				</li>
				<li className={current === "portfolio" ? "mx-3 navActive" : "mx-3"}>
					<span onClick={() => setCurrent("portfolio")}>Portfolio</span>
				</li>
				<li className={current === "contact" ? "mx-3 navActive" : "mx-3"}>
					<span onClick={() => setCurrent("contact")}>Contact</span>
				</li>
				<li className={current === "resume" ? "mx-3 navActive" : "mx-3"}>
					<span onClick={() => setCurrent("resume")}>Resume</span>
                </li>
            </ul>
        </nav>

    );

}