import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="container section-container">
        <div className="section-header">
          <h1 className="section-header-text">My Work Experience</h1>
        </div>
        <b>
          <p>
            With around six years of experience I have learned and have been
            able to contribute which has helped me grow my knowledge and
            skillset in the field of Software Development. These experiences
            have been instrumental in shaping my career and fueling my passion
            for technology
          </p>
        </b>

        <div className="resume-container">
          <div className="resume-wrapper">
            <div className="resume-card">
              <div className="work-exp affekta">
                <div className="work-exp-header">
                  <div className="work-exp-icon">
                    <img
                      src="./affekta.jpeg"
                      alt="affekta-icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="work-exp-title">
                    <div>
                      <h2>Affekta</h2>
                    </div>
                    <div className="work-role-period">
                      <div>
                        <p>Senior Software Engineer </p>
                      </div>
                      <div>
                        <p>Apr 23 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-exp-body">
                  <ul className="custom-bullet">
                    <li>
                      Collaborated closely with backend teams to integrate
                      frontend components with RESTful APIs, enabling seamless
                      data exchange and real-time updates for the adaptive
                      learning features.
                    </li>
                    <li>
                      Implemented performance optimization techniques, including
                      lazy loading, code splitting, and client-side caching, to
                      ensure fast and smooth user interactions within the
                      application.
                    </li>
                    <li>
                      Deployed machine learning models on Azure ML Studio,
                      leveraging cloud-based tools for scalable and efficient
                      model deployment, and integrating these models into the
                      platform to provide real-time insights and
                      recommendations.
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="work-exp virtusa">
                <div className="work-exp-header">
                  <div className="work-exp-icon">
                    <img
                      src="./paycom_logo.jpg"
                      alt="virtusa icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="work-exp-title">
                    <b>
                      <h2>Paycom</h2>
                    </b>
                    <div className="work-role-period">
                      <p>Software Engineer </p>
                      <p>Sept 22 - Mar 23</p>
                    </div>
                  </div>
                </div>
                <div className="work-exp-body">
                  <ul className="custom-bullet">
                    <li>
                      Utilized Redux with Thunks and RTK (Redux Toolkit) to
                      manage complex state across the payroll dashboard
                      application, enabling efficient state management,
                      asynchronous data fetching, and reducing boilerplate code
                      for enhanced developer productivity.{" "}
                    </li>
                    <li>
                      Developed and integrated client-side form validation for
                      payroll input forms using React, ensuring data integrity
                      and improving user experience.
                    </li>
                    <li>
                      Worked as part of an Agile team, participating in daily
                      stand-ups, sprint planning, and retrospectives to deliver
                      frontend features for the payroll dashboard on time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
