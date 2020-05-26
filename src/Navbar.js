import React from 'react';

class Navbar extends React.Component{

    constructor(props){
        super(props);

        this.state = {}
    
        this.clickedLink = this.clickedLink.bind(this);
        this.resetOverlay = this.resetOverlay.bind(this);
    }

    clickedLink(){
        console.log("clicked");
        var overlay = document.getElementById("overlay");
        overlay.classList.add("clicked_link");
    }

    resetOverlay(){
        console.log("hovered");
        var overlay = document.getElementById("overlay");
        overlay.classList.remove("clicked_link");
    }

    render(){
        return(
            <>
                <div className="overlay" id="overlay">

                </div>
                <nav className="navbar" id="navbar" onMouseEnter={this.resetOverlay}> 
                    <div className="open_nav_list_container" id="open_nav_list_container"> 

                        <div className="nav_name_container">
                            <h1 className="name">José Ramirez Garza</h1>
                        </div>

                        <div className="profile_picture_container">
                                <img id="profile_picture" src="/profile_image.jpg" alt="profile circle"/>   
                        </div>

                        <div className="nav_links_container">
                            <a href="#about" className="nav_link" id="about_link" onClick={this.clickedLink}>About Me</a>
                            <a href="#education" className="nav_link" id="education_link" onClick={this.clickedLink}>Education</a>
                            <a href="#skills" className="nav_link" id="skills_link" onClick={this.clickedLink}>Skills</a>
                        </div>

                        <div className="nav_icons_container">
                            <a href="mailto:jose.ramgarz@gmail.com" target="_blank" rel="noopener noreferrer" className="nav_icon">
                                <i className="far fa-envelope fa-1x"></i>
                            </a>  
                            <a href="https://www.linkedin.com/in/jose-ramirez-garza-9933a61a7/" target="_blank" rel="noopener noreferrer" className="nav_icon">
                                <i className="fab fa-linkedin fa-1x"></i>
                            </a>
                            <a href="https://github.com/Wilkrest" target="_blank" rel="noopener noreferrer" className="nav_icon">
                                <i className="fab fa-github fa-1x"></i>
                            </a>
                        </div>

                    </div>

                    <div className="closed_nav_list_container" id="closed_nav_list_container">

                        <div className="nav_arrow_container">
                            <p className="nav_arrow">></p>
                        </div>

                        <div className="nav_dot_container">
                            <p id="nav_arrow_1" className="nav_dot">o</p>
                            <p id="nav_arrow_2" className="nav_dot">o</p>
                            <p id="nav_arrow_3" className="nav_dot">o</p>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;