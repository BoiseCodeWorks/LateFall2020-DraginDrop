<template>
  <div class="Rooms col-6">
    {{ roomData.name }}
    <div class="row space-evenly mt-3">
      <Items
        v-for="item in state.items"
        :item-data="item"
        :key="item.id"
        :room-id="roomData.id"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import Items from "../components/Item";
import { itemService } from "../services/ItemService";
import { AppState } from "../AppState";
export default {
  name: "Rooms",
  props: ["roomData"],
  components: {
    Items,
  },
  setup(props) {
    const state = reactive({
      items: computed(() => AppState.rooms[props.roomData.id].items),
    });
    function moveItem() {
      itemService.moveItem2();
    }
    return { state, moveItem, itemToMove: computed(() => AppState.tempItem) };
  },
};
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
