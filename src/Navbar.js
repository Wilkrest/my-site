import React from 'react';

class Navbar extends React.Component{

    constructor(props){
        super(props);

        this.state = {}
    
        this.closeNav = this.closeNav.bind(this);
        this.extendNav = this.extendNav.bind(this);
    }   

    //hulu11
    //handles the navbar opening
    extendNav(){
        const navbar = document.getElementById("navbar");
        navbar.classList.add("extend_nav");

        const openContainer = document.getElementById("open_nav_list_container");
        openContainer.style.display = "flex";

        //call function to dim screen

        this.dimScreen("dim");

        //call all animation functions to open navbar
        this.animateElements("in");
        this.animateClosedNav();
    }

    //handles the navbar closing
    closeNav(){
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("extend_nav");
        navbar.classList.add("close_nav");

        this.dimScreen();

        //call all animation functions to close navbar
        this.animateElements();
        this.animateClosedNav("in");
    }    

    render(){
        return(
            <>
            <nav className="navbar" id="navbar" onMouseEnter={this.extendNav} onMouseLeave={this.closeNav}> 
                <div className="open_nav_list_container" id="open_nav_list_container"> 

                    <div className="nav_name_container" id="name_container">
                        <h1 className="name">José Ramirez Garza</h1>
                    </div>

                    <div className="profile_picture_container">
                        <img id="profile_picture" src="/profile_image.jpg" alt="profile circle"/>   
                    </div>

                    <div className="nav_links_container" id="nav_links_container">
                        <a href="#about" className="nav_link" id="about_link" onClick={this.closeNav}>About Me</a>
                        <a href="#education" className="nav_link" id="education_link" onClick={this.closeNav}>Education</a>
                        <a href="#skills" className="nav_link" id="skills_link" onClick={this.closeNav}>Skills</a>
                    </div>

                    <div className="nav_icons_container" id="nav_icons">
                        <a href="mailto:jose.ramgarz@gmail.com" target="_blank" rel="noopener noreferrer" className="nav_icon" >
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
            </nav>

            <div className="closed_navbar" id="closed_navbar" onMouseEnter={this.extendNav}>
                <div className="closed_nav_icon_container">
                    <div className="closed_nav_arrow_container">
                        <div className="nav_arrow">
                            <p style={{fontWeight:"bold"}} id="arrow">&gt;</p>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }

    //handles the rotation of the closed navbar arrow
    animateArrow(direction){
        const arrow = document.getElementById("arrow");

        if(direction === "in"){
            arrow.classList.add("rotate_arrow_in");
        }
        else{
            arrow.classList.remove("rotate_arrow_in");
            arrow.classList.add("rotate_arrow_out");
        }
    }

    dimScreen(direction){
        const overlay = document.getElementById("resume");
        if(direction === 'dim'){
            overlay.classList.remove("undim_background")
            overlay.classList.add("dim_background");
        }
        else{
            overlay.classList.remove("dim_background");
            overlay.classList.add("undim_background");
        }
    }

    //this function animates the name element for the navbar
    //it takes a direction as an arguement to dictate if the animation is adding or removing the element
    animateName(direction){
        if(direction === "in"){
            const nameContainer = document.getElementById("name_container");
            nameContainer.style.pointerEvents = "none";
            nameContainer.classList.remove("name_bounce_out");
            nameContainer.classList.add("name_bounce_in");
        }
        else{
            const nameContainer = document.getElementById("name_container");
            nameContainer.classList.remove("name_bounce_in");
            nameContainer.classList.add("name_bounce_out");
        }
    }

    //this function animates the picture element for the navbar
    //it takes a direction as an arguement to dictate if the animation is adding or removing the element
    animatePicture(direction){
        if(direction === "in"){
            const profilePicture = document.getElementById("profile_picture");
            profilePicture.classList.remove("hide_picture");
            profilePicture.classList.add("reveal_picture");
        }
        else{
            const profilePicture = document.getElementById("profile_picture");
            profilePicture.classList.remove("reveal_picture");
            profilePicture.classList.add("hide_picture");
        }
    }

    //this function animates the nav link elements themselves
    //it takes a direction as an arguement to dictate if the animation is adding or removing the element
    animateLinks(direction){
        const navLinks = document.getElementsByClassName("nav_link");

        //iterate through every navlink animation (1-3) and add them to the link classes
        let x = 1;

        if(direction === "in"){
            for (let link of navLinks) {
                link.classList.remove("link_slide_out" + x);
                link.classList.add("link_slide_in" + x);
                x += 1;
            }
        }
        else{
            for (let link of navLinks) {
                link.classList.remove("link_slide_in" + x);
                link.classList.add("link_slide_out" + x);
                x += 1;
            }
        }

    }

    animateClosedNav(direction){
        const nav = document.getElementById("closed_navbar")
        if(direction === "in"){
            nav.classList.remove("hide_closed_nav");
            nav.classList.add("reveal_closed_nav");
        }
        else{
            nav.classList.remove("reveal_closed_nav");
            nav.classList.add("hide_closed_nav");
        }
    }

    //this function animates the icon container element for the navbar
    //it takes a direction as an arguement to dictate if the animation is adding or removing the element
    animateIcons(direction){
        if(direction === "in"){
            const navIcons = document.getElementById("nav_icons");
            navIcons.classList.remove("hide_icons");
            navIcons.classList.add("reveal_icons");
        }
        else{
            const navIcons = document.getElementById("nav_icons");
            navIcons.classList.remove("reveal_icons");
            navIcons.classList.add("hide_icons");
        }
    }

    //this function animates all the elements on the navbar
    //it takes a direction "in" to determine the direction of the animation
    animateElements(direction){
        if(direction === "in"){
            this.animateName("in");
            this.animatePicture("in");
            this.animateIcons("in");
            this.animateLinks("in");
            this.animateArrow("in");
        }
        else{
            this.animateName();
            this.animatePicture();
            this.animateIcons();
            this.animateLinks();
            this.animateArrow();
        }
    }
}

export default Navbar;