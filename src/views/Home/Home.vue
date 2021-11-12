<template>
  <div class="home">
    <img alt="Accesa logo" src="../../assets/logo.png" />
    <p></p>
    <button @click="logout">Logout</button>
    <!-- <div class="section-header">Privacy Notice</div> -->

      <!-- <div class="section">
      <div class="section-title">{{ sectiune.title }}</div>
      <div class="section-content">
        <button @click="stateAdd = !stateAdd" style="margin-right: 0.3rem">
          Add items to the list
        </button>

        <p>{{ sectiune.paragraph }}</p>

        <div v-if="stateAdd">
          <div>
            <input type="text" placeholder="Mesaj" v-model="obiect.message" />
            <button
              @click="saveData()"
              style="margin: auto; margin-left: 0.7rem"
            >
              Save
            </button>
          </div>
        </div>

        <ul>
          <li :key="item.message" v-for="(item, idx) in sectiune.list">
            {{ item.message }}
            <button
              class="puncte-lista"
              @click="
                deleted(item.message);
                sectiune.list.splice(idx, 1);
              "
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div> -->

    <div>
      <div v-html="value" style="margin:30px"/>

      <!-- <div style="margin:30px">
          {{JSON.stringify(value)}}
      </div> -->

      <div>
        <Editor
        class="editor"
        v-model="value"
        editorStyle="height: 320px"
        style="margin-top: 0px"
      >
      </Editor>
      </div>
      <div style="margin-top:10px">
        <button @click="saveMessageFromEditor(value)">
          Save Text from Editor
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Home.js"/>

<style scoped lang="css" src="./Home.css"/>