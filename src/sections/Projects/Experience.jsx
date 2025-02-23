import styles from './ExperienceStyles.module.css';
import woolworths from '../../assets/ww.jpg';
import hanes from '../../assets/hanes.jpg';
import mvp from '../../assets/mvp.jpg';
import infosys from '../../assets/infosys.png';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        <ExperienceCard
          src={hanes}
          h3="Planning Analyst"
          p="Jan 2024 - Present"
        />
         <ExperienceCard
          src={infosys}
          h3="Data Analyst"
          p="Dec 2021 - Jun 2023"
        />
        <ExperienceCard
          src={mvp}
          h3="FullStack Developer"
          p="Feb 2021 - Nov 2021"
        />
        <ExperienceCard
          src={woolworths}
          h3="Customer Service"
          p="Feb 2020 - Jan 2023"
        />
      </div>
    </section>
  );
}

export default Experience;
