import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_storyboard_list = createAsyncThunk(
  "storyboards/api_v1_storyboard_list",
  async payload => {
    const response = await apiService.api_v1_storyboard_list(payload)
    return response.data
  }
)
export const api_v1_storyboard_create = createAsyncThunk(
  "storyboards/api_v1_storyboard_create",
  async payload => {
    const response = await apiService.api_v1_storyboard_create(payload)
    return response.data
  }
)
export const api_v1_storyboard_retrieve = createAsyncThunk(
  "storyboards/api_v1_storyboard_retrieve",
  async payload => {
    const response = await apiService.api_v1_storyboard_retrieve(payload)
    return response.data
  }
)
export const api_v1_storyboard_update = createAsyncThunk(
  "storyboards/api_v1_storyboard_update",
  async payload => {
    const response = await apiService.api_v1_storyboard_update(payload)
    return response.data
  }
)
export const api_v1_storyboard_partial_update = createAsyncThunk(
  "storyboards/api_v1_storyboard_partial_update",
  async payload => {
    const response = await apiService.api_v1_storyboard_partial_update(payload)
    return response.data
  }
)
export const api_v1_storyboard_destroy = createAsyncThunk(
  "storyboards/api_v1_storyboard_destroy",
  async payload => {
    const response = await apiService.api_v1_storyboard_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const storyboardsSlice = createSlice({
  name: "storyboards",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_storyboard_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_storyboard_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_storyboard_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_storyboard_list,
  api_v1_storyboard_create,
  api_v1_storyboard_retrieve,
  api_v1_storyboard_update,
  api_v1_storyboard_partial_update,
  api_v1_storyboard_destroy,
  slice: storyboardsSlice
}
