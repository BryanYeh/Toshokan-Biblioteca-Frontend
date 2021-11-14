<template>
    <div class="max-w-7xl mx-auto mt-4">
        <h3 class="font-bold text-xl text-center" v-if="title">{{ title }}</h3>
        <p class="text-lg text-center mb-4" v-if="titleSub">{{ titleSub }}</p>
        <hr v-if="title || titleSub" />
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 mt-4">
            <div v-for="book in books" :key="book.id">
                <CardBook
                    :link="book.slug"
                    :image="book.image"
                    :alt-text="book.title"
                    :title="book.title"
                    :year="book.publication_date"
                    :author="book.author"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Books } from '@/api/books'
import CardBook from '@/components/CardBook.vue'

export default {
    components: {
        CardBook
    },
    async setup() {
        const title = 'Some of our random reads'
        const titleSub = 'Toshokan Bilblioteca\'s randomly picked books to fill your read'
        const books = await Books.random(6).then(response => {
            return response.data
        }).catch((e) => {
            // do soemthing with error
        })

        return {
            title,
            titleSub,
            books
        }
    }
}
</script>