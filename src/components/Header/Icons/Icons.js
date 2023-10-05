import IconEmail from "./IconEmail.svg";
import IconGithub from "./IconGithub.svg";
import IconLinkedin from "./IconLinkedin.svg";
import Icon from "./Icon";

const Icons = () => {
  return <>
    <Icon iconImage={IconGithub} alt="" address="https://www.github.com/Nayab-Tahir" />
    <Icon iconImage={IconLinkedin} alt="" address="https://www.linkedin.com/in/nayab-tahir" />
    <Icon iconImage={IconEmail} alt="" address="mailto:nayabtahir321@gmail.com" />
  </>
}

export default Icons;