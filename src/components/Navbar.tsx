import logo from "../assets/logo.svg"

interface NavbarProps{
    className? : string
}

const Navbar = (props: NavbarProps) => {
    return(
        <div className={`${props.className} gap-2 px-10 py-6`}>
            <img width= "100px" src={logo} alt="" />
            <p className=" text-2xl">Almacenes Manolo</p>
        </div>
    )
}

export default Navbar