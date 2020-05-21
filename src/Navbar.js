import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar"> 
                <div className="open_nav_list_container"> 

                    <div className="profile_picture_container">
                            <img id="profile_picture" src="/profile_image.jpg" alt="profile circle"/>   
                    </div>

                    <div className="nav_links_container">
                        <p className="nav_link">About Me</p>
                        <p className="nav_link">Education</p>
                        <p className="nav_link">Experience</p>
                    </div>

                    <div className="nav_icons_container">
                        <p className="nav_icon">
                            <img src="" alt="email icon"/>
                        </p>  
                        <p className="nav_icon">
                            <img src="" alt="Linkedin icon"/>
                        </p>
                        <p className="nav_icon">
                            <img src="" alt="Github icon"/>
                        </p>
                    </div>

                </div>

                <div className="closed_nav_list_container">

                    {/*<ul className="closed_nav_list">
                        <div className="nav_arrow_container">
                            <li className="nav_arrow">></li>
                        </div>

                        <div className="nav_dot_container">
                            <li className="nav_dot">o</li>
                            <li className="nav_dot">o</li>
                            <li className="nav_dot">o</li>
                        </div>
                    </ul>*/}

                    <div className="nav_arrow_container">
                        <p className="nav_arrow">></p>
                    </div>

                    <div className="nav_dot_container">
                        <p id="nav_arrow_1" className="nav_dot">o</p>
                        <p id="nav_arrow_2" className="nav_dot">o</p>
                        <p id="nav_arrow_3" className="nav_dot">o</p>
                    </div>

                {/*<div className="closed_nav_list"></div>*/}

                </div>
            </nav>
        )
    }
}

export default Navbar;