import React from 'react';

function Contact() {

    return(
        <div>
            
            <div className="sectionHeading">
                <h2 >Contact Me</h2>
            </div>

            <div id="contactWrapper">

                <div id="contactList">
                    <ul>
                        <li><p>555-555-5555</p></li>
                        <li><a href="mailto:mcfoote321@gmail.com">Email</a></li>
                        <li><a href="https://www.linkedin.com/">linkedIn</a></li>
                        <li><a href="https://github.com/mcfoote">Github</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );

}

export default Contact;