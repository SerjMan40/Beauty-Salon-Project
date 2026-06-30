import { createAsyncThunk } from '@reduxjs/toolkit'
import { articlesApi } from '../api/articles.api'

export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async () => (await articlesApi.getAll()).data,
)
