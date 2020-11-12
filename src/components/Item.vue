<template>
  <div class="item col-1" @dragstart="moveItem()">
    <img :src="itemData.url" alt="img" />
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { itemService } from '../services/ItemService'
export default {
  name: 'Item',
  props: ['itemData', 'roomId'],
  setup(props, { emit }) {
    const state = reactive({})
    function moveItem() {
      // itemService.setItemToMove(props.itemData)
      // emit to parent first way

      // use events to set data for 2nd way
      event.dataTransfer.setData('item', JSON.stringify(props.itemData))
      event.dataTransfer.setData('room', props.roomId)
    }
    return { state, moveItem }
  }
}
</script>

<style scoped>
img {
  height: 5vh;
  width: 4vw;
  background-color: white;
  border: 1px;
  border-style: solid;
  border-color: black;
}
</style>
