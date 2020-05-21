import React from 'react'

class Skills extends React.Component{
    render(){
        return(
            <div className="skills_page_container">
                <div className="skills_title_container">
                    <h1 className="skills_title">Skills</h1>
                </div>
                <div className="skills_lists_container">
                    <div className="skills_column">
                        <ul className="skills_list">
                            <li className="skill">C++</li>
                            <li className="skill">Javascript</li>
                            <li className="skill">Python</li>
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">SQL</li>
                            <li className="skill">NoSQL</li>
                            <li className="skill">Kotlin</li>
                        </ul>
                    </div>
                    <div className="skills_column">
                        <ul className="skills_list">
                            <li className="skill">React.js</li>
                            <li className="skill">Bulma Framework</li>
                            <li className="skill">Django Framework</li>
                            <li className="skill">Django REST Framework</li>
                            <li className="skill">Bootstrap</li>
                            <li className="skill">Node.js</li>
                            <li className="skill">AWS (S3, DynamoDB, APIGateway)</li>
                            <li className="skill">Android Studio</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;