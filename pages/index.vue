<template>
    <div class="container">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img
                class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="./../assets/imgs/ProfilePicture.png"
                alt=""
                width="384"
                height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-lg font-semibold">
                        “Desing.Engineer.Code.”
                    </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-cyan-600">Ricardo Lara</div>
                    <div class="text-gray-500">
                        Full stack Developer, México
                    </div>
                </figcaption>
            </div>
        </figure>

        <ul>
            <li>
                <NuxtLink 
                  class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                  to="/algebra-boleana">
                    <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                    <span class="relative">Algebra Boleana</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink 
                  class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                  to="/complementos">
                    <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                    <span class="relative">Complementos</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    layout: 'default',
    components: {
        Logo,
    },
    head: () => ({
        title: 'Digital',
        meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'digial,algebra,boolean,boleana',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Digital',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Principios de alebra booleana y electrónica digital',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: '../assets/imgs/digital-bg.jpg',
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '300',
            },
            {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '300',
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
        ],
    }),
};
</script>

<style></style>
