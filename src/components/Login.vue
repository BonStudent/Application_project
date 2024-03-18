    <template>
        <div class="flex justify-center items-center h-screen">
        <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl md:max-w-3xl ">
         <div class="p-20">
        <div class="flex ml-5 py-10 px-10">
            <!-- <div class="uppercase tracking-wide text-4xl text-lime-600 font-semibold">LOGIN</div>
            <a class="block mt-4 text-lg leading-tight font-medium text-lime-900">Email</a>
            <input type="email" placeholder="Email" class="bg-white rounded shadow-md p-2 mt-4 pr-20" >
            <a class="block mt-4 text-lg leading-tight font-medium text-lime-900">Password</a>
            <input type="password" placeholder="Password" class="bg-white rounded shadow-md p-2 mt-4 pr-20" >
            <button class="text-lime-100 mt-6 bg-lime-800 rounded shadow-md py-3 px-10 ">LOGIN</button> -->
            <div class="p-20 flex flex-col content-center">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block mt-4 text-lg leading-tight font-medium text-lime-900">Email address</label>
                    <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" placeholder="Email address" class="bg-white rounded shadow-md p-2 mt-4 pr-20">
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password" class="block mt-4 text-lg leading-tight font-medium text-lime-900 py-2 px-2">Password</label>
                    <div class="text-sm">
                        <a href="#" class="block mt-4 text-sm leading-tight font-medium text-lime-400">Forgot password?</a>
                    </div>
                    </div>
                    <div class="mt-2">
                    <input id="password" name="password" type="password" placeholder="Password" class="bg-white rounded shadow-md p-2 mt-4 pr-20 shadow hover:border-lime-300">
                    </div>
                </div>
                <div>
                    <button type="submit" class=" flex w-full justify-center rounded-md text-lime-100 bg-lime-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
                </div>
             </form>
            </div>
        </div>
        </div>
    </div>
</div>
    </template>
    
    <script>
     import { computed, ref } from "vue";

        const email = ref("");
        const hidePassword = ref(true);
        const password = ref("");

        const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye" : "fa-eye-slash");
        const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");
    </script>
    
    <style scoped>
    
    </style>