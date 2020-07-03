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
                        I really appreciate your time, thanks for stopping by!<br></br>
                        Here's a link to download a pdf version of this site, it pretty much sums it all up<br></br> thanks again!
                    </div>
                </div>

                <div className="resume_download_container">
                    <a href="General2.pdf" className="resume_download" download="RamirezResume"> 
                    <span style={{fontSize: "3rem"}}>
                        <i class="fas fa-file-download"></i>
                    </span>
                    </a>
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