<template>
    <div class="header-start">
        <figure class="logo">
            <a :href="logo.href"><img :src="logo.src" alt=""></a>
        </figure>
    </div>
</template>


<script>
export default {
    props: {
        logo: Object,
    }
}
</script>