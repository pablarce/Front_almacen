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
            <div className="ml-auto"></div>
            <div className="flex items-center justify-center h-14 w-28 rounded-xl border text-lg cursor-pointer hover:bg-gray-700">
                <p className="text-white">Login</p>
            </div>
            <SwitchButton dataFont={props.dataFont} setDataFont={props.setDataFont} />
        </div>
    )
}

export default Navbar
