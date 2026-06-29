import type { RootState } from '../../../app/store'

export const selectArticlesState = (state: RootState) => state.articles
export const selectArticles = (state: RootState) =>
  selectArticlesState(state).items
export const selectArticlesLoading = (state: RootState) =>
  selectArticlesState(state).isLoading
export const selectArticlesError = (state: RootState) =>
  selectArticlesState(state).error
export const selectSelectedArticle = (state: RootState) => {
  const { items, selectedId } = selectArticlesState(state)
  return items.find(({ id }) => id === selectedId)
}
export const selectArticleById = (id: string) => (state: RootState) =>
  selectArticles(state).find((article) => article.id === id)
