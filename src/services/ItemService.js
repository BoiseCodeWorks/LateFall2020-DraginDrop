import { AppState } from '../AppState'

class ItemService {
  setItemToMove(item) {
    AppState.tempItem = item
  }

  // NOTE the majority of these methods below could be replaced with PUT and GET requests to an api.  Just remember you will have to update the data on both rooms affected by the items moved.  Even with the Data being refreshed from PUT and GET requests, you could make a better user experience by only doing a PUT request and doing the updates on the client side, with similar methods bellow.

  // NOTE this method if you are going to send objects through the AppState
  moveItem(oldRoomId, newRoomId) {
    const itemMoving = AppState.tempItem
    const oldIndex = AppState.rooms.findIndex(r => r.id === oldRoomId)
    const newRoom = AppState.rooms.find(r => r.id === newRoomId)
    AppState.rooms[oldIndex].items = AppState.rooms[oldIndex].items.filter(i => i.id !== itemMoving.id)
    newRoom.items.push(itemMoving)
  }

  // NOTE utilize this method if you are going to send objects through data transfer
  moveItem2(oldRoomId, newRoomId, item) {
    const oldIndex = AppState.rooms.findIndex(r => r.id === +oldRoomId)
    // since we transfered the data as a JSON object at some point, our id's have now become strings, so we have to parse them out when we check.
    const newRoom = AppState.rooms.find(r => r.id === parseFloat(newRoomId))
    AppState.rooms[oldIndex].items = AppState.rooms[oldIndex].items.filter(i => i.id !== item.id)
    item.id = parseFloat(item.id)
    newRoom.items.push(item)
  }
}

export const itemService = new ItemService()
