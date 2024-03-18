<template>
   <div class="tablemain">
   <div class="flex lg:justify-end mb-5">
        <button class="button1" @click="navigateToSecondPage">Add Application</button>
    </div> 
     <div>
      <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl">
        <thead>
          <tr>
            <th>Status</th>
            <th>Tenement Number</th>
            <th>Tenement Name</th>
            <th>Area (Hectares)</th>
            <th>Date Filed</th>
            <th>Barangay</th>
            <th>City</th>
            <th>Province</th>
            <th>Commodity</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add table rows and data here -->
        </tbody>
      </table>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'typeofapp',
    props: ['buttonLabel'] // Define buttonLabel as a prop
  };
  </script>
  
  <style>
  .button1 {
    text-align: center;
    padding: 20px;
    margin: 0.5rem;
    width: 300px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    color: white;
    cursor: pointer; 
    }
  
  .tablemain{
    flex: auto;
    flex-direction: column;
    margin-left: 70px;
  }
  
  .table {
    width: 150%;
    margin-left: 50%;
    margin-top: 10px;
  }
  
  th, td {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
  }
  </style>