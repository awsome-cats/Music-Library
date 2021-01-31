<template>
  <nav class="panel">
    <a class="panel-block">
      <router-link to="/">プレイリストへ</router-link>
    </a>
    <!-- <router-link to="/about">About</router-link> -->
    <p class="panel-heading">プレイリスト</p>
    
    <template v-for="(playlist,index) in playlists">
      <p class="panel-block playlist-item" :key="playlist.slug">
       <router-link class="panel-block" :to="'/playlist/' + playlist.slug">{{ playlist.name }}<span class="panel-icon"></span>
       </router-link> 

       <template v-if="addingEnabled"> 
         <a v-if="!playlist.adding" @click="add_songs(index)" title="曲を加えよう"></a>
          <a v-if="playlist.adding" @click="add_songs(index)" title="diable adding songs">
         </a>
       </template>

      </p>
    </template>
    
    <div class="panel-block">
      <form @submit.prevent="add_playlist">
        <div class="field has-addons">
          <input type="text" class="input" placeholder="New playlist" v-model="newPlaylistName">
          <p class="control"><button type="submit" class="button is-success"> Add</button></p>
        </div>
      </form>
    </div>

  </nav>
</template>

<script>
import localforage from 'localforage'
export default {
  data () {
    return {
      newPlaylistName: '',
      playlists: []
    }
  },
  props: {
    addingEnabled: {
      type: Boolean,
      default: false,
      required: false
    },
    selectedPlaylistSlug: {
      type: String,
      required: false
    }
  },
  // 深い階層のwatch
  // 監視対象のdataに対してメソッドを作成
  watch: {
    playlists: {
      handler () {
      localforage.setItem('playlists', this.playlists, console.log(this.playlists))
     },
       deep:true
    },
    selectedPlaylistSlug (slug) {
      this.$emit('setPlaylist', this.playlists.find(pl => pl.slug === slug))
    }
  },
  created() {
    localforage.getItem('playlists').then(data => {
      console.log('localforage', data)
      if (data !== null) {
        this.playlists = data
        this.playlists.forEach((pl, index) => {
          this.playlists[index].adding = false
        })
      }
    })
    .then(() => {
      if (this.selectedPlaylistSlug !== undefined) {
        this.$emit('setPlaylist', this.playlists.find(pl => pl.slug === this.selectedPlaylistSlug))
      }
    })
  },
  methods: {
    add_playlist () {
      this.playlists.push({
        name: this.newPlaylistName,
        adding: false,
        slug: this.slugify(this.newPlaylistName),
        songs: []
      })
      this.newPlaylistName = ''
    },
    slugify(name) {
      return name.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/g/g, '-and-')
      .replace(/[^\w-] + /g, '')
      .replace(/--+/g, '-')
    },
    add_songs (index) {
      this.playlists[index].adding =!this.playlists[index].adding
      this.$emit('setActivePlaylists', this.playlists.filter(pl => pl.adding === true))
    }
  }

}
</script>

<style>
@media (min-width: 769px) {
  nav {
    position:fixed;
    width: inherit;
  }
}
@media (max-width: 1215px) {
  nav {
    width: inherit;
  }
}



.playlist-item {
  justify-content: space-between;
}

</style>