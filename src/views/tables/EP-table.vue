<template>
    <div class="tablemain">
      <div class="flex lg:justify-end mb-5 ">
        <button class="button1" @click="navigateTomodal">Add Application</button>
      </div>
      <div class="scrollable-table">
        <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl">
          <thead>
            <tr style="background-color: #e6cfaf;">
              <th>Application No.</th>
              <th>Status</th>
              <th>Tenement Name</th>
              <th>Area (Hectares)</th>
              <th>Date Filed</th>
              <th>Barangay</th>
              <th>City</th>
              <th>Province</th>
              <th>Commodity</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            <tr v-for="(detail, index) in details" :key="index">
              <td>{{ detail.id }}</td>
              <td>{{ detail.status }}</td>
              <td>{{ detail.tenement_name }}</td>
              <td>{{ detail.area_hectares }}</td>
              <td>{{ detail.date_filed }}</td>
              <td>{{ detail.barangay }}</td>
              <td>{{ detail.city }}</td>
              <td>{{ detail.province }}</td>
              <td>{{ detail.commodity }}</td>
              <!-- <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td> -->
              <td>
                <button class="text-red-500" @click="navigateTomodalView()">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { addDetail1, detailToggle1, viewDetail1, detail_id1 } from '../dashboards/EP-dasboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
      return {
        details: [],
        addDetail1: false,
        viewDetail1:false,
        detail_id1: null
      };
    },
    mounted() {
      this.fetchDetails();
    },
    methods: {
      async fetchDetails() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/get_details/');
          this.details = response.data;
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      },
      navigateTomodal() {
        addDetail1.value = true// Define your navigation logic here
      },
      navigateTomodalView(id) {
        detail_id1.value = id
        viewDetail1.value = true// Define your navigation logic here
      },
    }
  };
  
  
  </script>
  
  <style>
  .button1 {
    text-align: center;
    padding: 10px;
    margin: 1rem;
    width: 250px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #eacda3;
    color: rgb(44, 44, 44);
    cursor: pointer;
  }

  .button1:hover{
    background-color: bisque;
  }
  
  .tablemain {
    flex: auto;
    flex-direction: column;
    margin-left: 20px;
    border-collapse: collapse;
    width: 100%;
  }
  
  .table {
    width: 100%;
    margin: auto;
  }
  
  .scrollable-table {
    max-height: 500px;
    /* Set the maximum height here */
    overflow-y: auto;
    /* Add vertical scrollbar if needed */
    margin: 15px;
  }
  
  th,
  td {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>