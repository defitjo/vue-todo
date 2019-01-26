<template>
  <div class="home">
    <v-container class="my-5">
      <v-card flat>
        <v-layout pa-4 row wrap>
          <v-flex xs12 md6>
            <div class="caption">Todo Title</div>
            <div>Testing Todo</div>
          </v-flex>
          <v-flex xs12 md4>
            <div class="caption">Due Date</div>
            <div>February 1, 2018</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption ml-2">Todo Status</div>
            <div>
              <v-tooltip bottom>
                <v-btn slot="activator" small flat icon color="success">
                  <v-icon>check</v-icon>
                </v-btn>
                <span>Todo Complete</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn slot="activator" small flat icon color="warning">
                  <v-icon>close</v-icon>
                </v-btn>
                <span>Todo Ongoing</span>
              </v-tooltip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card flat>
        <v-layout pa-4 row wrap>
          <v-flex xs12 md6>
            <div class="caption">Todo Title</div>
            <div>Testing Todo 2</div>
          </v-flex>
          <v-flex xs12 md4>
            <div class="caption">Due Date</div>
            <div>February 10, 2018</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption ml-2">Todo Status</div>
            <div>
              <v-tooltip bottom>
                <v-btn slot="activator" small flat icon color="success">
                  <v-icon>check</v-icon>
                </v-btn>
                <span>Todo Complete</span>
              </v-tooltip>
              <v-tooltip bottom>
                <v-btn slot="activator" small flat icon color="warning">
                  <v-icon>close</v-icon>
                </v-btn>
                <span>Todo Ongoing</span>
              </v-tooltip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    }
  }
</script>
