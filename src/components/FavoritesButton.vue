<template>
  <button class="addToFavorites tooltip" v-on:click="changeMessage()">
    <span class="tooltiptext">Add to favorites</span>
    <svg class="heart" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
      <g fill="none" stroke-miterlimit="10">
        <path
          d="m8 15-1.16-1.063C2.72 10.1 0 7.6 0 4.5A4.386 4.386 0 0 1 4.4 0 4.7 4.7 0 0 1 8 1.717 4.7 4.7 0 0 1 11.6 0 4.386 4.386 0 0 1 16 4.5c0 3.106-2.72 5.6-6.84 9.441Z" />
        <path
          d="m8 13.644.482-.442.162-.151C12.471 9.483 15 7.125 15 4.496c0-.963-.35-1.85-.985-2.499A3.345 3.345 0 0 0 11.6 1c-1.07 0-2.127.506-2.83 1.355l-.77.93-.77-.93C6.527 1.506 5.47 1 4.4 1c-.928 0-1.786.354-2.415.997C1.35 2.646 1 3.533 1 4.496c0 2.63 2.529 4.987 6.356 8.555l.162.151.482.442M8 15l-1.16-1.063C2.72 10.095 0 7.602 0 4.496 0 1.962 1.92 0 4.4 0 5.8 0 7.12.654 8 1.717 8.88.654 10.2 0 11.6 0 14.08 0 16 1.962 16 4.496c0 3.106-2.72 5.6-6.84 9.441L8 15Z"
          fill="var(--color)" />
      </g>
    </svg></button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World Vue',
    }
  },
  methods: {
    changeMessage() {
      this.message = 'New message from method'
    }
  }
}
</script>

<style>
</style>