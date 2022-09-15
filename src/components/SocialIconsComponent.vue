<template>
    <li>
        <a :href="icon.href">
            <font-awesome-icon :icon="icon.iconText" />
        </a>
    </li>
</template>


<script>
export default {
    props: {
        icon: Object
    },
}
</script>