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
      <div id="chart" class="chart" >
        <Pie class="chart1"/>
        <BarChart class="chart2"/>
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
    margin-bottom: 10%;
    margin-left: 5%;
  }
  .chart1{
    width: 30%;
  }
  .chart2{
    margin-left: 90px;
  }
</style>