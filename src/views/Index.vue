<template>
    <main class="p-5">
        <section id="blogs">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div v-for="blog in blogs" :key="blog.id"
                        class="p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                                blog.title }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ blog.body }}</p>
                        <div class="flex justify-end gap-x-1">
                            <RouterLink :to="{ name: 'blog', params: { id: blog.id } }"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full sm:rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </RouterLink>
                            <button type="button" @click="deleteBlog(blog.id)"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-full sm:rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const store = useBlogStore()
const { blogs } = storeToRefs(store)
const { deleteBlog } = store
</script>

<style lang="scss" scoped></style>