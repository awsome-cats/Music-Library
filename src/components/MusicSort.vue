<template>
 
    <thead>
      <th style="width: 30%;" @click="change_sort('artist')"><a>アーティスト</a></th>
      <th style="width: 30%;" @click="change_sort('title')"><a>タイトル</a></th>
      <th style="width: 30%;" @click="change_sort('album')"><a>アルバム</a></th>
      <th style="width: 20%;" @click="change_sort('genre')"><a>ジャンル</a></th>
    </thead>

</template>

<script>

export default {
  name: 'MusicSort',
  
    props: {
      songs: {
        type:Array,
        required: true
      }
    },
  data () {
    return {
      sortBy: '',
      sortDirection: 'asc'
    }
  },
  watch: {
    songs () {
      this.sort_songs()
    }
  },
  methods: {
    change_sort (column) {
      
      if (this.sortBy === column && this.sortDirection === 'asc') {
        this.sortDirection = 'desc'
        
      } else {
        this.sortDirection = 'asc'
        
      }
      this.sortBy = column
      this.sort_songs()
    },
    sort_songs () {
      if (this.sortBy === '') {
        this.$emit('sortedSongs', this.songs)
        return
      }

      let sortModifier = (this.sortDirection === 'asc')?1: -1

      let sortedSongs = this.songs.slice().sort((a,b) => {
        let colA = a[this.sortBy].toUpperCase()
        let colB = b[this.sortBy].toUpperCase()
        if (colA > colB) {
          return -1 * sortModifier
        }
        if (colA < colB) {
          return 1*sortModifier
        }
        return 0
      })
      this.$emit('sortedSongs', sortedSongs)
    }
  }
}
</script>

<style>

</style>