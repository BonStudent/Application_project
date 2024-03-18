<template>
  <div style="display: flex; flex-direction: column;;">
  <div style="display: flex; flex-direction: row;margin-bottom: 5%;">
        <div>
        <h1>Province1</h1>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData1"
        />
      </div>

        <div>
        <h1>Province2</h1>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData2"
        />
      </div>

        <div>
        <h1>Province3</h1>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData3"
        />
      </div>


        <div>
        <h1>Province4</h1>
        <Bar
          id="my-chart-id"
          :options="chartOptions"
          :data="chartData4"
        />
        </div>
  </div>

        <div style="display: flex; flex-direction: row; ">
          <div >
          <h1>Province5</h1>
          <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData5"
          />
        </div>

          <div>
          <h1>Province6</h1>
          <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData6"
          />
        </div>


          <div>
          <h1>Province7</h1>
          <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData7"
          />
          </div>
        </div>
      </div>
</template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'bar',
    components: { Bar },
    data() {
      return {
        chartData1: {
          labels: [ 'District 1', 'District 2', 'District 3','District 4' ],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16',],
                      data: [40, 20, 70, 10]
                  } 
                ]
        },
        chartData2: {
          labels: [ 'District 1', 'District 2'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883', '#E46651'],
                      data: [40, 20, ]
                  } 
                ]
        },
        chartData3: {
          labels: [ 'District 1'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883'],
                      data: [40 ]
                  } 
                ]
        },
        chartData4: {
          labels: [ 'District 1'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883'],
                      data: [40]
                  } 
                ]
        },
        chartData5: {
          labels: [ 'District 1'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883'],
                      data: [40 ]
                  } 
                ]
        },
        chartData6: {
          labels: [ 'District 1'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883'],
                      data: [40 ]
                  } 
                ]
        },
        chartData7: {
          labels: [ 'District 1'],
          datasets: [ 
                  {
                      backgroundColor: ['#41B883'],
                      data: [40 ]
                  } 
                ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>