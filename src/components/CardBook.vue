<template>
    <div class="group">
        <BaseLink :to="link">
            <img
                class="rounded-md mb-4 transform group-hover:-translate-y-1 group-hover:shadow-lg duration-150"
                :src="image"
                :alt="altText"
            />
            {{ title }}
        </BaseLink>
        <p class="text-gray-500">{{ text }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
import BaseLink from '@/components/BaseLink.vue'

export default {
    components: {
        BaseLink
    },
    props: {
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },

    setup(props) {
        const link = props.link
        const image = props.image
        const altText = props.altText
        const title = props.title
        const author = props.author
        const year = props.year

        const text = computed(() => `${author} (${year})`)

        return {
            link,
            image,
            altText,
            title,
            text
        }
    }
}
</script>