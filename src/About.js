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
                         I find the deepest satisfaction in solving problems and I love building beautiful things with eager people. 
                        I’m also a recent graduate and I can’t wait to see what’s next!
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