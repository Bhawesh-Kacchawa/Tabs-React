import { MdOutlineDoubleArrow } from "react-icons/md";

const DutiesDefault = ({ data }) => {
    console.log(data);
    return <ul className="services">
        {data[0].duties.map((item) => {
            return <li><MdOutlineDoubleArrow/> {item}</li>;
        })}
    </ul>

}

export default DutiesDefault