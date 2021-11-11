<template>
  <div class="home">
    <img alt="Accesa logo" src="../../assets/logo.png" />
    <p></p>
    <button @click="logout">Logout</button>
    <div class="section-header">Privacy Notice</div>

    <div class="section">
      <div class="section-title">{{ sectiune.title }}</div>
      <div class="section-content">
        <button @click="stateAdd = !stateAdd" style="margin-right:0.3rem">Add items to the list</button>
        <button @click="stateParagraph = !stateParagraph">Edit</button>

        <p>{{ sectiune.paragraph }}</p>

        <div v-if="stateAdd">
          <div>
            <input type="text" placeholder="Mesaj" v-model="obiect.message" />
            <button
              @click="saveData();"
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
    </div>
    <!-- <div class="privacy-subsection">Who we are</div>
    <div class="section-content">
      <p>
        ACCESA IT Systems SRL, Accesa IT Consulting and Ratiodata Romania SRL
        (referred to as “we”, “us”) are Romanian companies managing software
        projects, including development, implementation and support.
      </p>
    </div> -->

    <Dialog>hello</Dialog>

    <!-- <div class="privacy-subsection">What personal data we process</div> -->
    <div class="section-content">
      <div v-if="stateParagraph">
        <textarea
          name=""
          id=""
          rows="5"
          v-model="messageFromTextArea"
        ></textarea>
        <button @click="updateParagraph(messageFromTextArea)">Update</button>
      </div>

      <!-- getTextFromTextArea(messageFromTextArea); -->

      <!-- <p>
        We are personal data controllers. We collect the following types of
        personal data from you:
      </p> -->

      <!-- <p>
        {{sectionContent[0]}}
      </p> -->

      <!-- <button @click="test">Test</button> -->

      <!-- <div v-if="stateAdd">
        <div>
          <input type="text" placeholder="Mesaj" v-model="obiect.message" />
          <button
            @click="addNewItemsToList(`${numar}`)"
            style="margin: auto; margin-left: 0.7rem"
          >
            Save
          </button>
        </div>
      </div> -->

      <!-- <ul>
        <li :key="item" v-for="(item, idx) in testCollection">
          {{ item }}
          <button
            class="puncte-lista"
            v-on:click="
              deleted(item);
              testCollection.splice(idx, 1);
            "
          >
            Delete
          </button>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script lang="js" src="./Home.js"/>

<style scoped lang="css" src="./Home.css"/>