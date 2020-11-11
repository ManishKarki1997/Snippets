const mutation = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification)
  },
  REMOVE_NOTIFICATION(state, notificationId) {
    state.notifications = state.notifications.filter(
      (n) => n.id !== notificationId
    )
  },
}

export default mutation
