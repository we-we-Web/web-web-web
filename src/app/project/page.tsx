import styles from './page.module.css';
import { ProjectSubtitle } from './subtitle/ProjectSubtitle';

import Tag from './skillTag/SkillTag';
import { frontendTagColors } from './data/tagColorsData';
import { backendTagColors } from './data/tagColorsData';

import { frontendSkills } from './data/skillsData';
import { backendSkills } from './data/skillsData';

import AssignMember from './assignMember/AssignMember';
import { teamMembers } from './data/teamMembetData';
import { GitGraph } from './gitGraph/GitGraph';


export default function Project() {

    return (
        <div className={styles['view']}>
            <div className={styles['title']}>
                <header>我直屬於你</header>
                <h1>海大資工新生直屬抽籤全端系統</h1>
                <div className={styles['title-skills']}>
                    { frontendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={frontendTagColors[index]} />
                    )) }
                    { backendSkills.map((skill, index) => (
                        <Tag key={index} skill={skill} color={backendTagColors[index]} />
                    )) }
                </div>
            </div>
            <ProjectSubtitle content='技術棧 Tech Stack' />
            <div className={styles['tech-stack']}>
                <div className={styles['tech-stack-part']}>
                    <h3>前端 Frontend</h3>
                    <ul>
                        { frontendSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        )) }
                    </ul>
                </div>
                <div className={styles['tech-stack-part']}>
                    <h3>後端 Backend</h3>
                    <ul>
                        { backendSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        )) }
                    </ul>
                </div>
                <ProjectSubtitle content='分工內容 Assignments' />
                <div className={styles['assign-member-set']}>
                    { teamMembers.map((member, index) => (
                        <AssignMember
                            key={index}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            tasks={member.tasks}
                            theme={member.theme}
                        />
                    )) }
                </div>
            </div>
            <ProjectSubtitle content='開發流程 Development Process' />
            <GitGraph />
        </div>
    );
}