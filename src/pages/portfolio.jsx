import "../styles/Portfolio.css";
import hero from "../Images/hero3.png";
import SkillSet from "../components/skillSet";
import Certificates from "../components/certificates";
import Projects from "../components/projects";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <section className="heroSection">
        <div className="heroStuff">
          <div className="heroBox justify-content-center justify-content-md-between">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="heroInfo">
                <p className="greeting">Hello, World!</p>
                <div className="myName">
                  <p className="hovLtr">I</p>
                  <p className="hovLtr">'</p>
                  <p className="hovLtr">m </p>
                  <p className="hovLtr"> Z</p>
                  <p className="hovLtr">A</p>
                  <p className="hovLtr">K</p>
                  <p className="hovLtr">H</p>
                  <p className="hovLtr">E</p>
                </div>
                <p className="role">
                  Frontend Web Developer <span style={{}}></span>
                </p>
              </div>
            </div>
            <div className="rightHero">
              <div className="heroContainer">
                <div className="heroImgBox">
                  <img src={hero} alt="My photo" className="hero" />
                </div>
              </div>
              <div className="call">+27 60 436 1116</div>
              <div className="mail">ZakheNet@gmail.com</div>
            </div>
          </div>

          <div className="about">
            <p className="bio">
              Im a passionate self-taught web developer who enjoys solving
              problems, building fast and responsive web Apps
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <h1 className="sectionTittle">Skills</h1>
        <div className="mySkills">
          <SkillSet />
        </div>
        
        <div
          className="modal fade"
          id="modalId"
          tabindex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="modalTitleId">
                  SKILL MEASURE RUBRIC:
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
               <p>How my stack skill percentage is measured:</p>
               <ul>
                  <li><strong>0%-29% : </strong>Still learning</li>
                  <li><strong>30%-49% : </strong>Limited to basic knowledge</li>
                  <li><strong>50%-69% : </strong>Good enough</li>
                  <li><strong>70%-%89 : </strong>Very fluent and knowledged</li>
                  <li><strong>90%-100% : </strong>Advanced level</li>
               </ul>
               <div className="infoPanel gap-2 px-2 py-1 rounded d-flex">
                  <p ><strong>NB: </strong></p>
                  <p className="m-0">these stats / percentages are based on an intermediate skill level meaning a 80% should equate to an advanced intermediate level but not senior experienced level.</p>
               </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary px-5 fw-bold"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <script>
          const myModal = new bootstrap.Modal(
          document.getElementById("modalId"), options, );
        </script>

        <p className="howSkill" type="button"
          data-bs-toggle="modal"
          data-bs-target="#modalId">How skill percent is measured?</p>
      </section>
      <section id="projects" className="projects">
        <h1 className="sectionTittle">Projects</h1>
        <div className="projectsBox">
          <Projects />
        </div>
      </section>
      <section className="certificates">
        <h1 className="sectionTittle">Certificates</h1>
        <div className="certified">
          <Certificates />
        </div>
      </section>
    </div>
  );
}
