<template>
  <div class="new-app-content">
    <h1></h1>
    <div class="button-container" :style="{ display: 'flex', flexDirection: buttonContainerFlexDirection }">
      <button
        v-for="button in buttons"
        :key="button.id"
        @click="openModal(button.label)"
        class="button"
        v-if="!isModalOpen"
      >
        {{ button.label }}  
      </button>
    </div>
    <!-- Modal -->
    <div></div>
    <div class="modal" v-if="isModalOpen">
      <applica> </applica>
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="typeofapp">
          <h1>{{ selectedButtonLabel }}</h1>
          <div class="header-and-table">
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
                  <th></th> <!-- Placeholder for button cell -->
                </tr>
              </thead>
              <tbody>
                <!-- Add table rows and data here -->
              </tbody>
            </table>
          </div>
        </div>
        <!-- Add Application Button -->
        <button class="add-application-button" @click="addApplication">Add Application</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import applica from './application.vue';
</script>
<script>
export default {
  name: 'newAppContent',
  data() {
    return {
      buttons: [
        { id: 1, label: 'Financial or Technical Assistance Agreement' },
        { id: 2, label: 'Mineral Production Sharing Agreement' },
        { id: 3, label: 'Exploration Permit' },
        { id: 4, label: 'Mineral Processing Permit' },
        { id: 5, label: 'Industrial Sand and Gravel Permit' },
        { id: 6, label: 'Ore Transport Permit' },
        { id: 7, label: 'Declaration of Minahang Bayan' },
        { id: 8, label: 'Small-Scale Mining Contract' },
        { id: 9, label: 'Mineral Processor’s License' } // Fixed quotation mark
      ],
      isModalOpen: false,
      selectedButtonLabel: ''
    };
  },
  methods: {
    openModal(buttonLabel) {
      this.selectedButtonLabel = buttonLabel;
      this.isModalOpen = true; // Set isModalOpen to true to show the modal
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addApplication() {
      // Add application logic here
      console.log('Add Application button clicked');
    }
  },
  computed: {
    buttonContainerFlexDirection() {
      return this.isModalOpen ? 'row' : 'column';
    },
  },
};
</script>

<style>
.new-app-content {
  text-align: center;
}

.new-app-content h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.button-container {
  display: flex;
  align-items: center; /* Center buttons horizontally */
  justify-content: center;
}

.button {
  padding: 0.5rem 1rem;
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

.button:focus {
  background-color: #0a3829;
}

/* Modal styles */
.modal {
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

/* Modal content */
.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  position: relative; /* Position relative for absolute positioning */
}

/* Close button */
.close {
  color: #aaa;
  position: absolute; /* Position close button absolutely */
  top: 10px;
  right: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Table styles */
.typeofapp {
  text-align: center;
}

.typeofapp h1 {
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

.add-application-button {
  position: absolute; /* Position button absolutely */
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-application-button:hover {
  background-color: #2a7a5f;
}

.add-application-button:focus {
  background-color: #0a3829;
}
</style>
