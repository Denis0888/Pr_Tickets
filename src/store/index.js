import { configureStore } from "@reduxjs/toolkit"
import ticketsReducer from "./airTickets"

export default configureStore({
    reducer: {
        tickets: ticketsReducer
    }
})