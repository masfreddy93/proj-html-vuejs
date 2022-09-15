<template>
    <li>
        <a :href="information.href"> {{ information.text }} </a>
    </li>
</template>


<script>
export default {
    props: {
        information: Object,
    }
}
</script>