import React, {Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import AlertNotification from './components/AlertNotification';
import './styles/App.css';

const Certifications = React.lazy(() => import('./components/Certifications'));
const Courses = React.lazy(() => import('./components/Courses'));
const Skills = React.lazy(() => import('./components/Skills'));

function App() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="grid-container">
      <section className="header"><Header /></section>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="experience"><Experience /></section>
        <section className="certifications"><Certifications /></section>
        <section className="courses"><Courses /></section>
        <section className="skills"><Skills /></section>
      </Suspense>
    </div>
  );
}

export default App;
