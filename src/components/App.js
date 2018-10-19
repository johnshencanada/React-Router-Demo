import React from 'react';
import {
	Route,
	BrowserRouter,
	Switch
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Home from './Home';
import About from './About';
import Ambassadors from './Ambassadors';
import Skills from './Skills';
import Work from './Work';
import NotFound from './NotFound';
import Featured from './Featured';

library.add(faGhost)

const App = () => (

	<BrowserRouter>
		<div className="container">
	  	<Header />
	  	<Switch>
		  	<Route exact path="/" component={Home} />
		  	<Route path="/about" render={ ()=> <About title='About' /> }/>
		  	<Route exact path="/ambassadors" component={Ambassadors} />
		  	<Route path="/ambassadors/:name" component={Featured} />
		  	<Route path="/skills" component={Skills} />
		  	<Route path="/work" component={Work} />
		  	<Route component={NotFound} />
	  	</Switch>
	  </div>
  </BrowserRouter>

);

export default App;