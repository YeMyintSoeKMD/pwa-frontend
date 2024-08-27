<template>
    <main class="p-5">
        <section id="blogs">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div v-for="blog in blogs" :key="blog.id" class="card bg-base-100 border">
                        <div class="card-body">
                            <h2 class="card-title">{{ blog.title }}</h2>
                            <p>{{ blog.body }}</p>
                            <div class="card-actions justify-end">
                                <button type="button" @click="deleteBlog(blog.id)" class="btn btn-error btn-sm">Delete
                                </button>
                                <RouterLink :to="{ name: 'blog', params: { id: blog.id } }" class="btn btn-info btn-sm">
                                    See More
                                </RouterLink>
                            </div>
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

const blogs2 = ref([
    {
        id: 1,
        title: "1",
        body: "1 sdfsd",
    },
    {
        id: 2,
        title: "2",
        body: "2 sdfsd",
    }
])

const store = useBlogStore()
const { blogs } = storeToRefs(store)
const { deleteBlog } = store
</script>

<style lang="scss" scoped></style>