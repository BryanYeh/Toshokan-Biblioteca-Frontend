<template>
    <div class="bg-gradient-to-b from-yellow-600 via-yellow-400 to-white mt-8 p-16">
        <div class="max-w-7xl mx-auto">
            <h3 class="text-4xl font-light text-white">{{ title }}</h3>
            <BaseLink
                :to="link"
                class="bg-blue-500 hover:bg-blue-700 text-white font-light text-2xl px-6 py-3 rounded-lg inline-block mt-10"
            >{{ linkText }}</BaseLink>
        </div>
    </div>
</template>

<script>
import BaseLink from '@/components/BaseLink.vue'

export default {
    components: {
        BaseLink
    },
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        },
    },
    setup(props) {
        const title = props.title
        const link = props.link
        const linkText = props.linkText

        return {
            title,
            link,
            linkText
        }
    }

}
</script>