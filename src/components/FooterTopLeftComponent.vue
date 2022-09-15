<template>
    <div class="footer-top-left">
        <h4> {{ contactDetails.id }} </h4>
        <address> {{ contactDetails.address}} </address>
        <p> {{ contactDetails.telephone }} [{{ contactDetails.hours }}] </p>
        <p> {{ contactDetails.email }} </p>
        <ul class="social-icons">
            <SocialIconsComponent v-for="(icon, i) in socialIcons" :key="i" :class="icon.class" :icon="icon" />
        </ul>
    </div>
</template>



<script>
import SocialIconsComponent from './SocialIconsComponent.vue';

export default {
    components: { SocialIconsComponent },
    props: {
        contactDetails: Object,
    },
    data(){
        return {
            socialIcons: [
                {
                    class: "facebook-icon",
                    iconText: "fa-brands fa-square-facebook",
                    href: "#"
                },
                {
                    class: "twitter-icon",
                    iconText: "fa-brands fa-twitter",
                    href: "#"
                },
                {
                    class: "instagram-icon",
                    iconText: "fa-brands fa-instagram",
                    href: "#"
                },
                {
                    class: "linkedin-icon",
                    iconText: "fa-brands fa-linkedin",
                    href: "#"
                },
            ],
        }
    }
}
</script>