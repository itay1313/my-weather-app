<template>
  <footer id="footer">
    <span class="feature">Made By <a href="https://itaycode.com/" target="_blank"
        rel="noopener noreferrer">itaycode</a></span>
    <span class="feature">Api By <a href="https://www.accuweather.com/" target="_blank"
        rel="noopener noreferrer">AccuWeather</a></span>
  </footer>
</template>

<script>
import { version } from "../../package.json"

export default {
  data() {
    return {
      version: version
    }
  }
}
</script>

<style>
</style>