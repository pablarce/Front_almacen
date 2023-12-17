interface BillProps {
    className?: string
    isLoading: boolean
    error: any
}

const Log = (props: BillProps) => {

    return (
        <div className={`${props.className}`}>
            <h1 className="text-3xl">Log</h1>
            <div className="mt-4 h-32 border border-black p-2 rounded-xl">
                {props.isLoading ? <p>Loading...</p> : <p>not loading</p>}
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
