import React from 'react';

class Education extends React.Component{

    render(){
        return(
            <div className="education_page_container" id="education">
                <div className="education_title_container">
                    <h1 className="education_title">Education</h1>
                </div>
                <div className="degree_info_container">
                    <h2> Bachelor of Science in Computer Science</h2>
                    <h3>University of North Texas, Denton, TX</h3>
                    <h4>Graduated May 2020</h4>
                </div>
                <div className="relevant_classes_container">
                    <div className="relevant_classes_column">
                        <ul className="class_list">
                            <li className="relevant_class">Secure E-Commerce</li>
                            <li className="relevant_class">Software Engineering</li>
                            <li className="relevant_class">Operating Systems</li>
                            <li className="relevant_class">Assembly Language</li>
                        </ul>
                    </div>
                    <div className="relevant_classes_column">
                        <ul className="class_list">
                            <li className="relevant_class">Fundamentals of Database Systems</li>
                            <li className="relevant_class">Introduction of Computer Security</li>
                            <li className="relevant_class">Data Structures and Algorithms</li>
                            <li className="relevant_class">Linear Algebra</li>
                        </ul>
                    </div>
                    <div className="relevant_classes_column">
                        <ul className="class_list">
                            <li className="relevant_class">Internet Programming</li>
                            <li className="relevant_class">Computer Networks</li>
                            <li className="relevant_class">Programming Languages</li>
                            <li className="relevant_class">Technical Languages</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;