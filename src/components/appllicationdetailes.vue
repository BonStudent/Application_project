<template>
    <div style="display: flex; height: 100vh;">
   <div class=zeroappdetails >
    <div class="appdetails">
        <div style="display: flex; justify-content: flex-end;" >
            <button style="border: 1px solid black; color: white; width: 45px; border-radius: 5px; background-color: red; position: absolute;" @click="Exit">
                X
            </button>
        </div>
        <div class="appdetails1">
            <p>Application Details</p>
        </div>
        <div class="appdetails2">
            <div class="appdetails3">
                <label>Application Number</label>
                <input class="inputall"/>

                <label>Name of Application</label>
                <input class="inputall"/>

                <label>Area(Hectares)</label>
                <input class="inputall"/>

                <label>Date Filed</label>
                <input class="inputall" v-model="date" readonly/>

                <label>Barangay</label>
                <input class="inputall"/>

                <label>City</label>
                <input class="inputall"/>

                <label>Province</label>
                <input class="inputall"/>

                <label>Commodity</label>
                <input class="inputall"/>

            </div>
            
            <div class="appdetails4">
                <label>Category</label>
                <select class="inputall " v-model="selectedCategory">
                    <option value="individual">Individual</option>
                    <option value="corporation">Corporation</option>
                    <option value="cooperative">Cooperative</option>
                    <option value="other">Other</option>
                </select>

                <!-- Conditional input field for 'Other' category -->
                <input v-if="selectedCategory === 'other'" class="inputall cate" v-model="otherCategory" placeholder="Enter other category"/>

                <label>Authorized Representative</label>
                <input class="inputall"/>   

                <label>Contact Number</label>
                <input class="inputall" v-model="contactnum" @input="formatContactNum" maxlength="11" required/>
                
                <label>Email Address</label>
                <input class="inputall"/>

                <label>Others:</label>
                <input class="inputall"/>
              
            </div>
        </div>
        
        <div class="appdetailsbutton">
        <button class="butons">Next</button>
    </div>
    </div>
    
     
  </div>
</div>
</template>

<script setup>

</script>

<script>
import { addDetail } from './dashboard.vue';

export default{
    data() {
      return {
        
        details: [],
        contactnum: '',
        selectedCategory: 'individual',
        otherCategory: '',
        date: this.getCurrentDate(),
        addDetail: true
      };
    },
    watch: {
    selectedCategory(newValue) {
      if (newValue !== 'other') {
        this.otherCategory = '';
      }
    }
  },
    methods: {
        Exit() {
            addDetail.value = false
        },
        getCurrentDate() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; // January is 0!
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      return `${yyyy}-${mm}-${dd}`;
    },
    

    formatContactNum() {
      // Remove non-numeric characters
      this.contactnum = this.contactnum.replace(/\D/g, '');

      // Ensure the input starts with "09"
      if (!/^09/.test(this.contactnum)) {
        this.contactnum = '09';
      }

      // Limit the input to 11 characters
      this.contactnum = this.contactnum.slice(0, 11);
    }

    }
}


</script>

<style>
.zeroappdetails{
    display: flex;
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100%;
    z-index: 999;
    align-items: center;
    justify-content: center;
}


.appdetails{

   background-color: white;
   border: 3px solid black;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    width: auto; /* Set a maximum width */
    height: auto; /* Let the height adjust based on content */
    padding: 20px;
}
.appdetails1{
    text-align: center;
    /* background-color: yellow; */
    font-size: 30px;
    font-weight: bold;
}

.appdetails2{
    display: flex;
    flex-direction: row;
    text-align: center;
    /* background-color: green; */
    font-size: 20px;
    height: auto;
    margin-top: 10px;
    text-align: left;
    

}
.appdetails3{
    display: flex;
    /* background-color: blue; */
    width: 340px;
    flex-direction: column;
   font-weight: bold;
   margin-left: 10px;
}
.appdetails4{
    display: flex;
    /* background-color: orange; */
    width: 310px;
    flex-direction: column;
    font-weight: bold;
}
.appdetailsbutton{
    /* background-color: black; */
    /* color: white; */
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
.butons{
    /* border: 1px solid white; */
    padding: 5px;
    width: 60px;
    border-radius: 10px;
    background-color: #42b983;
    color: white;
    width: 300px;
    height: 50px;
    font-size: 23px;
}

.inputall{
    display: flex;
    width: 300px;
    height: 40px;
    background-color: gray;
    color: white;
    margin-left: 1px;
    padding-left: 4px;
    
}

.cate::placeholder
{
    color:rgb(252, 247, 247)
}

@media (max-width: 768px) {
.zeroappdetails{
    top:-3000px   
 }}
</style>