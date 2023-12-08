import logo from "../assets/full_logo.svg"

interface NavbarProps{
    className? : string
}

const Navbar = (props: NavbarProps) => {
    return(
        <div className={`${props.className} gap-4 px-10 pt-6`}>
            <img width= "400px" src={logo} alt="" />
        </div>
    )
}

export default Navbar