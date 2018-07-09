import React from 'react';

const About = (props) => (
    <div className="container">
    <div className="jumbotron">
    <h1 className="display-4">A note on what I have done</h1>
    <p className="lead">In this application, am creating a camper information passing the data to Node JS server via XHR call. I have a page to retrieve all the newly created information from the sever(HARD CODED Values) and display on the grid. Thus making an end-end call.</p>
    
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