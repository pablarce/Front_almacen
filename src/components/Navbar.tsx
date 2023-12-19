import logo from "../assets/full_logo.svg"
import SwitchButton from "./SwitchButton"
import { Wallet } from "lucide-react"

interface NavbarProps {
    dataFont: string
    setDataFont: React.Dispatch<React.SetStateAction<string>>
    className?: string
    client: {
        username: string
        wallet: number
        type: string
    } | undefined
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className={`${props.className} gap-4 px-10 pt-6`}>
                        
            <img width="400px" src={logo} alt="" />
            <div className="w-full absolute flex items-center justify-center -z-1">
                <div className="flex items-center justify-center w-64 self-center align-middle bg-gray-700 h-14 rounded-xl border border-gray-50 text-gray-50 gap-4">
                    <Wallet/>
                    <p className="text-xl">{props.client?.wallet} €</p>
                </div>
            </div>

            <div className="ml-auto"></div>
            <div className="flex items-center justify-center h-14 w-28 rounded-xl border text-lg cursor-pointer hover:bg-gray-700">
                <p className="text-white">{props.client?.username}</p>
            </div>
            <SwitchButton dataFont={props.dataFont} setDataFont={props.setDataFont} />
        </div>
    )
}

export default Navbar
