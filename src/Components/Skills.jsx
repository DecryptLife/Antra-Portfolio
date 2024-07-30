import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills">
      <div className="container section-container">
        <div className="section-header">
          <ChipIcon className="section-icon" />
          <h1 className="section-header-text">Languages &amp; Tools</h1>
        </div>
        <div className="skills-container">
          <img src="./java.svg" alt="Java" title="Java"></img>
          <img src="./js.svg" alt="JavaScript" title="JavaScript"></img>
          <img src="./git.svg" alt="git" title="git"></img>
          <img src="./github.svg" alt="github" title="github"></img>
          <img src="./python.svg" alt="python" title="python"></img>
          <img src="./mongodb.svg" alt="mongodb" title="mongodb"></img>
          <img src="./nodejs.svg" alt="nodejs" title="nodejs"></img>
          <img src="./react.svg" alt="react" title="react"></img>
          <img src="./typescript.svg" alt="typescript" title="typescript"></img>
          <img src="./nextjs.svg" alt="nextjs" title="nextjs"></img>
          <img src="./bootstrap.svg" alt="bootstrap" title="bootstrap"></img>
          <img src="./cs.svg" alt="css" title="css"></img>
          <img src="./express.svg" alt="express" title="express"></img>
          <img src="./html.svg" alt="html" title="html"></img>
          <img src="./heroku.svg" alt="heroku" title="heroku"></img>
          <img src="./linux.svg" alt="linux" title="linux"></img>
          <img src="./mysql.svg" alt="mysql" title="mysql"></img>
          <img src="./nginx.svg" alt="nginx" title="nginx"></img>
          <img src="./npm.svg" alt="npm" title="npm"></img>
          <img src="./pytorch.svg" alt="pytorch" title="pytorch"></img>
          <img src="./ubuntu.svg" alt="ubuntu" title="ubuntu"></img>
          <img src="./vscode.svg" alt="vscode" title="vscode"></img>
          <img src="./apache.svg" alt="apache" title="apache"></img>
          <img src="./tensorflow.svg" alt="tensorflow" title="tensorflow"></img>
          <img src="./tailwind.svg" alt="tailwind" title="tailwind"></img>
          <img src="./springboot.svg" alt="springboot" title="springboot"></img>
          <img src="./redux.svg" alt="redux" title="redux"></img>
          <img src="./redis.svg" alt="redis" title="redis"></img>
        </div>
      </div>
    </section>
  );
}

export default Skills;
