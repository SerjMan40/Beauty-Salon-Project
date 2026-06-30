import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Article } from '../../../types/article.types'

export interface ArticlesState {
  items: Article[]
  selectedId: string | null
  isLoading: boolean
  error: string | null
}

const initialState: ArticlesState = {
  items: [],
  selectedId: null,
  isLoading: false,
  error: null,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.items = action.payload
    },
    selectArticle(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setArticlesLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setArticlesError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setArticles, selectArticle, setArticlesLoading, setArticlesError } =
  articlesSlice.actions

export const articlesReducer = articlesSlice.reducer
