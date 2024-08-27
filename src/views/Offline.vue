<template>
    <main class="p-5">
        <section>
            <div class="container mx-auto">
                <p class="mb-3">Sorry, you cannot access this offline! </p>
                <RouterLink to="/" class="btn btn-accent">Go to Home Page</RouterLink>
            </div>
        </section>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>