import React from 'react';

class About extends React.Component{


    render(){
        return(
            <div className="about_page_container" id="about">
                <div className="about_title_container">
                    <h1 className="about_title">About Me</h1> 
                </div>
                <div className="goal_statement_container">
                    <div className="goal_statement_backdrop">
                        <p className="content" id="goal_statement">
                        I'm an extremely eager graduate with a genuine drive for creating elegant and powerful web applications. I am
                        consistent, dependable and a fast learner who is excited to master new technologies and further my
                        career as a software engineer. 
                        </p>
                    </div>
                    <div className="changing_text_backdrop">
                        <div className="changing_text_container">
                            <p className="changing_text">This text will change</p>
                        </div>
                    </div>
                    <div className="hobbies_intro_container">
                    <p className=""> I'm from Houston, Texas and in in my free time I...</p>    
                    </div>  
                </div>
                <div className="bio_container">
                   
                    <div className="create_art_container">
                        Create Art
                    </div>
                    <div className="img_container" id="art_image"></div>
                    <div className="make_music_container">
                        Make music
                    </div>
                    <div className="img_container" id="music_image"></div>
                    <div className="love_dogs_container">
                        Love my dogs
                    </div>
                    <div className="img_container" id="dogs_image"></div>
                </div>
                
            </div>
        )
    }

}

export default About;