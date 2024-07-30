function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-container">
            <div className="about-container-top">
              <h1 className=" about-text-header">
                {"<"} Hi, I'm Benson {">"}
              </h1>
              <div className="image-container">
                <img
                  className="image-container-img"
                  alt="profile picture"
                  src="./headshot.jpg"
                />
              </div>
            </div>
            <div className="about-container-bottom"></div>

            <b>
              <p className="about-text-detail">
                I am a passionate web developer with over 6 years of experience
                in creating responsive web applications using modern frontend
                frameworks like React. My expertise lies in the MERN (MongoDB,
                Express, React, Node.js). I am well-versed with React concepts
                including hooks, context API, and lifeycle methods, and I am
                proficient in managing complex state management using Redux and
                Redux-Toolkit. <br />
                <br />
                I am familiar with Git for version control, Playwright, Jest and
                React Testing library for testing, and TypeORM and Mongoose, ORM
                tools, for database management. My experience with TypeScript
                ensures type-safe, scalable, and maintainable codebase. Solid
                knowledge of ES6 features enhances my ability to build dynamic
                and efficient web applications. <br />
                <br />
                My cloud platform expertise includes deploying scalable
                application on AWS EC2, integrating cloud storage solutions, and
                implementing CI/CD services like AWS CodePipeline. I also use
                Docker for consistent application environments across
                development, testing and production. When I am not coding or
                learning something new you can find me at the gym!!
              </p>
            </b>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
