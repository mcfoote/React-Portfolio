import React from 'react';

function Project(props) {

    return(

        <section>
            <div className="columns is-justify-content-center is-flew-wrap-wrap is-desktop is-flex-direction-row">

                {props.projectArr.map((project) => (
                    <div className="column">
                        <div className="card">
                            <div className="card-img">
                                <div className="image is-3by3">
                                    <a href={project.deployment}>
                                        <img src={process.env.PUBLIC_URL + project.img} alt="Project Image"/>
                                    </a>
                                </div>
                            </div>
                            <div className="card-content">
                                <div>
                                    <div>
                                        <p>{project.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>

    );

}

export default Project;