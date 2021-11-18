<template>
  <div class="home">
    <button style="background-color: #1f2d40">
      <router-link to="/login"
        ><img class="logo" alt="Accesa logo" src="../../assets/logo.png"
      /></router-link>
    </button>

    <!-- <img alt="Accesa logo" src="../../assets/logo.png" /> -->
    <!-- <p></p> -->

    <div class="logat" v-if="logState">
      <button @click="logout">Logout</button>

      <div v-html="value" style="margin: 30px" />

      <button @click="addTemplate()" style="margin-bottom: 10px">
        Add template
      </button>
      <button
        @click="deleteContent()"
        style="margin-bottom: 10px; margin-left: 0.2rem"
      >
        Delete content
      </button>

      <div>
        <Editor
          class="editor"
          v-model="value"
          editorStyle="height: 320px"
          style="margin-top: 0px"
        />
        <!-- <Editor
          v-model="value"
          toolbar="minimal"
        ></Editor> -->
      </div>

      <div style="margin-top: 10px">
        <button @click="saveMessageFromEditor(value)">
          Save Text from Editor
        </button>
      </div>
    </div>

    <div v-if="!logState">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script lang="js" src="./Home.js"/>

<style scoped lang="css" src="./Home.css"></style>