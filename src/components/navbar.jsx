import logo from "../assets/LogoMark.svg";

const Navbar = () => {

    return (
        <div className="px-8 w-full bg-black h-28 flex justify-between items-center">
            <div className="hover:cursor-pointer">
                <img src={logo} alt="" />
            </div>
            <div className="text-white">
                <p>Site under active development</p>
            </div>
        </div>
    )
}

export default Navbar