import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageSize: 10,
    pageOffset: 0,
    viewJobDescription: '',
    loading: false,
    error: '',
    data: []
}



const url = import.meta.env.VITE_API_URL

export const fetchData = createAsyncThunk('fetchData', async (offset) => {
    try {
        // console.log("Offset data: ", offset);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 20,
            "offset": offset
        })

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body
        }

        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const jobSlice = createSlice({
    name: 'job-listing',
    initialState,
    reducers: {
        setViewJob: (state, payload) => {
            state.viewJobDescription = payload.payload
        },
        resetViewJob: (state) => {
            state.viewJobDescription = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {

            if (state.pageOffset === 0) {
                state.data = payload?.jdList
            } else {
                const temp = state.data
                temp.push(...payload?.jdList)
                state.data = temp
                // state.data = payload?.jdList
            }

            state.pageOffset = state.pageOffset + 1
            state.loading = false
        })
        builder.addCase(fetchData.rejected, (state, { error }) => {
            state.loading = false
            state.error = error.message
        })
    }
})

export const { setViewJob, resetViewJob } = jobSlice.actions
export default jobSlice.reducer