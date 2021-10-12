<template>
    <SectionHero />
    <SectionApps />
    <SectionCallToAction :title="cta.title" :link="cta.link" :link-text="cta.linkText" />
    <SectionFeature :title="feature1.title" :title-sub="feature1.titleSub" :books="feature1.books" />
</template>

<script>
import SectionFeature from '@/components/SectionFeature.vue'
import SectionCallToAction from '@/components/SectionCallToAction.vue'
import SectionApps from '@/components/SectionApps.vue'
import SectionHero from '@/components/SectionHero.vue'
import { ref } from 'vue'

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

        const feature1 = ref({
            title: 'The New York Times Bestsellers ',
            titleSub: 'The NYT best selling fiction and nonfiction books. Updated weekly. 10/17/21.',
            books: [
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/0439-1/025/38B/FD/{02538BFD-3E57-409F-B1D3-1B698003AD85}Img400.jpg',
                    alt: 'Book 1',
                    title: 'It Ends with Us',
                    year: 2002,
                    author: 'Coolen Hoover'
                },
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/1523-1/AFC/0AE/07/{AFC0AE07-DBCA-4C91-AC6B-5664688E996A}Img400.jpg',
                    alt: 'Book 2',
                    title: 'Where the Deer and the Antelope Play ',
                    year: 2014,
                    author: 'Jack Cracker'
                },
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/0439-1/2D6/BE7/86/{2D6BE786-82ED-4344-8BD8-B2F7A3546883}Img400.jpg',
                    alt: 'Book 3',
                    title: 'The Dark Meets the Way',
                    year: 1982,
                    author: 'Mathow Crevice'
                },
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/1523-1/D49/7B6/3A/{D497B63A-558E-4F7D-BA7D-C996D5B1872E}Img400.jpg',
                    alt: 'Book 4',
                    title: 'The Story of My Story',
                    year: 1999,
                    author: 'Colon Siegner'
                },
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/0111-1/AC7/CE1/BC/{AC7CE1BC-9545-45DB-B534-700583BADEAC}Img400.jpg',
                    alt: 'Book 5',
                    title: 'This is a Boring Book',
                    year: 2000,
                    author: 'Arthur Magiz'
                },
                {
                    link: '/explore',
                    image: 'https://img1.od-cdn.com/ImageType-400/1071-1/567/5E7/31/{5675E731-E2AC-43F5-A0CB-9F193A14BB51}Img400.jpg',
                    alt: 'Book 6',
                    title: 'What the Future will be',
                    year: 1998,
                    author: 'George McGloay'
                },
            ]
        })

        return {
            cta, feature1
        }
    }
}
</script>