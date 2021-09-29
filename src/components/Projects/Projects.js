import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section className="project section " id="project">
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
              <h2>Projects</h2>
            </div>
          </div>

        
          <div className="row">
          <div className="project-item pad-15" data-category="mean">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/Invoice-img.png" alt="project" />
                </div>
                <div className="project-info">
                  <div className="project-links">
                    <a
                      href="https://github.com/nileshyadav1/React-Invoice"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                    <a
                      href="https://react-invoice-app-c9baa.web.app/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <h4 className="project-title">React Invoice App</h4>
                  <p className="project-description">
                  A complete CRUD Inovie App created with React powered by firebase v9
                  </p>
                  <p className="project-description">
                    <strong>Features</strong> :CRUD operations using Google Firestore , Persisted Redux State Management, Async Thunk Promises
                    
                  </p>
                  <p className="project-tag">
                    Tags :
                    <a
                      href="https://v3.vuejs.org/api/composition-api.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    React
                    </a>{" "}
                    <a
                      href="https://firebase.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Firebase
                    </a>{" "}
                    <a
                      href="https://redux.js.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Redux
                    </a>{" "}
                    
                  </p>
                </div>
              </div>
            </div>
          <div className="project-item pad-15" data-category="mean">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/disney-img.png" alt="project" />
                </div>
                <div className="project-info">
                  <div className="project-links">
                    <a
                      href="https://github.com/nileshyadav1/Disney-Plus-Vue-Clone"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                    <a
                      href="https://disneyplus-vue-clone.web.app/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  </div>
                  <h4 className="project-title">Disney Plus Vue Clone</h4>
                  <p className="project-description">
                  Disney plus clone created using Vue 3 (Composition API) powered by firebase.
                  </p>
                  <p className="project-description">
                    <strong>Features</strong> : Google Authentication , Responsive,
                    State Management with Vuex
                  </p>
                  <p className="project-tag">
                    Tags :
                    <a
                      href="https://v3.vuejs.org/api/composition-api.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Vue 3 (Composition API)
                    </a>{" "}
                    <a
                      href="https://firebase.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Firebase
                    </a>
                    <a
                      href="https://vuex.vuejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Vuex
                    </a>
                    <a
                      href="https://sass-lang.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Saas
                    </a>
                    
                  </p>
                </div>
              </div>
            </div>


            <div className="project-item pad-15" data-category="mean">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/task.png" alt="project" />
                </div>
                <div className="project-info">
                  <div className="project-links">
                    <a
                      href="https://github.com/nileshyadav1/Task-Manager-MEAN"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                  </div>
                  <h4 className="project-title">Task Manager</h4>
                  <p className="project-description">
                    A CRUD application created using the MEAN stack (Angular,
                    NodeJS with Express and MongoDB).
                  </p>
                  <p className="project-description">
                    <strong>Features</strong> : User Authentication using JWT ,
                    Form validation
                  </p>
                  <p className="project-tag">
                    Tags :{" "}
                    <a
                      href="https://angular.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Angular{" "}
                    </a>{" "}
                    <a
                      href="https://expressjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Express
                    </a>{" "}
                    <a
                      href="https://nodejs.org/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Node JS
                    </a>{" "}
                    <a
                      href="https://www.mongodb.com/3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MongoDB
                    </a>{" "}
                    <a
                      href="https://bulma.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bulma
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="project-item pad-15" data-category="html">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/blogger.png" alt="project" />
                </div>
                <div className="project-info">
                <div className="project-links">
                <a
                      href="https://github.com/nileshyadav1/nileshyadav1.github.io/tree/master/Blogger"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                    <a
                      href="https://objective-nobel-08472b.netlify.app"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                   
                  </div>
                  <h4 className="project-title">Blogger</h4>
                  <p className="project-description">
                    A completely <strong>Responsive</strong> template website
                    suitable for projectgers{" "}
                  </p>
                  <p className="project-description">
                    <strong>Features</strong> : Responsive , Well Documented ,
                    Owl Caraousel{" "}
                  </p>
                  <p className="project-tag" style={{ paddingTop: "22px" }}>
                    Tags :{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/HTML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HTML{" "}
                    </a>{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSS
                    </a>{" "}
                    <a
                      href="https://jquery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jquery
                    </a>{" "}
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="project-item pad-15" data-category="html">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/gym.png" alt="project" />
                </div>
                <div className="project-info">
                <div className="project-links">
                <a
                      href="https://github.com/nileshyadav1/gym-website"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                    <a
                      href="https://gym-website-bb246.web.app/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  
                  </div>
                  <h4 className="project-title">Gym Website</h4>
                  <p className="project-description">
                    A completely <strong>Responsive</strong> template website
                    suitable for Gyms and other fitness organisations
                  </p>
                  <p className="project-description">
                    <strong>Features</strong> : Responsive , Well Documented ,
                    Wow.js plugin{" "}
                  </p>
                  <p className="project-tag">
                    Tags :{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/HTML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HTML{" "}
                    </a>{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSS
                    </a>{" "}
                    <a
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Javascript
                    </a>{" "}
                    <a
                      href="https://jquery.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jquery
                    </a>{" "}
                  </p>
                
                </div>
              </div>
            </div>

            <div className="project-item pad-15" data-category="canvas">
              <div className="project-item-inner shadow-dark">
                <div className="project-image">
                  <img src="./assets/project/wave.png" alt="project" />
                </div>
                <div className="project-info">
                <div className="project-links">
                    <a
                      href="https://github.com/nileshyadav1/wave-generator"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Code
                    </a>
                  </div>
                  <h4 className="project-title">Wave generator</h4>
                  <p className="project-description">
                    This project use canvas animation to generate waves by using
                    sine , cos and tan function . One can easily change Color ,
                    apmlitude and function values to produce different waves.
                  </p>

                  <p className="project-tag">
                    Tags :{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/HTML"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HTML{" "}
                    </a>{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSS
                    </a>{" "}
                    <a
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Javascript
                    </a>{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Canvas_element"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Canvas
                    </a>{" "}
                    <a
                      href="https://www.npmjs.com/package/dat.gui"
                      style={{ textTransform: "none" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dat.gui
                    </a>{" "}
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
