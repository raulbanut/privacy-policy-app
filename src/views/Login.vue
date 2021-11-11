<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="login">Login</button>
    <p>
      or Sign In with Google<br />
      <button @click="socialLogin" class="social-button">
        <img src="../assets/google-logo.png" alt="Google Logo" />
      </button>
    </p>
    <p>
      You don't have an account? You can
      <router-link to="/sign-up"> create one</router-link>
    </p>
  </div>
</template>

<script lang="js" src="././JS/Login.js"/>

<style scoped lang="css" src="././CSS/Login.css"/>