import React from 'react';

function Project(props) {

    return(

        <section>
            <div className="columns is-justify-content-center is-flex-wrap-wrap is-desktop is-flex-direction-row">

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
                            <div className="content">
                                {project.contentText}
                                <br/>
                                <div className="content">
                                    Technologies: {project.technologies}
                                    <br/>
                                </div>
                                <div className="card">
                                    <footer className="card-footer">
                                        <a href={project.repository}>Link to the Repository:</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>

    );

}

export default Project;