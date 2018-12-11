import React from 'react';
import {
	Route,
	BrowserRouter,
	Switch
} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Ambassadors from './Ambassadors';
import Skills from './Skills';
import Work from './Work';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (

	<BrowserRouter>
		<div className="container">
	  	<Header />
	  	<Switch>
		  	<Route exact path="/" component={About} />
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