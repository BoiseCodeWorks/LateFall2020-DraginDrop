<template>
  <div class="Rooms col-6 py-2"
       dropzone="zone"
       @dragover.prevent
       @drop.prevent="moveItem"
  >
    <div class="row justify-content-center">
      <div class="col-3 text-light bg-info rounded-pill p-1">
        {{ roomData.name }}
      </div>
    </div>
    <transition-group name="item" tag="div" class="row space-evenly mt-3">
      <Items
        v-for="item in state.items"
        :item-data="item"
        :key="item.id"
        :room-id="roomData.id"
        draggable="true"
      />
    </transition-group>
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
      items: computed(() => AppState.rooms[props.roomData.id].items),
      itemToMove: computed(() => AppState.tempItem)
    })
    function moveItem() {
      // NOTE this way uses the AppState to transfer the data between Components
      const oldRoom = AppState.rooms.find(r => r.items.includes(state.itemToMove))
      itemService.moveItem(oldRoom.id, props.roomData.id)

      // NOTE this way uses the event datatransfer to transfer the data
      // const item = JSON.parse(event.dataTransfer.getData('item'))
      // const oldRoomId = event.dataTransfer.getData('room')
      // const newRoomId = props.roomData.id
      // itemService.moveItem2(oldRoomId, newRoomId, item)
    }
    return { state, moveItem }
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

.item-enter-active,
.item-leave-active{
  transition: all .5s ease;
}

.item-enter-from,
.item-leave-to{
  transform: translate(0px,-3vh);
  opacity: 0;
}
</style>
