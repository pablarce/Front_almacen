interface SwitchButtonProps {
    dataFont: string
    setDataFont: React.Dispatch<React.SetStateAction<string>>
    classname?: string
}

const SwitchButton = (props: SwitchButtonProps) => {
    return (
        <div className={`${props.classname}`}>
            <div className="bg-gray-200 flex gap-6 items-center px-4 h-14 rounded-xl border text-lg select-none">
                <div onClick={() => props.setDataFont("local")} className="z-10 w-10 hover:cursor-pointer">
                    Local
                </div>
                <div onClick={() => props.setDataFont("back")} className="z-10 w-10 hover:cursor-pointer">
                    Back
                </div>
                <div
                    className={`absolute bg-white rounded-xl shadow-md h-10 duration-300 ${
                        props.dataFont === "local" ? "-translate-x-2 w-16" : "translate-x-14 w-14"
                    }`}
                ></div>
            </div>
        </div>
    )
}

export default SwitchButton
