<template>
    <main class="p-5">
        <section id="blogs">
            <div class="container mx-auto">
                <RouterLink to="/" class="btn mb-3">Back</RouterLink>
                <div v-if="blog" class="card shadow">
                    <div class="card-body">
                        <h2 class="text-xl">{{ blog.title }}</h2>
                        <p>{{ blog.body }}</p>
                    </div>
                </div>
                <div v-else>
                    <p>You're offline. The blog post data is unavailable.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const store = useBlogStore()
const { blog } = storeToRefs(store)
const { getBlog } = store

const props = defineProps({
    id: String
})

onMounted(() => {
    getBlog(props.id)
})
</script>

<style lang="scss" scoped></style>