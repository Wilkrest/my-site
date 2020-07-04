import React from 'react';

class Education extends React.Component{

    render(){
        return(
            <div className="education_page_container" id="education">
                <div className="education_title_container">
                    <h1 className="education_title">Education</h1>
                </div>
                <div className="degree_info_container">
                    <h1>University of North Texas</h1>
                    <h4> Bachelor's of Science in Computer Science<br></br>Graduated May 2020</h4>
                </div>
                <div className="relevant_class_intro_container">
                    <p>
                        Here's a couple of courses I took during my time at <b>UNT</b>
                    </p>
                </div>
                <div className="relevant_classes_container">
                    <h2>Relevant Courses</h2>
                    <div className="relevant_classes_column">
                        <div className="class_list">
                            <div className="relevant_class">Fundamentals of Database Systems</div>
                            <div className="relevant_class">Introduction to Computer Security</div>
                            <div className="relevant_class">Data Structures &amp; Algorithms</div>
                            <div className="relevant_class">Programming Languages</div>
                            <div className="relevant_class">Technical Writing I &amp; II</div>
                            <div className="relevant_class">Internet Programming</div>
                            <div className="relevant_class">Software Engineering</div>
                            <div className="relevant_class">Secure E-Commerce</div>
                            <div className="relevant_class">Assembly Language</div>
                            <div className="relevant_class">Computer Networks</div>
                            <div className="relevant_class">Operating Systems</div>
                            <div className="relevant_class">Linear Algebra</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;