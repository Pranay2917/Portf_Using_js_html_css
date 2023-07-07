import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './App.css';

const App = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: ['Web Developer.', 'Android Developer.', 'Graphics Designer.', 'Web Designer.', 'Video Editor.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="left">Pranay's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            Hi, My name is <span className="purple">Pranay</span> and I am a passionate{' '}
            <span ref={elementRef}></span>
          </div>
          <div className="rightSection">
            <img src="bg.png" alt="" />
          </div>
        </section>
        <hr />
        <div className="secondSelection">
          <span className="text-grey">What I have done so Far</span>
          <h1>Work Experience</h1>
          <div className="box">
            {/* Work Experience Items */}
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-first"></div>
          <h3>Pranay's Developer Portfolio</h3>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact Me</li>
            </ul>
          </div>
          <div className="footer-third"></div>
          <div className="footer-fourth"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
