<template>
    <div class="application-form">
      <h2>Application Form</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="applicant-name">Name of Applicant:</label>
          <input type="text" id="applicant-name" v-model="applicantName" required>
        </div>
        <div class="form-group">
          <label for="application-number">Application Number:</label>
          <input type="text" id="application-number" v-model="applicationNumber" required>
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="location" required>
        </div>
        <div class="form-group">
          <label for="commodity">Commodity:</label>
          <input type="text" id="commodity" v-model="commodity" required>
        </div>
        <div class="form-group">
          <label for="area">Area:</label>
          <input type="text" id="area" v-model="area" required>
        </div>
        <div class="form-group">
          <label for="date-filed">Date Filed:</label>
          <input type="date" id="date-filed" v-model="dateFiled" required>
        </div>
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" v-model="category" required>
            <option value="">Select Category</option>
            <option value="Individual">Individual</option>
            <option value="Corporation">Corporation</option>
            <option value="Cooperative">Cooperative</option>
            <!-- Add more options as needed -->
          </select>
        </div>
        <div class="form-group">
          <label for="authorized-representative">Authorized Representative:</label>
          <input type="text" id="authorized-representative" v-model="authorizedRepresentative" required>
        </div>
        <div class="form-group">
          <label for="contact-number">Contact Number:</label>
          <input type="text" id="contact-number" v-model="contactNumber" required>
        </div>
        <div class="form-group">
          <label for="email-address">Email Address:</label>
          <input type="email" id="email-address" v-model="emailAddress" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ApplicationForm',
    data() {
      return {
        applicantName: '',
        applicationNumber: '',
        location: '',
        commodity: '',
        area: '',
        dateFiled: '',
        category: '',
        authorizedRepresentative: '',
        contactNumber: '',
        emailAddress: ''
      };
    },
    methods: {
      submitForm() {
        // Submit form logic here
        console.log('Form submitted');
        console.log('Applicant Name:', this.applicantName);
        console.log('Application Number:', this.applicationNumber);
        console.log('Location:', this.location);
        console.log('Commodity:', this.commodity);
        console.log('Area:', this.area);
        console.log('Date Filed:', this.dateFiled);
        console.log('Category:', this.category);
        console.log('Authorized Representative:', this.authorizedRepresentative);
        console.log('Contact Number:', this.contactNumber);
        console.log('Email Address:', this.emailAddress);
        // You can add further logic here to submit the form data to your backend
      }
    }
  };
  </script>
  