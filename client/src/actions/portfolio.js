export const SET_ORDER = 'SET_ORDER'

export function setOrder(data) {
  return {
    type: SET_ORDER,
    data: data > 0 ? -1 : 1
  }
}
