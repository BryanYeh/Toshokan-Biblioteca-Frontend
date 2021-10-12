<template>
    <div class="bg-white">
        <div class="flex max-w-7xl mx-auto p-4 justify-between items-center">
            <div class>
                <TheLogo class="max-h-14 w-32" />
            </div>
            <div class="relative hidden md:flex">
                <input
                    type="text"
                    placeholder="Search by title"
                    class="py-2 px-4 bg-yellow-100 opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
                <button class="absolute inset-y-0 right-0 p-2 bg-yellow-100">
                    <IconSearch />
                </button>
            </div>
            <div class="md:hidden">
                <button
                    class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
                    @click="toggle()"
                >
                    <span class="sr-only">Open main menu</span>
                    <div
                        class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
                        ></span>
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{ 'opacity-0': open }"
                        ></span>
                        <span
                            aria-hidden="true"
                            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                            :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
                        ></span>
                    </div>
                </button>
            </div>
            <div class="hidden md:flex">
                <BaseLink
                    :to="{ name: 'Explore' }"
                    class="px-4 py-2"
                    inactive-class="text-gray-600 hover:text-gray-800"
                    active-class="text-black"
                >Browse Collections</BaseLink>
                <BaseLink
                    :to="{ name: 'Auth' }"
                    class="px-4 py-2"
                    inactive-class="text-gray-600 hover:text-gray-800"
                    active-class="text-black"
                >Account</BaseLink>
            </div>
        </div>
        <div
            class="md:hidden border-t-2 transform transition duration-500 ease-in-out absolute bg-white shadow w-full"
            v-if="open"
        >
            <BaseLink
                :to="{ name: 'Explore' }"
                class="px-4 py-2 block border-b"
                inactive-class="text-gray-600 hover:text-gray-800"
                active-class="text-black"
            >Browse Collections</BaseLink>
            <BaseLink
                :to="{ name: 'Auth' }"
                class="px-4 py-2 block border-b"
                inactive-class="text-gray-600 hover:text-gray-800"
                active-class="text-black"
            >Account</BaseLink>

            <div class="px-4 py-2">
                <div class="relative">
                    <input
                        type="text"
                        placeholder="Search by title"
                        class="py-2 px-4 bg-yellow-100 opacity-70 w-full focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                    <button class="absolute inset-y-0 right-0 p-2 bg-yellow-100">
                        <IconSearch />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";
import IconSearch from "@/components/IconSearch.vue";
import BaseLink from "@/components/BaseLink.vue"

import { ref, computed } from 'vue'

export default {
    components: {
        TheLogo,
        IconSearch,
        BaseLink
    },
    setup() {
        const open = ref(false)

        function toggle() {
            open.value = !open.value
        }
        return { open, toggle }
    }
}
</script>