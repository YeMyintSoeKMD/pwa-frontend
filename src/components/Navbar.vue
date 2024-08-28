<template>
    <main>
        <!-- drawer component -->
        <div id="blog-creation-drawer"
            class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-5/6 md:w-2/5 dark:bg-gray-800"
            tabindex="-1" aria-labelledby="drawer-right-label">
            <h5 id="drawer-right-label"
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Add New
                Posts
            </h5>
            <button type="button" data-drawer-hide="blog-creation-drawer" aria-controls="blog-creation-drawer"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="my-3">
                <form @submit.prevent="storeBlog(form)">
                    <div class="mb-3">
                        <label for="title"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" v-model="form.title" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-3">
                        <label for="body"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                        <textarea v-model="form.body" id="body" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required></textarea>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Submit</button>
                </form>
            </div>
        </div>
        <!-- Navigation -->
        <nav
            class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
                <!-- Left - logo  -->
                <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PWA</span>
                </RouterLink>
                <!-- Right - Icons -->
                <div class="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
                    <template v-if="isNotificationAllowed">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </template>
                    <template v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" @click="requestPermission" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"
                            ref="notiBtnRef" role="button">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
                        </svg>
                    </template>
                    <button type="button" data-drawer-target="blog-creation-drawer"
                        data-drawer-show="blog-creation-drawer" data-drawer-placement="right"
                        aria-controls="blog-creation-drawer"
                        class="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <!-- Center - Menu  -->
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <RouterLink to="/"
                                class="block py-2 px-3 text-gray-900 hover:text-blue-500 rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                                aria-current="page">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about"
                                class="bblock py-2 px-3 text-gray-900 hover:text-blue-500 rounded md:bg-transparent md:p-0 md:dark:text-blue-500">
                                About</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';
import axios from 'axios';
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const store = useBlogStore()
const { form } = storeToRefs(store)
const { storeBlog } = store


// Notification
const isNotificationAllowed = ref(false)
const notiBtnRef = ref(null)

const randomNotification = () => {
    const notifTitle = 'Just Test';
    const notifBody = 'Created by Ye Myint Soe';
    const notifImg = '/src/assets/icons/icon-144x144.png';
    const options = {
        body: notifBody,
        icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}

const requestPermission = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            isNotificationAllowed.value = true;
            // randomNotification();
            // get service worker
            navigator.serviceWorker.ready.then(sw => {
                // subscribe 
                sw.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: "BCKU6syjcBdoV3EO3w-k8nior__YBYCTtBPDeD5oqGTwG5D6WVCOdGk2TCOaMQhcJK6-9MvNSAqlb_97CWXshmU"
                }).then(subscription => {
                    // subscription successful
                    axios.post('/push-subscribe', subscription)
                        .then(res => {
                            console.log(res)
                            alert('You will get some notification from us :)')
                        })
                })
            })
        }
    });
}
onMounted(() => { })

</script>

<style lang="scss" scoped></style>