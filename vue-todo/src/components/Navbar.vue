<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app class="indigo lighten-3">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-icon size="100" class="white--text">person</v-icon>
          </v-avatar>
          <p class="white--text subheading mt-1">Me</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="white--text">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo lighten-3" flat app>
      <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">vue TODO</v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    })
  }
</script>

<style>

</style>
