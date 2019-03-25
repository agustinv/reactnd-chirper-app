export const RECEIVE_USERS = 'RECEIVE_USERS'

export function usersTweets (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
