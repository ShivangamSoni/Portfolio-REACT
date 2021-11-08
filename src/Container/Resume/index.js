import style from "./style.module.css";
import SectionHeading from "../../Components/SectionHeading";
import ProfileCard from "../../Components/Profile";

const Resume = () => {
  return (
    <div className={style.resume} id="resume">
      <SectionHeading>Resume</SectionHeading>

      <div className={style.container}>
        <div className={style.details}>
          <div className={style.section}>
            <h3>Education</h3>
            <div className={style.educations}>
              <div className={style.education}>
                <h4 className={style.institute}>APG Shimla University</h4>
                <h5 className={style.degree}>B.Tech. Computer Science Engineering</h5>
                <p className={style.desc}>
                  <strong>Attended:</strong> <em>2017-2021</em>
                  <br />
                  <strong>CGPA:</strong> <em>8.65</em>
                </p>
              </div>

              <div className={style.education}>
                <h4 className={style.institute}>St Thomas' School</h4>
                <h5 className={style.degree}>XII (Science)</h5>
                <p className={style.desc}>
                  <strong>Pass-Out:</strong> <em>2017</em>
                  <br />
                  <strong>Subjects:</strong> <em>IT, Mathematics, English, Physics, Chemistry</em>
                </p>
              </div>

              <div className={style.education}>
                <h4 className={style.institute}>St Thomas' School</h4>
                <h5 className={style.degree}>X</h5>
                <p className={style.desc}>
                  <strong>Pass-Out:</strong> <em>2015</em>
                  <br />
                  <strong>Subjects:</strong> <em>IT, Mathematics, English, Science, Hindi, P.Ed.</em>
                </p>
              </div>
            </div>
          </div>

          <div className={style.section}>
            <h3>Skills</h3>

            <div className={style.skill}>
              <h4>HTML</h4>
              <span className={style.bar}></span>
            </div>

            <div className={style.skill}>
              <h4>CSS</h4>
              <span className={style.bar}></span>
            </div>

            <div className={style.skill}>
              <h4>JavaScript</h4>
              <span className={style.bar}></span>
            </div>

            <div className={style.skill}>
              <h4>REACT</h4>
              <span className={style.bar}></span>
            </div>

            <div className={style.skill}>
              <h4>Git</h4>
              <span className={style.bar}></span>
            </div>
          </div>
        </div>

        <ProfileCard />
      </div>
    </div>
  );
};

export default Resume;
