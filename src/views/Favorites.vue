<template>
  <section>
    <Header page="Favorites" :location="false" />
    <Hero page="Favorites" />
    <div class="content basepage favoritesPage centerpage halfheight" id="content">
      <h1>Favorites</h1>
      <div class="days">
        <span class="day">
          <span class="temperature-value">32°C</span>
          <span class="day-date">07/14/22</span>
        </span>
        <span class="day">
          <span class="temperature-value">32°C</span>
          <span class="day-date">07/14/22</span>
        </span>
        <span class="day">
          <span class="temperature-value">32°C</span>
          <span class="day-date">07/14/22</span>
        </span>
        <span class="day">
          <span class="temperature-value">32°C</span>
          <span class="day-date">07/14/22</span>
        </span>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import store from "../store"
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from 'axios'
import Vue from 'vue'
import Hero from "../components/Hero.vue"

export default {
  components: { Footer, Header, Hero },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style>
</style>