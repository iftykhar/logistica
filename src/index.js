import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import Statssection from './components/Statssection';
import AboutSection from './components/AboutSection';
import FactSection from './components/FactSection';
import PricingPlans from './components/PricingPlans';
import Feature from './components/Feature';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    {/* <Statssection /> */}
    <AboutSection />
    <FactSection />
    {/* <App /> */}
    <Feature />
    <PricingPlans />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
