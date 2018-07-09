import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CamperDashboard from '../components/CamperDashboard';
import EnrollCamper from '../components/EnrollCamper';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import About from '../components/About';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />            
            <Switch>
                <Route path="/" component={About} exact={true} />
                <Route path='/campers' component={CamperDashboard} />
                <Route path='/enroll' component={EnrollCamper} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;