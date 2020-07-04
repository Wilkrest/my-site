import React from 'react'

class Skills extends React.Component{
    render(){
        return(
            <div className="skills_page_container" id="skills">
                <div className="skills_title_container">
                    <h1 className="skills_title">Skills</h1>
                </div>
                <div className="skills_intro_container">
                    <p>Here are some skills I've picked up<br></br> Listed in order from most proficient to least</p>
                </div>

                <div className="languages_title">
                    <h2>Languages</h2>
                </div>
                <div className="languages_list">
                    <div className="skill">C++</div>
                    <div className="skill">Javascript</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">Python</div>
                    <div className="skill">SQL</div>
                    <div className="skill">NoSQL</div>
                    <div className="skill">Kotlin</div>
                </div>

                <div className="other_tech_title">
                    <h2>Frameworks &amp; Other Technologies</h2>
                </div>
                <div className="other_tech_list">
                    <div className="skill">React.js</div>
                    <div className="skill">Bulma Framework</div>
                    <div className="skill">Android Studio</div>
                    <div className="skill">Django Framework</div>
                    <div className="skill">Django REST Framework</div>
                    <div className="skill">Bootstrap</div>
                    <div className="skill">Node.js</div>
                    <div className="skill">AWS (S3, DynamoDB, API Gateway)</div>
                </div>                
            </div>
        )
    }
}

export default Skills;