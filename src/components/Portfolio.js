import React from 'react';

function Portfolio() {

    return(
        <div>
            <section id="work" className="work">

                <div className="sectionHeading">
                    <h2 >Work</h2>
                </div>

                <div className="projectGridWrapper">

                    <div className="projectGrid">

                        <a href="https://jacksonwolfd20.github.io/MTG-Deck-Builder/assets/html/deck-builder.html" className="project MTGDeckBuilder" >
                            <div className="projectLabels">
                                <h3>MTG Deck Builder</h3>
                                <p>
                                    Javascript/HTML/Bulma
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" className="project surfReport" >
                            <div className="projectLabels">
                                <h3>Surf Report</h3>
                                <p>
                                    MERN Stack
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" className="project ledWall" >
                            <div className="projectLabels">
                                <h3>LED Wall</h3>
                                <p>
                                    Node/IoT
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" className="project calculator" >
                            <div className="projectLabels">
                                <h3>Calculator</h3>
                                <p>
                                    React/JavaScript/CSS
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" className="project pastelPuzzles" >
                            <div className="projectLabels">
                                <h3>Pastel Puzzles</h3>
                                <p>
                                    MERN Stack
                                </p>
                            </div>
                        </a>

                        

                    </div>

                </div>

            </section>
        </div>
    );

}

export default Portfolio;