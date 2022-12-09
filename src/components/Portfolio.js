import React from 'react';

function Portfolio() {

    return(
        <div>
            <section id="work" class="work">

                <div class="sectionHeading">
                    <h2 >Work</h2>
                </div>

                <div class="projectGridWrapper">

                    <div class="projectGrid">

                        <a href="https://jacksonwolfd20.github.io/MTG-Deck-Builder/assets/html/deck-builder.html" class="project MTGDeckBuilder" >
                            <div class="projectLabels">
                                <h3>MTG Deck Builder</h3>
                                <p>
                                    Javascript/HTML/Bulma
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" class="project surfReport" >
                            <div class="projectLabels">
                                <h3>Surf Report</h3>
                                <p>
                                    MERN Stack
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" class="project ledWall" >
                            <div class="projectLabels">
                                <h3>LED Wall</h3>
                                <p>
                                    Node/IoT
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" class="project calculator" >
                            <div class="projectLabels">
                                <h3>Calculator</h3>
                                <p>
                                    React/JavaScript/CSS
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/mcfoote" class="project pastelPuzzles" >
                            <div class="projectLabels">
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