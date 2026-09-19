import ProfilePhoto from "./ProfilePhoto";

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="wrap">
          <a className="logo" href="#top">
            &lt;NS/&gt;
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-right">
            <a className="btn-gradient" href="#contact">Let&apos;s Talk</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="wrap">
            <div>
              <span className="badge-pill">
                <span className="dot"></span>
                Available for opportunities
              </span>
              <h1 className="hero-name">
                Hi, I&apos;m <span className="gradient-text">Nimra Shoukat</span>
              </h1>
              <p className="hero-role">Software Engineering Student &amp; Full-Stack Developer</p>
              <p className="hero-intro">
                I build across the stack — Laravel on the web, Flutter on
                mobile, and Assembly at the level where the hardware actually
                listens. Most of what&apos;s here started as coursework and
                grew into something I kept working on past the deadline.
              </p>
              <div className="hero-actions">
                <a className="btn-gradient" href="#projects">View My Work →</a>
                <a className="btn-outline" href="#contact">Get In Touch</a>
              </div>
              <div className="social-row">
                <a className="social-icon" href="https://github.com/nimrashokat" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
                <a className="social-icon" href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25ZM8.5 8.25h3.84v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.25Z" />
                  </svg>
                </a>
                <a className="social-icon" href="mailto:nimrashokat084@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 6 10 7 10-7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="photo-frame">
              <div className="photo-ring outer"></div>
              <div className="photo-ring"></div>
              <div className="photo-circle">
                {/* Replace /profile.jpg in the public folder with your own photo */}
                <ProfilePhoto />
              </div>
              <div className="orbit">
                <span className="orbit-dot"></span>
              </div>
              <span className="float-badge b1">Laravel</span>
              <span className="float-badge b2">Flutter &amp; Firebase</span>
              <span className="float-badge b3">MySQL</span>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Get to know me</span>
              <h2>About Me</h2>
            </div>
            <div className="about-text">
              <p>
                I&apos;m a software engineering student who likes finishing
                what a course only sketches out. A lab assignment on CRUD
                forms tends to end up as a full platform with an admin
                dashboard; a mobile app brief turns into something with real
                authentication and a database behind it.
              </p>
              <p>
                My coursework spans requirements engineering and software
                architecture on the theory side, and Laravel, Flutter, and
                x86 Assembly on the build side — so I&apos;m used to moving
                between planning a system properly and writing the code that
                makes it run.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What I work with</span>
              <h2>Skills</h2>
              <p>Tools and technologies I reach for depending on the problem.</p>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Web</h3>
                <ul>
                  <li>Laravel</li>
                  <li>PHP &amp; MySQL</li>
                  <li>Blade &amp; Bootstrap 5</li>
                  <li>Chart.js dashboards</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>Mobile</h3>
                <ul>
                  <li>Flutter &amp; Dart</li>
                  <li>Firebase Auth &amp; Firestore</li>
                  <li>Firebase Storage &amp; Messaging</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>Systems &amp; Tools</h3>
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
              <span className="eyebrow">Selected work</span>
              <h2>Projects</h2>
              <p>A few things I&apos;ve built end to end.</p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <p className="project-name">SheStitch</p>
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

              <div className="project-card">
                <p className="project-name">To-Do List App</p>
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

              <div className="project-card">
                <p className="project-name">Firebase Mobile Apps</p>
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

              <div className="project-card">
                <p className="project-name">Assembly Games</p>
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

        <section id="experience">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How I&apos;ve been building</span>
              <h2>Project Experience</h2>
              <p>Hands-on work from coursework that grew past the assignment.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <p className="timeline-period">CSC336 — Web Technologies</p>
                <p className="timeline-title">Full-Stack Developer, SheStitch</p>
                <p className="timeline-org">Lab final project · Laravel, MySQL, Bootstrap 5</p>
                <p className="timeline-desc">
                  Built a complete tailoring e-commerce platform with
                  role-based authentication, an analytics dashboard, and full
                  product/order management, then documented and attempted
                  deployment across multiple hosting platforms.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-period">CSC-303 — Mobile Application Development</p>
                <p className="timeline-title">Mobile Developer, Firebase Apps</p>
                <p className="timeline-org">Flutter, Dart, Firebase</p>
                <p className="timeline-desc">
                  Built a shopping app and a cafe management app, integrating
                  Firebase Authentication, Firestore, Storage, and Messaging.
                </p>
              </div>
              <div className="timeline-item">
                <p className="timeline-period">COAL — Computer Organization &amp; Assembly</p>
                <p className="timeline-title">Systems Programmer, Assembly Projects</p>
                <p className="timeline-org">x86 Assembly, TASM, DOSBox</p>
                <p className="timeline-desc">
                  Wrote a Snake game and an 8086 car racing game directly in
                  x86 Assembly, along with string and array manipulation
                  labs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="wrap">
            <div className="section-head center">
              <h2 className="gradient-text">Academic Background</h2>
            </div>
            <div className="edu-list">
              <div className="edu-card">
                <div className="edu-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                    <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
                  </svg>
                </div>
                <div>
                  <p className="edu-title">Software Engineering</p>
                  <p className="edu-org">COMSATS University Islamabad, Vehari Campus</p>
                  <p className="edu-period">Sep 2024 – June 2028</p>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
                <div>
                  <p className="edu-title">FSc Pre-Medical</p>
                  <p className="edu-org">KIPS College Vehari</p>
                  <p className="edu-period">2021 – 2023</p>
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