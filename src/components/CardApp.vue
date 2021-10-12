<template>
    <BaseLink :to="link">
        <div
            class="border shadow-lg rounded-xl px-6 py-8 bg-gray-200 flex space-x-4 transform hover:-translate-y-1 duration-150"
        >
            <div>
                <h2 class="text-2xl text-gray-700 font-semibold">{{ name }}</h2>
                <p class="text-lg overflow-hidden block overflow-ellipsis">{{ description }}</p>
            </div>
            <img class="rounded-3xl w-36" :src="image" :alt="altText" />
        </div>
    </BaseLink>
</template>

<script>
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
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const link = props.link
        const name = props.name
        const description = props.description
        const image = props.image
        const altText = props.altText

        return {
            link,
            name,
            description,
            image,
            altText
        }
    }
}
</script>

<style scoped>
p {
    line-height: 2rem;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
}
</style>