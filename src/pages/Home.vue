<template>
    <SectionHero />
    <SectionApps />
    <SectionCallToAction :title="cta.title" :link="cta.link" :link-text="cta.linkText" />

    <Suspense>
        <template #default>
            <SectionFeature />
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import SectionFeature from '@/components/SectionFeature.vue'
import SectionCallToAction from '@/components/SectionCallToAction.vue'
import SectionApps from '@/components/SectionApps.vue'
import SectionHero from '@/components/SectionHero.vue'


export default {
    components: {
        SectionFeature,
        SectionCallToAction,
        SectionApps,
        SectionHero
    },
    setup() {
        const cta = ref({
            title: 'Explore & read millions of books for free',
            link: '/explore',
            linkText: 'Browse our Collections'
        })

        return {
            cta
        }
    }
}
</script>