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
            <li v-for="link in links" :key="link.to">
                <NuxtLink 
                  class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                  :to="link.to">
                    <span class="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span>
                    <span class="relative">{{ link.label }}</span>
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
    }),
    data: () => ({
        links: [
            { to: '/algebra-boleana', label: 'Algebra Boleana' },
            { to: '/mapas-de-karnaugh', label: 'Mapas def Karnaugh' },
            { to: '/complementos', label: 'Complementos' },
        ]
    })
};
</script>

<style></style>
