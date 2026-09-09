import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="mark" href="#top">
            Nimra
          </a>
          <div className="header-actions">
            <nav>
              <ul className="site-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div>
              <span className="badge-pill">
                <span className="dot"></span>
                Available for internships
              </span>
              <h1 className="hero-name">Nimra Shoukat</h1>
              <p className="hero-role">BS Software Engineering — COMSATS University Islamabad, Vehari Campus</p>
              <p className="hero-intro">
                I build across the stack — Laravel on the web, Flutter on
                mobile, and Assembly at the level where the hardware actually
                listens. Most of what&apos;s here started as coursework and
                grew into something I kept working on past the deadline.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#projects">
                  See my projects
                </a>
                <a className="btn btn-line" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="build-path">
              <h2>How I got here</h2>
              <div className="build-step">
                <span className="num">i.</span>
                <div>
                  <strong>Assembly &amp; systems</strong>
                  <span>x86 / TASM — games and low-level logic</span>
                </div>
              </div>
              <div className="build-step">
                <span className="num">ii.</span>
                <div>
                  <strong>Web applications</strong>
                  <span>Laravel, MySQL, Bootstrap — full CRUD platforms</span>
                </div>
              </div>
              <div className="build-step">
                <span className="num">iii.</span>
                <div>
                  <strong>Mobile apps</strong>
                  <span>Flutter, Dart, Firebase — cross-platform builds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="about-grid">
              <div className="profile-card">
                <div className="avatar-ring" aria-hidden="true">NS</div>
                <p className="p-name">Nimra Shoukat</p>
                <p className="p-role">Software Engineer · Vehari, PK</p>
              </div>
              <div className="about-text">
                <p>
                  I&apos;m a software engineering student who likes finishing
                  what a course only sketches out. A lab assignment on CRUD
                  forms tends to end up as a full platform with an admin
                  dashboard; a mobile app brief turns into something with
                  real authentication and a database behind it.
                </p>
                <p>
                  My coursework spans requirements engineering and software
                  architecture on the theory side, and Laravel, Flutter, and
                  x86 Assembly on the build side — so I&apos;m used to moving
                  between planning a system properly and writing the code
                  that makes it run.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>Skills</h2>
              <p>What I reach for depending on the problem.</p>
            </div>
            <div className="skills-grid">
              <div className="skill-group">
                <h3>Web</h3>
                <ul>
                  <li>Laravel</li>
                  <li>PHP &amp; MySQL</li>
                  <li>Blade &amp; Bootstrap 5</li>
                  <li>Chart.js dashboards</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>Mobile</h3>
                <ul>
                  <li>Flutter &amp; Dart</li>
                  <li>Firebase Auth &amp; Firestore</li>
                  <li>Firebase Storage &amp; Messaging</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>Systems &amp; tools</h3>
                <ul>
                  <li>x86 Assembly (TASM)</li>
                  <li>Git &amp; GitHub</li>
                  <li>XAMPP</li>
                  <li>Agile &amp; requirements docs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2>Projects</h2>
              <p>A few things I&apos;ve built end to end.</p>
            </div>

            <div className="project">
              <p className="project-name">SheStitch</p>
              <div>
                <p className="project-desc">
                  A custom tailoring e-commerce platform for Pakistani women,
                  with role-based authentication, an admin dashboard with
                  analytics, product and order management, and a full Blade
                  frontend. Built as a lab final project.
                </p>
                <div className="tags">
                  <span>Laravel 10</span>
                  <span>Breeze Auth</span>
                  <span>MySQL</span>
                  <span>Bootstrap 5</span>
                </div>
              </div>
            </div>

            <div className="project">
              <p className="project-name">To-Do List App</p>
              <div>
                <p className="project-desc">
                  A Laravel task manager with full CRUD and a Chart.js
                  dashboard for tracking progress, documented end to end in
                  LaTeX.
                </p>
                <div className="tags">
                  <span>Laravel</span>
                  <span>Chart.js</span>
                  <span>CRUD</span>
                </div>
              </div>
            </div>

            <div className="project">
              <p className="project-name">Firebase Mobile Apps</p>
              <div>
                <p className="project-desc">
                  A shopping app and a cafe management app built in Flutter,
                  each wired to Firebase for authentication, a live database,
                  storage, and messaging.
                </p>
                <div className="tags">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>

            <div className="project">
              <p className="project-name">Assembly Games</p>
              <div>
                <p className="project-desc">
                  A Snake game and an 8086 car racing game, written directly
                  in x86 Assembly and run through TASM/DOSBox.
                </p>
                <div className="tags">
                  <span>x86 Assembly</span>
                  <span>TASM</span>
                  <span>DOSBox</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact-panel">
              <div>
                <h2>Let&apos;s work together</h2>
                <p>
                  Open to internships, collaborations, and anything that
                  needs someone comfortable across the whole stack.
                </p>
              </div>
                            <div className="contact-links">
                <a href="mailto:nimrashokat084@gmail.com">
                  nimrashokat084@gmail.com
                </a>
                <a href="https://github.com/nimrashokat" target="_blank" rel="noreferrer">
                  github.com/nimrashokat
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
                  linkedin.com/in/your-profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>Nimra Shoukat — BS Software Engineering, COMSATS University Islamabad, Vehari Campus.</p>
        </div>
      </footer>
    </>
  );
}