<template>
  <div
    class="Rooms col-6"
    dropzone="zone"
    @dragover.prevent
    @drop.prevent="moveItem()"
  >
    {{ roomData.name }}
    <div class="row space-evenly mt-3">
      <Items
        v-for="(item) in state.items"
        :item-data="item"
        :key="item.id"
        :room-id="roomData.id"
        draggable="true"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import Items from '../components/Item'
import { itemService } from '../services/ItemService'
import { AppState } from '../AppState'
export default {
  name: 'Rooms',
  props: ['roomData'],
  components: {
    Items
  },
  setup(props) {
    const state = reactive({
      items: computed(() => AppState.rooms[props.roomData.id].items)
    })
    function moveItem() {
      // const oldRoom = AppState.rooms.find(r => r.items.includes(AppState.tempItem))
      // itemService.moveItem(oldRoom.id, props.roomData.id)

      const item = JSON.parse(event.dataTransfer.getData('item'))
      const oldRoomId = event.dataTransfer.getData('room')
      const itemToMove = item
      const newRoomId = props.roomData.id

      itemService.moveItem2(oldRoomId, newRoomId, itemToMove)
    }
    return { state, moveItem, itemToMove: computed(() => AppState.tempItem) }
  }

}
</script>

<style scoped>
.Rooms {
  height: 30vh;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}
</style>
