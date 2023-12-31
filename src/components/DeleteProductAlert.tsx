import { Trash2Icon } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"

const DeleteProductAlert = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="hover:cursor-pointer hover:bg-gray-200 p-2 rounded-xl">
                    <Trash2Icon />
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estas seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede recuperar, si sigues adelante se borrara el producto de la base de
                        datos permanentemente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="border border-gray-200">Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="border">Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteProductAlert
