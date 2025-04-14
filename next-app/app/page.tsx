export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__photo"
          src="/photo.jpg"
          alt="Fedor Lukhmanov"
          loading="lazy"
        />
        <h1 className="header__title">Fedor Lukhmanov</h1>
        <h2 className="header__subtitle">Frontend Developer</h2>
        <nav className="header__links" aria-label="External links navigation">
          <ul className="header__link-list">
            <li className="header__link-item">
              
              <a
                className="link" 
                href="https://github.com/1bbsk1"
                rel="noopener noreferrer"
                target="_blank"
              >
                github
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="link"
                href="https://t.me/fedya_dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                telegram
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="link"
                href="mailto:1ebobski@pm.me"
                rel="noopener noreferrer"
                target="_blank"
              >
                email
              </a>
            </li>
            <li className="header__link-item">
              <a
                className="link"
                href="https://instagram.com/1bbsk1"
                rel="noopener noreferrer"
                target="_blank"
              >
                instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="portfolio">
          <h3 className="section-title">Portfolio</h3>
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <p className="portfolio__text">
                "News Analyzer" - responsive layout
              </p>
              <div className="portfolio__links">
                <a
                  className="portfolio__link link"
                  href="https://1bbsk1.github.io/news-analyzer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
                <a
                  className="portfolio__link link"
                  href="https://github.com/1bbsk1/news-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </li>
            <li className="portfolio__item">
              <p className="portfolio__text">
                "React Burger" - React + Redux
              </p>
              <div className="portfolio__links">
                <a
                  className="portfolio__link link"
                  href="https://1bbsk1.github.io/react-burger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
                <a
                  className="portfolio__link link"
                  href="https://github.com/1bbsk1/react-burger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </li>
          </ul>
        </section>
        <section className="stack">
          <h3 className="section-title">Stack</h3>
          <ul className="stack__list">
            <li className="stack__item">html</li>
            <li className="stack__item">css</li>
            <li className="stack__item">js</li>
            <li className="stack__item">ts</li>
            <li className="stack__item">react</li>
            <li className="stack__item">redux</li>
            <li className="stack__item">rtk</li>
            <li className="stack__item">git</li>
            <li className="stack__item">npm</li>
            <li className="stack__item">webpack</li>
          </ul>
        </section>
        <section className="education">
          <h3 className="section-title">Education</h3>
          <ul className="education__list">
            <li className="education__item">
              <span className="education__school">Moscow State University</span>
              <span className="education__date">2009-2015</span>
              <span className="education__course">Physics</span>
            </li>
            <li className="education__item">
              <span className="education__school">ESADE Business School</span>
              <span className="education__date">2015-2016</span>
              <span className="education__course">
                Masters in International Management
              </span>
            </li>
            <li className="education__item">
              <span className="education__school">Yandex.Practicum</span>
              <span className="education__date">2020</span>
              <span className="education__course">
                Junior Frontend Developer
              </span>
            </li>
            <li className="education__item">
              <span className="education__school">Yandex.Practicum</span>
              <span className="education__date">2022</span>
              <span className="education__course">React Developer</span>
            </li>
          </ul>
        </section>
        <section className="work">
          <h3 className="section-title">Work experience</h3>
          <ul className="work__list">
            <li className="work__place">
              <span className="work__company">Offside Gaming</span>
              <span className="work__date">May 2017 - Sep 2019</span>
              <span className="work__position">Analyst</span>
              <ul className="work__details">
                <li className="work__details-item">
                  Developed interactive web applications using a modern technology stack.
                </li>
                <li className="work__details-item">
                  Worked with Agile/Scrum, planned tasks for a team of 5 frontend developers.
                </li>
                <li className="work__details-item">
                  Implemented new UI features and optimized performance.
                </li>
              </ul>
            </li>
            <li className="work__place">
              <span className="work__company">Open-broker</span>
              <span className="work__date">September 2019 - October 2022</span>
              <span className="work__position">UX-analyst</span>
              <ul className="work__details">
                <li className="work__details-item">
                  Launched and analyzed A/B tests, improving user experience.
                </li>
                <li className="work__details-item">
                  Developed and implemented an automated tariff selection tool.
                </li>
                <li className="work__details-item">
                  Created an interface for UX reports.
                </li>
              </ul>
            </li>
            <li className="work__place">
              <span className="work__company">ADN Agency</span>
              <span className="work__date">February 2024 - July 2024</span>
              <span className="work__position">Project Manager</span>
              <ul className="work__details">
                <li className="work__details-item">
                  Coordinated tasks for developing new functionality and bug fixes on e-commerce websites.
                </li>
                <li className="work__details-item">
                  Improved UX, implemented UI changes based on user testing.
                </li>
                <li className="work__details-item">
                  Worked with Figma, collaborated with developers and designers.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="about">
          <h3 className="about__title section-title">About</h3>
          <p className="about__text">
            I have great communication skills and am a fast learner. Eager for interface usability and simplicity. Love bodily activities like brazilian jiu-jitsu and yoga.
          </p>
        </section>
      </main>
      <footer className="footer">Fedor Lukhmanov 2025</footer>
    </div>
  );
}
