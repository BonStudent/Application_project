<template>
  <div class="container max-w-8xl">
  <!-- Header -->
    <div>
      <qwe />
    </div>

    <!-- Text -->
    <div class="text">
      <p class="text1">Financial or Technical Assistance Agreement</p>
      <h2 class="text2">
        SUMMARY
      </h2>
    </div> 

   <!-- Charts for summary  -->
      <div class="chart" >
        <Pie class="pie"/>
        <BarChart class="bar"/>
      </div> 

    <!-- Table list -->
      <div class="table">
        <Tableview />
      </div>
  </div>
</template> 

<script setup>
import qwe from '../components/header.vue';
import Pie from '../components/charts/Pie.vue'
import BarChart from '../components/charts/bar.vue'
import Tableview from '../components/table.vue'
import axios from 'axios';

import {ref , onMounted } from 'vue'

const user =ref();
onMounted(async() => {
  const data = await axios.get('http://127.0.0.1:8000/get_accounts/')
  user.value = data;
})
</script>

<style scoped>
  .text{
    display: flex;
    flex-direction: column; 
    height: 50px; 
    margin-top: 5%;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    align-items: center ;
    font-size:20px;
  }
  .text1{
    align-items: center ;
    margin-bottom: 30px;
    font-weight: 700;
  }
  .text2{
    font-weight: 00;
  }
  .chart{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    margin-top: 13%;
    margin-left: 10%;
  }
  .pie{
    width: 20%;
  }
  .bar{
    margin-left: 90px;
  }
  .table{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    margin-top: 35%;
  }
</style>