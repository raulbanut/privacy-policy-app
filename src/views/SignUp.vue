<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="signUp">Sign up</button>
    <p>or go back to <router-link to="/login">login</router-link></p>
  </div>
</template>

<script lang="js" src="././JS/SignUp.js"/>

<style scoped lang="css" src="././CSS/SignUp.css"/>
