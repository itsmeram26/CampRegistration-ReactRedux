import React from 'react';

const About = (props) => (
    <div className="container">
    <div className="jumbotron">
    <h1 className="display-4">A note on what I have done</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    
    <p>I have used the following to build the application</p>
    <ul>
        <li>React</li>
        <li>Redux</li>
        <li>React-Data-Grid</li>
        <li>Node JS - A Server to serve XHR calls</li>
        <li>Bootstrap</li>
    </ul>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="/campers" role="button">Learn more</a>
    </p>
    </div>
    </div>
)



export default About;