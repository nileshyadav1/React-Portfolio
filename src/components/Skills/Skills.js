import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    eval(`
        try {
          TagCanvas.Start('mycanvas','tags',{
                 textColour : '#a5a5a5',
                outlineThickness : 0.5,
                outlineColour : '##1abc9c',
                maxSpeed : 0.06,
                freezeActive:true,
                shuffleTags:true,
                shape:'sphere',
                zoom:0.9,
                noSelect:true,
                textFont:null,
                pinchZoom:true,
                freezeDecel:true,
                fadeIn:3000,
                initial: [0.3,-0.1],
                depth : 1.1
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
          
        
    
       }`);

    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <div>
      <section className="skills section " id="skills">
        <div className="container">
          <div className="row">
            <div className="section-title  pad-15">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="skill-item pad-15">
              <div className="skill-item-inner">
                <div className="text-zone pad-15">
                  
                  <div className="text-head">
                    <h2 className="text-heading">Skills & Technology</h2>
                  </div>
                 
                  <br />
                  <p>
                    The main area of my interest is front end development
                    (client side of the web).
                  </p>
                  <br />
                  <p>
                    HTML, CSS, JS , building small and medium web
                    apps with Vue & React, features, animations,
                    and coding interactive layouts.
                  </p>
                  <br />
                  <p>
                    I'm also familiar with Back-End development  with 
                    MongoDB, ExpressJS,  and Node. js
                  </p>
                 
                </div>
                
              </div>

              <div className="skill-item pad-15">
                <div className="skill-item-inner">
                  <div className="my-canvas" id="myCanvasContainer">
                    <canvas
                      className="myCanvas"
                      height="500"
                      width="500"
                      id="mycanvas"
                    ></canvas>
                  </div>
                  <div id="tags">
                    <ul>
                      <li>
                        <a
                          data-weight="27"
                          href="https://vuejs.org/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Vue
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="25"
                          href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                          rel="noreferrer"
                          target="_blank"
                        >
                          CSS
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="27"
                          href="https://reactjs.org/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          React
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="23"
                          href="https://en.wikipedia.org/wiki/Node.js"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Node JS
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="25"
                          href="https://en.wikipedia.org/wiki/JavaScript"
                          target="_blank"
                          rel="noreferrer"
                        >
                          JavaScript
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/HTML"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HTML 5
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="25"
                          href="https://en.wikipedia.org/wiki/JavaScript"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TypeScript
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="24"
                          href="https://bulma.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Bulma
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="16"
                          href="https://en.wikipedia.org/wiki/JSON"
                          target="_blank"
                          rel="noreferrer"
                        >
                          JSON
                        </a>
                      </li>

                      <li>
                        <a
                          data-weight="25"
                          href="https://en.wikipedia.org/wiki/AngularJS"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Angular 10
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="22"
                          href="https://en.wikipedia.org/wiki/WordPress"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Wordpress
                        </a>
                      </li>
                     
                      <li>
                        <a
                          data-weight="19"
                          href="https://en.wikipedia.org/wiki/Git"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Git
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="19"
                          href="https://vuetifyjs.com/en/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Vuetify
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="15"
                          href=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          _lodash
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="23"
                          href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                          target="_blank"
                          rel="noreferrer"
                        >
                        MD  Bootstrap
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="21"
                          href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                          target="_blank"
                          rel="noreferrer"
                        >
                          SASS
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="20"
                          href="https://en.wikipedia.org/wiki/Responsive_web_design"
                          target="_blank"
                          rel="noreferrer"
                        >
                          RxJs
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="19"
                          href="https://en.wikipedia.org/wiki/JQuery"
                          target="_blank"
                          rel="noreferrer"
                        >
                          jQuery
                        </a>
                      </li>
                     
                      <li>
                        <a
                          data-weight="19"
                          href="https://github.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </li>

                      <li>
                        <a
                          data-weight="19"
                          href="https://www.npmjs.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          npm
                        </a>
                      </li>
                      <li>
                        <a
                          data-weight="23"
                          href="https://firebase.google.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Firebase
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
