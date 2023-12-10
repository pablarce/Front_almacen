interface BillProps {
    className?: string
}

const Log = (props: BillProps) => {
    return (
        <div className={`${props.className}`}>
            <p className="text-2xl">Log</p>
        </div>
    )
}

export default Log
