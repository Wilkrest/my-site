import React from 'react'


class Thanks extends React.Component{

    render(){
        return(
            <div className="thanks_page_container">

                <div className="the_end_title_container">
                    <div className="the_end_title">
                        The end
                    </div>
                </div>

                <div className="last_words_container">
                    <div className="last_words">
                        I really appreciate your time, thanks for stopping by!<br></br><br></br>
                        Here's a link to download a pdf version of my resume, it pretty much sums it all up<br></br>
                        Also some links to my Linkedin and such<br></br><br></br> Thanks again
                    </div>
                </div>

                <div className="contact_icons_container">
                    <a href="General2.pdf" className="contact_icon" download="RamirezResume"> 
                        <i className="fas fa-file-download"></i>
                    </a> 
                    <a href="mailto:jose.ramgarz@gmail.com" target="_blank" rel="noopener noreferrer" className="contact_icon" >
                        <i className="far fa-envelope fa-1x"></i>
                    </a>  
                    <a href="https://www.linkedin.com/in/jose-ramirez-garza-9933a61a7/" target="_blank" rel="noopener noreferrer" className="contact_icon">
                        <i className="fab fa-linkedin fa-1x"></i>
                    </a>
                    <a href="https://github.com/Wilkrest" target="_blank" rel="noopener noreferrer" className="contact_icon">
                        <i className="fab fa-github fa-1x"></i>
                    </a>
                </div>

                <div className="final_profile_picture_container">
                    <img id="final_profile_picture" src="/profile_image.jpg" alt="profile circle"/>   
                </div>

                <div className="final_goodbye_container">
                    <div className="final_goodbye">
                        <p>Bye!</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default Thanks