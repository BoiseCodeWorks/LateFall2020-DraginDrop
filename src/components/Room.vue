<template>
  <div class="Rooms col-6 py-2"
       draggable="true"
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
    //   const item = JSON.parse(event.dataTransfer.getData('item'))
    //   const oldRoomId = JSON.parse(event.dataTransfer.getData('oldRoom'))
    //   console.log('item ' + item.name + ' dropped in', props.roomData.name, oldRoomId)
    //   itemService.moveItem2(oldRoomId, props.roomData.id, item)
      console.log('Appstate item', AppState.tempItem)
      itemService.moveItem(state.itemToMove.oldRoomId, props.roomData.id)
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
.item-leave-active {
  transition: all 0.5s ease;
}

.item-enter-from,
.item-leave-to {
  transform: translate(0px, -3vh);
  opacity: 0;
}
</style>
