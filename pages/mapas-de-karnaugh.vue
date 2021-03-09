<template>
    <div class="container">
        <section
            class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
        >
            <header class="flex items-center justify-between">
                <h2 class="text-lg leading-6 font-medium text-black">
                    Mapa de Karnaugh
                </h2>
            </header>

            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                    >
                        <div
                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                        >
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            #
                                        </th>
                                        <th v-for="domain in domains" :key="domain" scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <button class="
                                                group flex items-center rounded-md
                                                pl-3 pr-2 py-1
                                                text-blue-600 text-sm font-medium 
                                                bg-blue-200 
                                                hover:bg-blue-200 hover:text-blue-800 
                                                ">
                                                {{ domain }}
                                                <svg class="group-hover:text-blue-600 text-blue-500 ml-1" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-3 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                                        >
                                            <span class="not-sr-only">ƒ(...)</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="term in trueTable" :key="term.index">
                                        <td class="px-3 whitespace-nowrap text-sm text-gray-300">
                                            {{ term.index }}
                                        </td>
                                        <td v-for="(bit,idx) in term.bits" :key="idx" class="px-3 whitespace-nowrap text-sm text-gray-500">
                                            {{ bit }}
                                        </td>
                                        <td class="
                                            py-1
                                            ">
                                            <button class="
                                            py-1
                                            w-8
                                            whitespace-nowrap
                                            text-sm font-semibold rounded
                                            bg-green-100 
                                            text-green-800
                                            hover:text-green-900
                                            hover:bg-green-200
                                            ">{{ term.value }}</button>
                                        </td>
                                    </tr>

                                    <!-- px-2 py-4 inline-flex text-sm leading-5 font-semibold rounded bg-green-100 text-green-800
                                    whitespace-nowrap
                                    hover:text-green-900
                                    hover:bg-green-200 -->
                                    <!-- More items... -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'default',
    components: {},
    head: () => ({
        title: 'Karnaugh',
        meta: [
            {
                hid: 'title',
                name: 'title',
                content: 'Karnaugh table tool',
            },
        ],
    }),
    data: () => ({
        domains: ['A', 'B'],
        trueTable: [
            { index: 0, bits: [0,0], value: '0' },
            { index: 1, bits: [0,1], value: '1' },
            { index: 2, bits: [1,0], value: '1' },
            { index: 3, bits: [1,1], value: 'X' },
        ],
    }),
};
</script>

<style></style>
