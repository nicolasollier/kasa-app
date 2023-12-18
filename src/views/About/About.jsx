import Banner from "../../components/banner/Banner.jsx";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import principles from "../../utils/principles.json";
import { generateUuid } from "../../utils/generateUuid";

const About = () => {
  return (
    <div>
      <Banner img={"background-mountain.png"} />
      {principles.map((principle) => (
        <Dropdown key={'dropdown_' + generateUuid()} title={principle.name} content={principle.content} />
      ))}
    </div>
  );
};

export default About;
