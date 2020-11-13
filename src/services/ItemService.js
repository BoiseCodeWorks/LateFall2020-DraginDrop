import { AppState } from '../AppState'

class ItemService {
  setItemToMove(item) {
    AppState.tempItem = item
  }

  // this method if you are going to send objects through the AppState
  moveItem(oldRoomId, newRoomId) {
    const itemMoving = AppState.tempItem
    const oldIndex = AppState.rooms.findIndex(r => r.id === oldRoomId)
    const newRoom = AppState.rooms.find(r => r.id === newRoomId)
    AppState.rooms[oldIndex].items = AppState.rooms[oldIndex].items.filter(i => i.id !== itemMoving.id)
    newRoom.items.push(itemMoving)
  }

  // utilize this method if you are going to send objects through data transfer
  moveItem2(oldRoomId, newRoomId, item) {
    const oldIndex = AppState.rooms.findIndex(r => r.id === -oldRoomId)
    const newRoom = AppState.rooms.find(r => r.id === parseFloat(newRoomId))
    AppState.rooms[oldIndex].items = AppState.rooms[oldIndex].items.filter(i => i.id !== item.id)
    item.id = parseFloat(item.id)
    newRoom.items.push(item)
  }
}

export const itemService = new ItemService()
