import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Article } from '../../../types/article.types'
import { fetchArticles } from './articles.thunks'

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Не удалось загрузить статьи.'
      })
  },
})

export const { setArticles, selectArticle, setArticlesLoading, setArticlesError } =
  articlesSlice.actions

export const articlesReducer = articlesSlice.reducer
