<template>
  <div class="home">
    <img class="logo" alt="Accesa logo" src="../assets/logo.png" />
    <div v-html="content"></div>
  </div>
</template>

<script>

import { db } from "../main";

export default {
  name: "FirstPage",

  data() {
    return {
      content: ""
    };
  },
  mounted() {
    db.collection("editor")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          this.content = doc.data().message;
        });
      });
  },
};
</script>

<style lang="css" src="../views/CSS/App.css">
</style>