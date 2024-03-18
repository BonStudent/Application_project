<template>
    <div class="flex justify-center items-center h-screen">
    <div class="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl md:max-w-3xl ">
     <div class="p-20">
    <div class="flex ml-5 py-10 px-10">
        <div class="p-20 flex flex-col content-center">
        <div class="uppercase tracking-wide text-4xl text-lime-600 font-semibold">SignUp</div>
        <div>
            <label for="username" class="block mt-4 text-lg leading-tight font-medium text-lime-900">Username</label>
                <div >
                <input id="username" name="username" type="text" autocomplete="username" placeholder="Username" class="bg-white rounded shadow-md p-2 mt-4 pr-20">
                </div>
        </div>
        <div>
            <label for="email" class="block mt-4 text-lg leading-tight font-medium text-lime-900">Email address</label>
                <div >
                   <input id="email" name="email" type="email" autocomplete="email" placeholder="Email address" class="bg-white rounded shadow-md p-2 mt-4 pr-20">
                </div>
         </div>
        <div>
            <div class="flex items-center justify-between">
             <label for="password" class="block mt-3 text-lg leading-tight font-medium text-lime-900 py-2 px-2">Password</label>
            </div>
            <div>
                <input id="password" name="password" type="password" placeholder="Password" class="bg-white rounded shadow-md p-2 mt-4 pr-20 shadow hover:border-lime-300 ">
            </div>
         </div>
         <div>
            <div class="flex items-center justify-between">
             <label for="password" class="block mt-3 text-lg leading-tight font-medium text-lime-900 py-2 px-2">Confirm Password</label>
            </div>
            <div>
                <input id="password" name="password" type="password" placeholder="Confirm Password" class="bg-white rounded shadow-md p-2 mt-4 pr-20 shadow hover:border-lime-300 ">
            </div>
         </div>
        <div class="mt-6"> 
            <button type="submit" class="flex w-full justify-center rounded-md text-lime-100 bg-lime-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<script>

</script>

<style scoped>

</style>