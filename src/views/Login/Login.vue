<template>
  <div class="login">
    <h1>Sign in</h1>

    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    
    <button class="btn-login" @click="login">Login</button>

    <p class="p-login">
      or Sign In with Google<br />
      <button @click="socialLogin" class="social-button">
        <img src="../../assets/google-logo.png" alt="Google Logo" />
      </button>
    </p>
  </div>
</template>

<script lang="js" src="../../views/Login/Login.js"/>

<style scoped lang="css" src="../../views/Login/Login.css"/>