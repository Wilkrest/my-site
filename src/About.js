import React from 'react';

class About extends React.Component{


    render(){
        return(
            <div className="about_page_container" id="about">
                <div className="about_title_container">
                    <h1 className="about_title">About Me</h1> 
                </div>
                <div className="goal_statement_container">
                    <div>
                        <p style={{fontSize:"large"}}>Hey!</p><br></br>
                        I’m <b>Jose</b>, a budding developer excited in all facets of <b>web development. </b>
                        <p>Growing up, I always envisioned myself as a painter. An artist unendingly devoted to spilling painted passions on canvas,and then I wrote my first “Hello world".
                        Computers replaced canvases and code became my paintbrush, I’ve never looked back. 
                        I’m completely captivated by the world of software development, it’s a field that provides continuous opportunities to face challenges and sharpen my skills as a developer and as a problem solver.
                         I’m beyond excited to pursue my passion and craft software I can be proud of.</p>
                        </div>
                    
                    <div className="hobbies_intro_container">
                        <p> Here’s a  little more about me:<br></br><br></br> I’m from Houston, Texas and in my free time I...</p>    
                        </div>  
                </div>

                <div className="bio_container">

                    <div className="hobby_container" id="hobby_art">
                        <div className="hobby_text_container" id="hobby_text_art">
                            Try my hand at art
                        </div>
                        <div className="img_container" id="art_image"></div>
                    </div>

                    <div className="hobby_container" id="hobby_nature">
                        <div className="hobby_text_container">
                            get lost in the woods
                        </div>
                        <div className="img_container" id="music_image"></div>
                    </div>

                    <div className="hobby_container" id="hobby_dogs">
                        <div className="hobby_text_container">
                            and love my dogs
                        </div>
                        <div className="img_container" id="dogs_image"></div>
                        <p id="about_to_education" >Now here's a bit about my last four years:</p>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default About;