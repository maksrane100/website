import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
         <section className="colorlib-expertise" data-section="expertise">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="" />
                </span>
                <div className="desc">
                    <h3>Server Side Development </h3>
                    <p>Solid server side development experience using Java, J2EE, Spring, Hibernate, JPA, Web Services, Apache Camel</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>Web development experience using JavaScript, jQuery, jQuery UI, React, Vue, HTML, CSS</p>
                </div>
                </div>
            </div>
			
            <div className="col-md-4 text-center animate-box">
                <div className="services color-7">
                <span className="icon">
                    <i className="" />
                </span>
                <div className="desc">
                    <h3>Web Services / REST</h3>
                    <p>Experience with building web services.</p>
					<p>Experience with both SOAP and REST web services.</p>
                </div>
                </div>
            </div>
			
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="" />
                </span>
                <div className="desc">
                    <h3>Database / Unix</h3>
                    <p>Experience with databases such as Oracle, SQL Server, MySQL, Mongo DB.</p>
					<p>Experience with unix scripting.</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
      </div>
    )
  }
}
