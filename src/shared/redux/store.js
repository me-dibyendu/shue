import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./features/users.slice"

const store = configureStore({
    reducer: {
        user: usersSlice,
    },
})

export default store