import React from 'react';

function Project(props) {

    return(

        <section>
            <div className="columns is-justify-content-center is-flew-wrap-wrap is-desktop is-flex-direction-row">
                {props.project.map((project) => (
                    <div className="column">
                        <div className="card">
                            <div className="card-img">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );

}

export default Project;