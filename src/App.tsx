import { useEffect, useState } from "react"

import inventoryData from "./assets/data"

import "./App.css"

import Articles from "./components/Articles"
import Bill from "./components/Log"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {
    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)
    const [dataFont, setDataFont] = useState<string>("local")
    const [idProductPulsed, setidProductPulsed] = useState<string>("")

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [screenHeight])

    return (
        <div className="bg-gray-900  overflow-hidden">
            <Navbar dataFont={dataFont} setDataFont={setDataFont} className="flex items-center h-40" />
            <div
                style={{ height: `${screenHeight - 160}px` }}
                className={`grid grid-cols-3 gap-6 px-10 w-full pb-10`}
            >
                <Articles
                    idProductPulsed={idProductPulsed}
                    setIdProductPulsed={setidProductPulsed}
                    data={dataFont === "local" ? inventoryData : ""}
                    className="bg-gray-100 p-4 border-2 rounded-xl overflow-y-scroll"
                />
                <div className="col-span-2 grid grid-rows-3 gap-6">
                    <Product
                        idProductPulsed={idProductPulsed}
                        className="bg-gray-100 p-4 row-span-2 border-2 rounded-xl w-full"
                    />
                    <Bill className="bg-gray-100 p-4 border-2 rounded-xl w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default App
