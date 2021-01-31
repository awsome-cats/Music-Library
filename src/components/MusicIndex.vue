<template>

  <div class="columns">
    <div class="column is-3">
      <playlists addingEnabled @setActivePlaylists="set_active_playlists"/>
    </div>

    <div class="column is-9">
      <search :songs="songs" @filteredSongs="filter_songs"></search>
      <table class="table is-fullwidth is-striped is-hoverable is-narrow">
        <sorted :songs="filteredSongs" @sortedSongs="sort_songs"/>
        
        <pagenated :items="sortedSongs">
          <!-- song titleとしてnameにしたい-->
          <template v-slot:song_title>
              <a @click="add_song(songs.song, $event.target)">song</a>
          </template>
          <template>
          
              
            
          </template>
        </pagenated>
      </table>
    </div>
  </div>

</template>

<script>
import MusicData from '@/assets/list.json'
import MusicSearch from '@/components/MusicSearch'
import PagenateTableBody from '@/components/PagenateTableBody'
import MusicSort from '@/components/MusicSort'
import Playlists from '@/components/Playlists'

export default {
  name: 'MusicIndex',
  components: { 
    'search': MusicSearch,
    'pagenated':PagenateTableBody,
    'sorted'   : MusicSort,
    'Playlists': Playlists
  },
  data () {
    return {
      songs: MusicData,
      sortedSongs: MusicData,
      activePlaylists: [],
      filteredSongs: MusicData
    }
  },
    methods: {
      filter_songs (data) {
        this.filteredSongs =data
      },
    sort_songs(data) {
      this.sortedSongs =data
      // console.log('MusicIndex: sort_songs',this.sortedSongs)
    },
    set_active_playlists(playlists) {
      this.activePlaylists = playlists
      // console.log('setActive', this.activePlaylists)
    },
    add_song (song, e) {
      // let ls = e.closest('tr')
      // console.log('ls',ls)
      e.closest("tr").classList.add("flash")
      setTimeout(() => e.closest("tr").classList.remove("flash"), 1000)
      this.activePlaylists.forEach((pl, index) => {
        this.activePlaylists[index].songs.push(song)
        // console.log('activePlaylists'.this.activePlaylists)
      })
    }
  }
  // 子コンポーネントへ移動$emit操作
  // computed: {
  //   sortedSongs () {
  //     if (this.sortBy === '') {
  //       return this.songs
  //     }

  //     let sortModifier = (this.sortDirection === 'asc')?1: -1

  //     return this.songs.slice().sort((a,b) => {
  //       let colA = a[this.sortBy].toUpperCase()
  //       let colB = b[this.sortBy].toUpperCase()
  //       if (colA > colB) {
  //         return -1 * sortModifier
  //       }
  //       if (colA < colB) {
  //         return 1*sortModifier
  //       }
  //       return 0
  //     })
  //   }
  // },
  // methods: {
  //   change_sort (column) {
  //     if (this.sortBy === column && this.sortDirection === 'asc') {
  //       this.sortDirection = 'desc'
  //     } else {
  //       this.sortDirection = 'asc'
  //     }
  //     this.sortBy = column
  //   }
  // }
}
</script>

<style>

</style>