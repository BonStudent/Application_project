<template>
    <div id="app" class="container">
      <h1 class="title"></h1>
      <div class="button-container">
        <button class="button" @click="navigateToSecondPage">NEW APPLICATIONS</button>
      </div>
      <div class="button-container">
        <button class="button">PERMIT</button>
      </div>
    </div>
  </template>
  
  <script>
  import secondpage from '../components/secondpage.vue'
  
  export default {
    methods: {
      navigateToSecondPage() {
        // Use router.push to navigate to '/newappcontent'
        window.location.href = '/secondpage';
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center vertically */
    min-height: 100vh; /* Set minimum height to full viewport height */
    padding: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem; /* Added margin-bottom */
  }
  
  .button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    color: white;
    cursor: pointer;
  }
  </style>