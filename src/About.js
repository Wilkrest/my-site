import React from 'react';

class About extends React.Component{


    render(){
        return(
            <div className="about_page_container">
                <div className="goal_statement_container">
                    <p className="content" id="goal_statement">
                    Extremely eager graduate with a genuine drive for creating elegant and powerful web applications. I am
                    consistent, dependable and a fast learner who is excited to master new technologies and further my
                    career as a software engineer. 
                    </p>
                </div>
                <div className="changing_text_container">
                    <p className="changing_text">This text will change</p>
                </div>
            </div>
        )
    }

}

export default About;