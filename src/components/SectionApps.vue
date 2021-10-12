<template>
    <div class="max-w-7xl mx-auto mt-8">
        <h2 class="text-center text-yellow-600 text-bold text-3xl">Check out our official apps</h2>
        <p
            class="text-center text-lg text-gray-700"
        >Start borrowing and reading with a library card - no fees or subscription costs.</p>
        <div class="grid md:grid-cols-2 gap-8 mt-8 px-4">
            <CardApp
                :name="googleApp.name"
                :description="googleApp.description"
                :link="googleApp.link"
                :image="googleApp.image"
                :alt-text="googleApp.altText"
            />
            <CardApp
                :name="appleApp.name"
                :description="appleApp.description"
                :link="appleApp.link"
                :image="appleApp.image"
                :alt-text="appleApp.altText"
            />
        </div>
    </div>
</template>

<script>
import CardApp from '@/components/CardApp.vue'

export default {
    components: {
        CardApp
    },
    setup() {
        const googleApp = {
            name: 'Booklaza - Google',
            description: 'No debet phaedrum honestatis qui, sit at audire sensibus. Ad usu error civibus voluptatum, esse quaestio qualisque mel id. Sit voluptua deserunt id, no vero timeam cum. Unum instructior eu nec, sea ne dicam luptatum. Eu has liber mediocritatem, prima nulla te mel.',
            link: 'https://play.google.com/store/apps/details?id=com.toshokan.biblioteca&referrer=utm_source%3Dwebsite',
            image: 'https://avatars.dicebear.com/api/bottts/Booklaza-Google-Play.svg',
            altText: 'Booklaza App from Toshokan Biblioteca'
        }
        const appleApp = {
            name: 'Readgaza - Apple',
            description: 'No debet phaedrum honestatis qui, sit at audire sensibus. Ad usu error civibus voluptatum, esse quaestio qualisque mel id. Sit voluptua deserunt id, no vero timeam cum. Unum instructior eu nec, sea ne dicam luptatum. Eu has liber mediocritatem, prima nulla te mel.',
            link: 'http://appstore.com/readgaza',
            image: 'https://avatars.dicebear.com/api/bottts/Readgaza-Apple-Store.svg',
            altText: 'Readgaza App from Toshokan Biblioteca'
        }

        return {
            googleApp,
            appleApp
        }
    }
}
</script>