<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="p" @click="onClick($event)">Hello
    <span class="hs">world</span>
    </p>
    <!-- <p @mousemove="changeMouseMove">World</p> -->
    <!-- <input type="text" @change="inputChange"> -->
  </div>
</template>

<script>
export default {
  mounted () {
    let el = document.querySelector('.about')
    console.log('el', el)
    let rl = el.closest('div')
    console.log('rl', rl)
  },
  methods: {
    onClick(event) {
      console.log('event',event)
      let ls = event.target
      console.log('ls', ls)
      let llls = ls.closest('span').classList.add('flash')
      console.log('llls', llls)
    },
    // changeMouseMove(event) {
    //   console.log('mouse', event.)
    // },
    // inputChange(event) {
    //   console.log('change', event)
    // }
  }
}
</script>
