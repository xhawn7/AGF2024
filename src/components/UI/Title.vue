<template>
  <h1 :class="['title', `title--${type}`]">{{ text }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'sub-title', 'notice'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin: 0;
  padding: 0;
}

.title--default {
  font-size: 2rem;
  font-weight: bold;
  color: #363435;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  position: relative;
  display: inline-block;
  padding: 0 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #363435;
}

.title--sub-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #363435;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  position: relative;
  display: inline-block;
  padding: 0 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #363435;
}

.title--notice {
  font-size: 1.8rem;
  font-weight: bold;
  background-color: black;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  display: inline-block;
  position: absolute;
  top: -1.5rem;
  left: 1.5rem;
}
</style>
