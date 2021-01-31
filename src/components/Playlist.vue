<template>
  <div class="columns">
    <div class="column is-3">
      <playlists :selectedPlaylistSlug="selectedPlaylistSlug" @setPlaylist="set_playlist"/>
    </div>

    <div class="column is-9">
      <table class="table is-fullwidth is-striped is-hoverable is-narrow">
      <sorted :songs="songs" @sortedSongs="sort_songs"/>
      <pagenated :items="sortedSongs">
        <!-- <template v-slot:custom_column :songs="songs">
          <a @click="delete_song(songs.song)"
            class="button is-small is-danger"
          ><span>delete</span></a>
              
            
        </template> -->
      </pagenated>
  </table>
    </div>
  </div>
</template>

<script>
import PagenateTableBody from '@/components/PagenateTableBody'
import MusicSort from '@/components/MusicSort'
import Playlists from '@/components/Playlists'

export default {
  name: 'MusicIndex',
  components: { 
    'pagenated':PagenateTableBody,
    'sorted'   : MusicSort,
    'Playlists': Playlists
  },
  data () {
    return {
      selectedPlaylist: {},
      selectedPlaylistSlug: this.$route.params.slug,
      songs: [],
      sortedSongs: []
    }
  },
  methods: {
    sort_songs(data) {
      this.sortedSongs =data
      console.log('MusicIndex: sort_songs',this.sortedSongs)
    },
    set_playlist(playlist) {
      this.selectedPlaylist = playlist
      this.songs = playlist.songs
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.selectedPlaylistSlug = to.params.slug
    next()
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