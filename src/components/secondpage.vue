<template>
    <div class="new-app-content">
      <h1>New Applications</h1>
      <div class="button-container">
        <button @click="navigateToDashboard()" class="button">
          Financial or Technical Assistance Agreement
        </button>
        <button @click="navigateToDashboard()" class="button">
          Mineral Production Sharing Agreement
        </button>
        <button @click="navigateToDashboard()" class="button">
          Exploration Permit
        </button>
        <button @click="navigateToDashboard()" class="button">
          Mineral Processing Permit
        </button>
        <button @click="navigateToDashboard()" class="button">
          Industrial Sand and Gravel Permit
        </button>
        <button @click="navigateToDashboard()" class="button">
          Ore Transport Permit
        </button>
        <button @click="navigateToDashboard()" class="button">
          Declaration of Minahang Bayan
        </button>
        <button @click="navigateToDashboard()" class="button">
          Small-Scale Mining Contract
        </button>
        <button @click="navigateToDashboard()" class="button">
          Mineral Processor’s License
        </button>
        <button @click="navigateToDashboard()" class="button">
          Accreditation as Mineral Trader, Retailer, and Dealer
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import dashboard from '../components/dashboard.vue'
    
  export default {
    
    methods: {
        navigateToDashboard() {
       // Use router.push to navigate to '/newappcontent'
       window.location.href = '/dashboard';
      }
    }
  };
  </script>
  
  <style scoped>
  .new-app-content {
    text-align: center;
  }
  
  .new-app-content h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .button-container {
    display: flex;
    flex-direction: column; /* Align buttons vertically */
    align-items: center; /* Align buttons horizontally */
  }
  
  .button {
    padding: 20px;
    margin: 0.5rem;
    width: 300px; /* Fixed width for all buttons */
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #2a7a5f;
  }
  </style>