import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Adarsh Explore my work and projects below.</p>
      </header>
      <main className="home-content">
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1 - Description of project 1</li>
            <li>Project 2 - Description of project 2</li>
            <li>Project 3 - Description of project 3</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at{" "}
            <a href="mailto:Adarshexample.com">Adarshexample.com</a>.
          </p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Adarsh All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
