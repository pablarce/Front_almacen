import ContactDataFetcher from "./UseQueryContext"

interface BillProps {
    className?: string
}

const Log = (props: BillProps) => {
    const { data, error, isLoading } = ContactDataFetcher()
    console.log(data)

    return (
        <div className={`${props.className}`}>
            <div>
                <h1>Lista de contactos</h1>
                <ul>{data?.map((contact) => <li key={contact.id}>{contact.name}</li>)}</ul>
                <p>{isLoading}</p>
            </div>
        </div>
    )
}

export default Log
