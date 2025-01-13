import { DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall, DiMongodb, DiMysql } from "react-icons/di";
import { SiReact, SiTypescript } from "react-icons/si";
import StarsCanvas from "./Stars";

const skillsIcons = [
    {
        icon: <DiHtml5 size={100} color="#E34F26"/>,
        label: 'HTML5',
    },
    {
        icon: <DiCss3 size={100}  color="#1572B6"/>,
        label: 'CSS3',
    },
    {
        icon: <DiJavascript1 size={100} color="#F7DF1E"/>,
        label: 'JavaScript',
    },
    {
        icon: <SiTypescript size={100} color="#3178C6"/>,
        label: 'TypeScript',
    },
    {
        icon: <SiReact  size={100} color="61DAFB"/>,
        label: 'React',
    },
    {
        icon: <DiNodejsSmall size={100} color="#339933"/>,
        label: 'Node.js'
    },
    {
        icon: <DiMongodb size={100} color="#47A248"/>,
        label: 'MongoDB'
    },
    {
        icon: <DiMysql size={100} color="#336791"/>,
        label: 'Mysql'
    },
];

const Skills = () => {
    return (
        <div className="relative py-32" >
            <div className="text-white max-w-[950] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-20">What i do</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {skillsIcons.map((skill, index) => (
                        <div 
                            key={index}
                            className="h-[160px] w-[160px] md:h-[200px] md:w-[200px] flex flex-col justify-around items-center bg-white/10 p-4 rounded-xl"
                            >
                                {skill.icon}
                                <p className="mt-2">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <StarsCanvas />
        </div>
    );
}

export default Skills;