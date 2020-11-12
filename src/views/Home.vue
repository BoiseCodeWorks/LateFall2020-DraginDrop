<template>
  <div class="home container-fluid p-5">
    <div class="row">
      <Rooms v-for="room in rooms" :room-data="room" :key="room._id" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import Rooms from '../components/Room'
export default {
  name: 'Home',
  setup() {
    const state = reactive({})

    return { state, rooms: computed(() => AppState.rooms) }
  },
  components: {
    Rooms
  }
}
</script>

<style scoped>
.home {
  background-color: teal;
  margin: auto;
}
</style>
