    <template>
        <div  class="panel">
            <div class="flex justify-center items-center h-screen">
                <taas />
            </div> 
            <div class="panel1">
                <img :src="mgb" class="img123"  />
                <div class="login" >
                    <div style="margin-left: 40px;margin-top: 30px;margin-bottom: 20px;">
                        <h1 style="font-weight: 700; font-size: 25px;" >Welcome Back!</h1>
                        <p style="font-size: 15px;">Login to access the MGB-X </p>
                        <p style="font-size: 15px;">MTTS System:</p>
                    </div>
                    <form @submit.prevent="handleLogin">
                        <div class="inputfield">
                            <input v-model="form.username" id="username" name="username" type="username" autocomplete="username" placeholder="   Username" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                            <input v-model="form.password"id="password" name="password" type="password" autocomplete="password" placeholder="   Password" class="drop-shadow-lg py-2 mx-10 mb-4 w-70 rounded-md" />
                        </div>
                    </form>
                    <div class="third">
                        <button class="buttonlogin" @click="handleLogin">Login</button>
                        <p style="color: blue; text-decoration: underline; cursor: pointer; margin-top: 10px;" >Forgot Password?</p>
                        <p style="color:black; cursor: pointer;" @click="redirectToUrl" >Don't have an account yet?</p>
                    </div>
                </div>
            </div>
        </div>
       
    </template>

<script setup>
    import taas from './header.vue'
    import mgb from '../assets/mgb.png'
    import { ref } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';


    const router = useRouter();
    const form = ref({
        username: '',
        password: ''
    });

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/get_accounts/', {
                username: form.value.username,
                password: form.value.password
            });

            // If the request is successful, you can handle the response here
            console.log(response.data); // Log the response data
            
            // Optionally, redirect to another page after successful login
            router.push("/dashboard");
        } catch (error) {
            // If there's an error, you can handle it here
            console.error('Error:', error);
        }
    }
</script>
    
    <style scoped>
        .panel{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .panel1{
            height: 400px;
            width: 600px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
        }
        .inputfield{
            display: flex;
            flex-direction: column;
        }
        .login{
            width: 500px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background-color: #fcf1ed;
            margin-left: -70px;
            height: 100%;
            
        }
        .img123{
            height: 400px;
            width: 300px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            
        }
        .third{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right: 45px;
        }
        .buttonlogin{
            background-color: #c2410c;
            color: white;
            padding-left: 50px;
            padding-right: 50px;
            padding-bottom: 10px;
            padding-top: 10px;
            border-radius: 20px;
            margin-top: 20px;
           
        }
    </style>