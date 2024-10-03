<template>
  <div class="divider"></div>
</template>

<script>
export default {
  name: 'Divider'
}
</script>

<style scoped>
.divider {
  width: 100%;
  height: 83px;
  background-image: url('@/assets/divider.jpg');
  background-repeat: repeat-x;
  background-position: 0 0;
  background-size: auto 83px;
  animation: moveLeft 60s linear infinite;
  border-top: 0.5rem solid black;
  border-bottom: 0.5rem solid black;
}

@keyframes moveLeft {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -599px 0;
  }
}
</style>
