<template>
  <div class="typeofapp">
    <h1>{{ buttonLabel }}</h1>
    <table>
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
        </tr>
      </thead>
      <tbody>
        <!-- Add table rows and data here -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'typeofapp',
  props: ['buttonLabel'] // Define buttonLabel as a prop
};
</script>

<style>
/* Your existing styles */
.table-view {
  text-align: center;
}

.table-view h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
