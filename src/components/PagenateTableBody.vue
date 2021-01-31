<template>
  <tbody>
    <template v-for="(song,index) in paginatedItems" >
    <tr :key="index">
        <td>{{song.artist}}</td>
        <td>
          <!-- Slot -->
          <slot name="song_title" :song="song">
          </slot>
          <!-- <slot :song="song"></slot> -->
          {{song.title}}
        </td>
        <td>{{song.album}}</td>
        <td>{{song.genre}}</td>
        <td><slot name="custom_column" :song="song"></slot></td>
      </tr>        
    </template>
  </tbody>
      
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  props: {
    items: {
      type:Array,
      required: true
    },
    // pageサイズ
    per_page: {
      type: Number,
      required: false,
      default: 50
    }
  },
  mounted () {
    console.log('items', this.totalPages)
    console.log('page', this.per_page)

  },
  computed: {
    // item / 50の計算
    totalPages () {
      return Math.ceil(this.items.length/this.per_page)
    },
    // 1~50までコピーする
    paginatedItems () {
      return this.items.slice(0, this.page * this.per_page)
    }
  },
  created () {
    window.addEventListener('scroll', e => {
      // 1 > 50
      if (this.page >= this.totalPages) return
      // window.pageYoffset => 垂直方向のスクロールの量
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        this.page++
        console.log('e', e)
      }
    })
  },
  watch :{
    items () {
      this.page = 1
    }
  }
}
</script>

<style>

</style>