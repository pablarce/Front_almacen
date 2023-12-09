interface BillProps {
    className?: string
}

const Bill = (props: BillProps) => {
    return (
        <div className={`${props.className}`}>
            <p className="text-2xl">Factura</p>
        </div>
    )
}

export default Bill
