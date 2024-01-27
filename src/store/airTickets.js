import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async function (_, { rejectWithValue, getState }) {
        try {
            const limit = `_limit=${getState().tickets.limit}`

            const transfers = `${getState().tickets.transfers}`

            const victory = getState().tickets.firms.victory
            const red_wings = getState().tickets.firms.red_wings
            const s7 = getState().tickets.firms.s7

            const sort = `_sort=${getState().tickets.sorting}`

            const url = `http://localhost:3333/tickets?${limit}&${transfers}&${sort} `
            console.log(url)

            const response = await fetch(url)
            // company=    red_wings    victory   s7

            if (!response.ok) {
                throw new Error("Server Error!!!")
            }

            let data = await response.json()

            if(!victory) {
                data = data.filter((item) => item.company !== "victory")
            }
            if(!red_wings) {
                data = data.filter((item) => item.company !== "red_wings")
            }
            if(!s7) {
                data = data.filter((item) => item.company !== "s7")
            }

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const airTickets = createSlice({
    name: "tickets",
    initialState: {
        tickets: [],
        limit: 3,
        transfers: '',
        firms: {
            victory: true, 
            red_wings: true,
            s7: true
        },
        sorting: 'price.thousand'
    },
    reducers: {
        connectionAmount(state, action) {
            state.transfers = action.payload
        },

        toggleVictory(state) {
            state.firms.victory = !state.firms.victory
        },
        toggleRedWings(state) {
            state.firms.red_wings = !state.firms.red_wings
        },
        toggleS7(state) {
            state.firms.s7 = !state.firms.s7
        },

        parametersSorting(state, action) {
            state.sorting = action.payload
        },
        loadMore(state) {
            state.limit = state.limit + 3
        }
    },
    extraReducers: {
        [fetchTickets.fulfilled]: (state, action) => {
            state.tickets = action.payload
            // console.log(action.payload)
        },
        [fetchTickets.rejected]: (state, action) => {
            console.log(action.payload)
        }
    }
})


export const { connectionAmount, parametersSorting, loadMore, toggleRedWings, toggleS7, toggleVictory } = airTickets.actions
export default airTickets.reducer