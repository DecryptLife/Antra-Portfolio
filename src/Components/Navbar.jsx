function Navbar() {
  return (
    <header className="navbar">
      <div className="container header-container">
        <div className="child1">
          <a href="#about" className="header_name">
            Benson Thomas
          </a>
          <nav className="nav_sections">
            <a href="#projects" className="nav_links">
              <b>Projects</b>
            </a>
            <a href="#experience" className="nav_links">
              <b>Experience</b>
            </a>
            <a href="#skills" className="nav_links">
              <b>Skills</b>
            </a>
            <a href="#contact" className="nav_links">
              <b>Contact</b>
            </a>
          </nav>
        </div>
        <a href="#resume" className="resume_btn" onClick={() => showResume()}>
          Resume
        </a>
      </div>
    </header>
  );
}

function showResume() {
  window.open("./Resume.pdf", "_blank");
}

export default Navbar;
