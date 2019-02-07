<template>
  <div class="home">

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>New Todo Added! ^_^</span>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-container class="my-5 grey lighten-4">
      <v-card flat v-for="(todo, idx) in todos" :key="idx">
        <v-layout pa-4 row wrap>
          <v-flex xs12 md6>
            <div class="caption">Todo Title</div>
            <div>{{ todo.title }}</div>
          </v-flex>
          <v-flex xs12 md4>
            <div class="caption">Due Date</div>
            <div>{{ todo.date }}</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption">Todo Status</div>
            <div>
              <v-tooltip bottom>
                <v-btn slot="activator" @click="remove(todo.id)" small flat icon color="success">
                  <v-icon>check</v-icon>
                </v-btn>
                <span>Todo Complete</span>
              </v-tooltip>
            </div>
          </v-flex>
          <v-expansion-panel>
              <v-expansion-panel-content class="grey lighten-4">
                <div slot="header">{{ todo.title }}</div>
                <div>{{ todo.info }}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
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
              <v-text-field slot="activator" v-model="date" :rules="dateRules" clearable label="Due Date" prepend-icon="event" readonly></v-text-field>
              <v-date-picker v-model="date" @change="menu = false"></v-date-picker>
            </v-menu>
          </v-form>
          <v-spacer></v-spacer>
          <v-btn class="success" flat @click="submit" :loading="loading">Add Todo</v-btn>
          <v-btn color="white" class="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
  import { db } from '../main'
  export default {
    data () {
      return { 
        todos: [],
        title: '',
        info: '',
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        titleRules: [
          v => !!v || 'Title is required',
          v => v.length >= 3 || 'Minimum length of title is 3 characters'
        ],
        infoRules: [
          v => !!v || 'Todo information is required',
          v => v.length >= 3 || 'Minimum length of todo information is 5 characters'
        ],
        dateRules: [
          v => !!v || 'Date is required',
          v => v.length >=3 || 'Minimum length of date is 6 characters'
        ],
        loading: false,
        dialog: false,
        snackbar: false,
      }
    },
    firestore() {
      return {
        todos: db.collection('todos').orderBy('date')
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.loading = true;
          const todo = {
            title: this.title,
            info: this.info,
            date: this.date
          }
          db.collection('todos').add(todo).then(() => {
            this.loading = false;
            this.dialog = false;
            this.snackbar = true
          })
        }
      },
      remove(id) {
        db.collection('todos').doc(id).delete(); 
      }
    },
  }
</script>
