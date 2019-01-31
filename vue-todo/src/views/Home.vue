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

      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-btn slot="activator" color="primary" dark>Add New Todo</v-btn>
        <v-card>
          <v-card-title>
            <h3>Add New Todo</h3>
          </v-card-title>
          <v-form class="px-4" ref="form">
            <v-text-field v-model="title" label="Todo Title" :rules="titleRules" prepend-icon="title"></v-text-field>
            <v-textarea v-model="info" label="Todo Info" :rules="infoRules" prepend-icon="edit"></v-textarea>
            <v-menu v-model="menu" :close-on-content-click="false">
              <v-text-field slot="activator" :rules="dateRules" clearable label="Due Date" prepend-icon="date_range"></v-text-field>
            </v-menu>
          </v-form>
          <v-spacer></v-spacer>
          <v-btn class="success" flat @click="submit">Add Todo</v-btn>
          <v-btn color="white" class="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
