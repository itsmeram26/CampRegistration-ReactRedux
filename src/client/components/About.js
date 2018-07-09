import React from 'react';

const About = (props) => (
    <div className="container">
    <div className="jumbotron">
    <h1 className="display-4">A note on what I have done</h1>
    <p className="lead">In this application, am creating a user information passing the data to Node JS server via XHR call. I have a dashboard page to retrieve all the newly created information from the sever(HARD CODED Response) and display on the grid. Thus making an end-end flow.</p>
    
    <p>I have used the following in this application</p>
    <ul>
        <li>React</li>
        <li>Redux</li>
        <li>React-Data-Grid</li>
        <li>JavaScript  Promise</li>       
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