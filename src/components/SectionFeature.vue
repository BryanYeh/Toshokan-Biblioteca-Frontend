<template>
    <div class="max-w-7xl mx-auto mt-4">
        <h3 class="font-bold text-xl text-center" v-if="title">{{ title }}</h3>
        <p class="text-lg text-center mb-4" v-if="titleSub">{{ titleSub }}</p>
        <hr v-if="title || titleSub" />
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 mt-4">
            <div v-for="book in books" :key="book.id">
                <CardBook
                    :link="book.link"
                    :image="book.image"
                    :alt-text="book.alt"
                    :title="book.title"
                    :year="book.year"
                    :author="book.author"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CardBook from '@/components/CardBook.vue'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        titleSub: {
            type: String,
            default: ''
        },
        books: {
            type: Array,
            required: true
        }
    },
    components: {
        CardBook
    },
    setup(props) {
        const title = props.title
        const titleSub = props.titleSub
        const books = props.books

        return {
            title,
            titleSub,
            books
        }
    }
}
</script>