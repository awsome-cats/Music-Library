<template>
  <div class="control has-icons-left">
    <input type="text" placeholder="タイトルを検索します" v-model="searchInput" class="input">
    <span class="icon is-small is-left">探す</span>
  </div>
</template>

<script>
import MusicWorker from '@/music.worker'
let worker = {}
export default {
name: 'MusicSearch',
props: {
      songs: {
        type: Array,
        required: true
      }
    },
data() {
  return {
    searchInput: ''
  }
},
watch: {
  searchInput (searchTerm) {
    this.search(searchTerm)
  }
},
methods: {
  search (searchTerm) {
    if (searchTerm === '') {
      this.$emit('filteredSongs', this.songs)
      return 
    }
    if (worker.terminate !== undefined) {
      worker.terminate()
    }
    worker = new MusicWorker
    worker.postMessage({
      search: searchTerm,
      songs: this.songs
    })
    worker.onmessage = (m) => {
      this.$emit('filteredSongs', m.data.filteredSongs)
    }
  }
}

}
</script>

<style>

</style>