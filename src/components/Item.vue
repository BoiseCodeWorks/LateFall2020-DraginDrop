<template>
  <div class="item col-1">
    <img :src="itemData.url" alt="img" />
  </div>
</template>

<script>
import { reactive } from "vue";
// import { itemService } from '../services/ItemService'
export default {
  name: "Item",
  props: ["itemData", "roomId"],
  setup(props, { emit }) {
    const state = reactive({});

    return {};
  },
};
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
