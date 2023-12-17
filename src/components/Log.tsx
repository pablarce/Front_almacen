import ContactDataFetcher from "./UseQueryContext"

interface BillProps {
    className?: string
}

const Log = (props: BillProps) => {
    const { data, error } = ContactDataFetcher()
    console.log(data)

    return (
        <div className={`${props.className}`}>
            <h1 className="text-3xl">Log</h1>
            <div className="mt-4 h-32 border border-black p-2 rounded-xl">
                {error && (
                    <>
                        <p>
                            {error.name} || {error.message}
                        </p>
                        <p>{error.stack}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Log
