<template>
    <div class="container">
        <section
            class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
        >
            <header class="flex items-center justify-between">
                <h2 class="text-lg leading-6 font-medium text-black">Reglas de Algebra Boleana</h2>
            </header>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <Rule v-for="rule in rules" :key="rule.id" v-bind="rule" />
            </ul>
        </section>
    </div>
</template>

<script>
import Rule from '../components/Rule.vue';

export default {
    layout: 'default',
    components: {
        Rule,
    },
    head: () => ({
        title: 'Algebra Boleana',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ],
    }),
    data: () => ({
        rules: [
            { id: 1, formula: 'A + 0 = A' },
            { id: 2, formula: 'A + 1 = 1' },
            { id: 3, formula: 'A * 0 = 0' },
            { id: 4, formula: 'A * 1 = A' },
            { id: 5, formula: 'A + A = A' },
            { id: 6, formula: 'A + Ā = 1' },
            { id: 7, formula: 'A * A = A' },
            { id: 8, formula: 'A * ¬A = 0' },
            { id: 9, formula: '¬¬A = A' },
            { id: 10, formula: 'A + AB = A' },
            { id: 11, formula: 'A + ¬AB = A + B' },
            { id: 12, formula: '(A + B)(A + C) = A + BC' },
        ],
        items: [
            { 
                url: 'google.com', title: 'API Integration', category: 'Engineering', 
                users: [
                    { name: 'Lara', avatar: 'https://via.placeholder.com/150/92c952' },
                    { name: 'Lara', avatar: 'https://via.placeholder.com/150/771796' },
                    { name: 'Lara', avatar: 'https://via.placeholder.com/150/24f355' },
                ] 
            },
            { 
                url: 'google.com', title: 'Onboarding Emails', category: 'Customer Success', 
                users: [
                    { name: 'Lara', avatar: 'https://via.placeholder.com/150/24f355' },
                ] 
            },
        ]
    }),
};
</script>

<style></style>
