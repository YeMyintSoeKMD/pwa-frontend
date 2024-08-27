<template>
    <nav class="navbar bg-indigo-700 text-primary-content fixed top-0 left-0 z-20">
        <div class="container mx-auto px-5 flex justify-between">
            <div class="flex items-center gap-x-3">
                <RouterLink to="/" class="text-xl">PWA</RouterLink>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <button class="p-2 bg-white rounded-full" onclick="blogStoreModal.showModal()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <!-- modal box  -->
        <dialog id="blogStoreModal" class="modal modal-top sm:modal-middle text-gray-900">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Add new blogs</h3>
                <form action="" class="my-5">
                    <div class="mb-3">
                        <input type="text" v-model="form.title" placeholder="Title"
                            class="input input-bordered w-full rounded-3xl sm:rounded-xl">
                    </div>
                    <div class="mb-3">
                        <textarea v-model="form.body"
                            class="textarea textarea-bordered w-full rounded-3xl sm:rounded-xl"
                            placeholder="Body"></textarea>
                    </div>
                    <div class="mb-3">
                        <button @click="storeBlog($event, form)"
                            class="btn btn-primary w-full rounded-3xl sm:rounded-xl">Add
                            New</button>
                    </div>
                </form>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </nav>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';
import { storeToRefs } from 'pinia'
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const store = useBlogStore()
const { form } = storeToRefs(store)
const { storeBlog } = store

</script>

<style lang="scss" scoped></style>