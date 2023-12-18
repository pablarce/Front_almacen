import {Loader2, BadgeCheck} from "lucide-react"

interface BillProps {
    className?: string
    isLoading: boolean
    error: any
}

const Log = (props: BillProps) => {

    return (
        <div className={`${props.className}`}>
            <div className="flex items-center">
                <h1 className="text-3xl">Log</h1>
                <div className="ml-auto"></div>
                {props.isLoading ? <div className="flex gap-1"><Loader2 className="animate-spin"/><p>Loading...</p></div> : <BadgeCheck className=" text-green-800"/>}
            </div>
            <div className="mt-4 h-32 border border-black p-2 rounded-xl">
                {props.error && (
                    <>
                        <p>
                            {props.error.name} || {props.error.message}
                        </p>
                        <p>{props.error.stack}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Log
