<template>
    <div class="container">
      <router-view/>
      
    </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>

table td {
  word-break:break-word;
}

@keyframes flash {
  from { background-color: green}
  to { background-color:inherit}
}
.flash {
  animation: flash 1s 1;
}
</style>
