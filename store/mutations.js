const mutation = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification)
  },
  REMOVE_NOTIFICATION(state, notificationId) {
    state.notifications = state.notifications.filter(
      (n) => n.id !== notificationId
    )
  },
  SET_SNIPPETS(state, snippets) {
    state.snippets = snippets
  },
  SET_SEARCH_QUERY(state, searchQuery) {
    state.searchQuery = searchQuery
  },
}

export default mutation
