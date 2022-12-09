import React from 'react';

function About() {

    return(

        <div>
            <div className="center" id="about">
                <h2 className="page-header">About: </h2>
            </div>

            <div>
                <img src={require('../assets/img/profilePicture.jpg')} alt="profile picture" className="photo" />
            </div>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed nulla nec nulla ullamcorper consectetur. 
                    Quisque gravida justo a ex sagittis, ac malesuada metus porta. Quisque non mauris consequat, laoreet libero a, mattis odio. 
                    Ut in nisi nisi. Mauris quis porttitor ligula, ut maximus metus. Nulla et aliquam mi, id pellentesque odio. 
                    Phasellus sed nisi massa. Maecenas condimentum turpis imperdiet molestie porttitor. 
                    Curabitur quis quam sit amet sapien condimentum mattis sit amet eget odio. Vivamus a mi nulla.
                </p>
            </div>
        </div>

    );

}

export default About;