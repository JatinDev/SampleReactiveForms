import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BlogState {
    id: string,
    title: string,
    content: string,
    datetime: string
}

const initialState: BlogState[] = [{
    id: '0',
    title: '',
    content: '',
    datetime: ''
}]

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<BlogState>) => {
            return [...state, action.payload];
        },
        removeBlog: (state, action: PayloadAction<string>) => {
            return state.filter(x => x.id != action.payload);
        },
        resetBlogList: (state) => {
            return []
        }
    },
})

// Action creators are generated for each case reducer function
export const { addBlog, removeBlog, resetBlogList } = blogSlice.actions