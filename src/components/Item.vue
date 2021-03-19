<template>
  <div class="col-1" @dragstart="moveItem">
    <div class="item shadow">
      <img :src="itemData.url" alt="img" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { itemService } from '../services/ItemService'
export default {
  name: 'Item',
  props: ['itemData', 'roomId'],
  setup(props, { emit }) {
    const state = reactive({})
    function moveItem() {
      console.log('item picked up', props.itemData.name)
      // event.dataTransfer.setData('item', JSON.stringify(props.itemData))
      // event.dataTransfer.setData('oldRoom', JSON.stringify(props.roomId))
      itemService.setItemToMove(props.itemData, props.roomId)
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
  border-radius: 5px;
  border: 1px;
  border-style: solid;
  border-color: rgb(95, 95, 95);
}
</style>
