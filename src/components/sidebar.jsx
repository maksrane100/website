import React, { Component } from 'react'
import Pdf from '../Makarand_Rane_Resume.pdf';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
		
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Makarand Rane</a></h1>
              <span className="email"><i className="icon-mail"></i> makarandrane4@gmail.com</span>
			  <br />
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
				  <li><a href="#expertise" data-nav-section="expertise">Expertise</a></li>
				  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
				  <li><a href="#quotes" data-nav-section="quotes">Interesting Quotes</a></li> 
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
				<li>
				   <a href = {Pdf} target = "_blank">Download My Resume</a>
				   </li>	
				   
                <li><a href="https://www.linkedin.com/in/makarand-rane-787919a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/maksrane100" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>

          </aside>
        </div>
      </div>
    )
  }
}
