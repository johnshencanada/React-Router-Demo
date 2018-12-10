import React from 'react';
import {
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Exosphere from './works/Exosphere';
import NextHome from './works/NextHome';
import Airdrop from './works/Airdrop';

const Work = () => (
<div className="">

  <div className="main-content home">

    <h2><i class="fas fa-suitcase"></i> Projects</h2> 

    <div className="skill-header group">
      <ul className="skill-nav">
        <li><NavLink to="/work/exosphere">1.Exosphere E-commerce</NavLink></li>
        <li><NavLink to="/work/airdrop">2.Token Airdrop </NavLink></li>
        <li><NavLink to="/work/nexthome">3.Home Automation</NavLink></li>
      </ul>
    </div>
    
    <Route exact path="/work" render={ () => <Redirect to="/work/exosphere" /> } />
    <Route exact path="/work/exosphere" component={Exosphere} />
    <Route exact path="/work/nexthome" component={NextHome} />
    <Route exact path="/work/airdrop" component={Airdrop} />
  </div>

</div>


);

export default Work;