


import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {  Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Favorites from './components/pages/Favorites';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';




export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            
                
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/favorites' component={Favorites} />
                    <Route path='/contact-us' component={ContactUs} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/marketing' component={Marketing} />
                    <Route path='/consulting' component={Consulting} />
                </Switch>
            
        </>
    )
}