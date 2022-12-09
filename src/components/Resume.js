import React from 'react';

function Resume() {

    return(
        <div>
            <div className="center">
				<h1 className="page-header">Resume</h1>
			</div>

            <div className="bottom-spacing">
				<a href={require('../assets/docs/resumeStandin.txt')} download>
					<h4>Download Resume:</h4>
				</a>
			</div>

            <div>
                <h3>Language Profeciencies</h3>

                <ul>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    );

}