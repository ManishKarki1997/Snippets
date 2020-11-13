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
    console.log(snippets)
    state.snippets = snippets
  },
}

export default mutation
