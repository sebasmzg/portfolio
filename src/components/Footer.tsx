import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Jorge Sebastián Muñoz García</h1>
            <div className="flex space-x-6 mt-4">
                <a className="hover:text-gray-300" href="https://github.com/sebasmzg" ><FaGithub size={50}/></a>
                <a className="hover:text-gray-300" href="https://www.linkedin.com/in/jorge-sebasti%C3%A1n-mu%C3%B1oz-garc%C3%ADa-5920372ba/"><FaLinkedin size={50}/></a>
            </div>
        </div>
    );
}

export default Footer;