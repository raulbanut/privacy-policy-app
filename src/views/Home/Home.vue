<template>
  <div class="home">
    <button style="background-color: #1f2d40">
      <router-link to="/login"
        ><img class="logo" alt="Accesa logo" src="../../assets/logo.png"
      /></router-link>
    </button>

    <div class="logat" v-if="logState">
      <button class="logoutButton" @click="logout">Logout</button>

      <div v-html="value" style="margin: 30px" />

      <button class="menuButton" @click="editContent()">Edit</button>
      <button class="menuButton" @click="addTemplate()">Add template</button>
      <button class="menuButton" @click="deleteContent()">
        Delete content
      </button>

      <div>
        <!-- <Editor
          class="editor"
          v-model="value"
          editorStyle="height: 320px"
          style="margin-top: 0px"
          placeholder="hello"
        /> -->

        <vue-editor class="editor" v-model="value" :editorToolbar="customToolbar" ></vue-editor>
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