<template>
    <div class="rule-container">
        <li>
            <div
                class="
                    group block rounded-lg p-4 border border-gray-200
                    hover:border-transparent hover:shadow-lg 
                    hover:bg-blue-500
                "
            >
                <!-- bg-gradient-to-r hover:from-blue-500 hover:to-indigo-400 -->
                <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                        <dt class="sr-only">Formula</dt>
                        <dd class="group-hover:text-white leading-6 font-medium text-black">
                        {{ formula }}
                        </dd>
                    </div>
                    <div>
                        <dt class="sr-only">Category</dt>
                        <dd class="group-hover:text-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                            category
                        </dd>
                    </div>
                    <div class="col-start-2 row-start-1 row-end-3">
                        <dt class="sr-only">Users</dt>
                        <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                            <NuxtLink :to="'/algebra-boleana/'+id" >
                                Detalle
                            </NuxtLink>
                        </dd>
                    </div>
                </dl>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name: 'Rule',
    props: {
        formula: {
            type: String,
            required: true,
        },
        id: {
            type: String,
        },
    },
    components: {},
};
</script>
<style></style>
