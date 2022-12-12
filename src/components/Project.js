import React from 'react';

function Project(props) {

    return(

        <section>
            <div className="columns is-justify-content-center is-flew-wrap-wrap is-desktop is-flex-direction-row">
                {props.project.map((project) => (
                    <div>
                        <div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );

}

export default Project;