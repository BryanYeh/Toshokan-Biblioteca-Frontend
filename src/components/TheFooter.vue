<template>
    <footer class="bg-yellow-600 mt-4">
        <div class="max-w-7xl mx-auto">
            <p class="pt-4">&copy; Toshokan Biblioteca {{ currentYear }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {
        const currentYear = new Date().getFullYear()

        return {
            currentYear
        }
    }
}
</script>