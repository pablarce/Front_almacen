import logo from "../assets/full_logo.svg"
import SwitchButton from "./SwitchButton"

interface NavbarProps {
    dataFont: string
    setDataFont: React.Dispatch<React.SetStateAction<string>>
    className?: string
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className={`${props.className} gap-4 px-10 pt-6`}>
            <img width="400px" src={logo} alt="" />
            <SwitchButton dataFont={props.dataFont} setDataFont={props.setDataFont} classname="ml-auto" />
        </div>
    )
}

export default Navbar
