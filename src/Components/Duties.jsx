import { MdOutlineDoubleArrow } from "react-icons/md";

const Duties = ({ aboutDuties }) => {
    // console.log(aboutDuties);
    return <ul className="services">
        {aboutDuties.map((duty) => {
            return <li> <MdOutlineDoubleArrow/> {duty}</li>
        })}
    </ul>
}
export default Duties