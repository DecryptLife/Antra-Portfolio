import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { projects } from "../data";

function Projects() {
  const [projectID, setProjectID] = useState(0);
  const project = projects[projectID];
  const [isBtnDisabled, setIsBtnDisabled] = useState({
    prev: true,
    next: false,
  });

  const handleProjectDisplay = (e) => {
    if (e.target.value === "<") {
      setProjectID((prev) => (projectID === 0 ? 0 : prev - 1));
    } else if (e.target.value === ">") {
      setProjectID((prev) =>
        projectID === projects.length - 1 ? projects.length - 1 : prev + 1
      );
    }
  };

  useEffect(() => {
    if (projectID === 0) {
      setIsBtnDisabled((prev) => ({ ...prev, prev: true }));
    } else if (projectID === projects.length - 1) {
      setIsBtnDisabled((prev) => ({ ...prev, next: true }));
    } else {
      setIsBtnDisabled(() => ({ prev: false, next: false }));
    }
  }, [projectID]);

  return (
    <section id="projects">
      <div className="container section-container">
        <div className="section-header">
          <CodeIcon className="section-icon" />
          <h1 className="section-header-text">My Projects</h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="projects-container">
          <div>
            <button
              className="projects-btn__prev"
              value={"<"}
              onClick={handleProjectDisplay}
              disabled={isBtnDisabled.prev}
              style={{
                backgroundColor: isBtnDisabled.prev
                  ? "rgb(31, 41, 55)"
                  : "#34d399",
              }}
            >
              {"<"}
            </button>
          </div>
          <a href={project.link} key={project.image} className="project-group">
            <div className="project-individual">
              <img
                alt="gallery"
                className="project-image"
                src={project.image}
              />
              <div className="project-image-flip">
                <h2 className="project-subtitle">{project.subtitle}</h2>
                <h1 className="project-title">{project.title}</h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
          <div>
            <button
              className="projects-btn__next"
              value={">"}
              onClick={handleProjectDisplay}
              disabled={isBtnDisabled.next}
              style={{
                backgroundColor: isBtnDisabled.next
                  ? "rgb(31, 41, 55)"
                  : "#34d399",
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
