import { AppState } from '../AppState'

class ItemService {
  setItemToMove(item) {
    AppState.tempItem = item
  }

  // this method if you are going to send objects through the AppState
  moveItem() {

  }

  // utilize this method if you are going to send objects through data transfer
  moveItem2() {

  }
}

export const itemService = new ItemService()
