import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Expertise from './components/expertise'
import Projects from './components/projects'
import Resume from './components/resume'
import Quotes from './components/quotes'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Expertise></Expertise>
					<Projects></Projects>	
					<Quotes></Quotes>				
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
