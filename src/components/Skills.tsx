import { Icon } from "@mui/material";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { SiReact, SiTypescript } from "react-icons/si";

const skillsIcons = [
    {
        icon: <DiHtml5 size={140}/>,
        label: 'HTML5',
    },
    {
        icon: <DiCss3 size={140}/>,
        label: 'CSS3',
    },
    {
        icon: <DiJavascript1 size={140}/>,
        label: 'JavaScript',
    },
    {
        icon: <SiTypescript size={140}/>,
        label: 'TypeScript',
    },
    {
        icon: <SiReact  size={140}/>,
        label: 'React',
    },
    {
        icon: <DiNodejsSmall size={140}/>,
        label: 'Node.js',
    },
    {
        icon: <DiMongodb size={140}/>,
        label: 'MongoDB',
    }
];

const Skills = () => {
    return (
        <div className="bg-[linear-gradient(to_top,#000,#000A00_80%)] py-32" >
            <div className="text-white max-w-[950] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-4">What i do</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skillsIcons.map((skill, index) => (
                        <div 
                            key={index}
                            className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
                            >
                                {skill.icon}
                                <p className="mt-2">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;