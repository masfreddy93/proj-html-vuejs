<template>
    <li>
        <a :href="explore.href"> {{ explore.text }} </a>
    </li>
</template>


<script>
export default {
    props: {
        explore: Object,
    }
}
</script>