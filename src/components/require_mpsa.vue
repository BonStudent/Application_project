<template>
  <div style="height: auto;">
  <div class="requirements">
    <h2>MANDATORY REQUIREMENTS</h2>

    <!-- Table 1 -->
    <table class="table1">
      
      <thead>
        <tr>
          <th>Requirement</th>
          <th>Upload</th>
          <th>Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in table1Data" :key="index">
          <td>Requirement {{ index + 1 }}</td>
          <td>
            <input type="file" @change="fileSelected(index)">
          </td>
          <td>
            <label>Remarks:</label><br>
            <textarea v-model="row.remarks" rows="3" style="color: black;" wrap="off"></textarea>
            <br>
            <label>Recommendation:</label><br>
            <textarea v-model="row.recommendation" rows="3" style="color: red;"></textarea> <!-- Adjust color as needed -->
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Table 2 -->
    <table class="table2">
      <caption>Summary of Lacking Requirements</caption>
      <tbody>
        <tr v-for="(row, index) in table2Data" :key="index">
          <td>
            <strong>{{ row.requirement }}</strong><br>
            <label>Status:</label><br>
           
          </td>
          <td>
            <label>Remarks:</label><br>
            <textarea v-model="row.remarks" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            <label>Based on the Status of MTSR:</label><br>
            <textarea v-model="row.mtsrRecommendations" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
          </td>
          <td>{{ row.recommendations }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Requirements',
  data() {
    return {
      table1Data: [
        { remarks: '', recommendation: '' },
        { remarks: '', recommendation: '' },
        { remarks: '', recommendation: '' },
      ],
      remarksOptions: [
        { label: 'Select Remarks', value: '' },
        { label: 'Remark 1', value: 'Recommendation 1' },
        { label: 'Remark 2', value: 'Recommendation 2' },
      ],
      table2Data: [
        { requirement: '1. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
        { requirement: '2. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
        { requirement: '3. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
      ]
    };
  },
  methods: {
    fileSelected(index) {
      // Logic to handle file upload
      console.log('File selected for row', index + 1);
    },
    updateRemark(index, value) {
      this.table2Data[index].selectedRemark = value;
    }
  }
};
</script>

<style scoped>
.requirements {
  margin-top: 20px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  text-align: left;
}

th, td {
  border: 1px solid #dddddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

caption {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  caption-side: top;
}

textarea {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>
