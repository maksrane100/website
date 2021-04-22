import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h3>Hi! Welcome to Makarand's web world!</h3>
                          <p className="paragraph">
							I am a software engineer with passion for developing web and enterprise level applications to solve complex business problems using Java, J2EE technologies. I am interested in building software solutions using technologies such as Java, J2EE, Spring, JPA, React, Angular, Web Services, Relational and No-SQL databases. 
							Good experience in Spring modules such as Spring Core, Spring Web Services, Spring JDBC, Spring ORM, Spring MVC.
							Check out the links to find more about my experience and interests. 
						  </p>
						  
						  <p className="paragraph">
						  I have excellent server side development experience and good front end UI development experience. 
						  Solid experience in Object Oriented Programming, design and implementation of multi-tier applications using Java, J2EE, JDBC, JSP, JSTL, 
						  HTML, Struts 2.0, Servlets, JavaBeans, EJB, XML, XSLT, JAXP, JAXB. Strong experience in enterprise level applications development using Spring 
						  (Spring Core, Spring Application Context, Spring ORM, Spring DAO, Spring MVC, Spring JDBC), Struts and Hibernate JPA.
						  </p>
						   
						  <p className="paragraph">
							In "PROJECTS" link, you can find some sample projects along with screenshots.
						  </p>
						  <p className="paragraph">
							I am interested in consulting, developing projects, websites, support and mentoring junior developers and tutoring opportunities.
						  </p>						  
						  <p className="paragraph">
							<strong>Email:</strong> <div className="emailClass">makarandrane4@gmail.com</div>
						  </p>						  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>
      </div>
    )
  }
}
