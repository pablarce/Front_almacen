import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"

import App from "./App.tsx"
import { Toaster } from "./components/ui/toaster"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <Toaster />
        </QueryClientProvider>
    </React.StrictMode>
)
