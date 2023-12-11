import { useQuery } from "react-query"

interface Contact {
    id: number
    name: string
    // Otras propiedades según la estructura de tus datos
}

interface ContactData {
    data: Contact[] | undefined
    error: Error | null
    isLoading: boolean
}

const ContactDataFetcher = (): ContactData => {
    const fetchContacts = async (): Promise<Contact[]> => {
        const response = await fetch("http://localhost:9433/api/contacts/")
        const data = await response.json()
        return data
    }

    // Utilizar useQuery con la interfaz de datos de contacto
    const { data, error, isLoading } = useQuery<Contact[], Error>("contacts", fetchContacts)

    // Exportar una instancia de la interfaz
    return { data, error, isLoading }
}

export default ContactDataFetcher
