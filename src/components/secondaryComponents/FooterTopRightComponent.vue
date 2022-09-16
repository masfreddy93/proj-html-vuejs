<template>
    <div class="footer-top-right">
        <div class="footer-top-right-explore">
            <h4 class="explore">Explore</h4>
            <ul>
                <ExploreComponent v-for="(explore, i) in exploreArray" :key="i" :explore="explore" />
            </ul>
        </div>
        <div class="footer-top-right-information">
            <h4>Information</h4>
            <ul>
                <InformationComponent v-for="(information, i) in informationArray" :key="i" :information="information" />
            </ul>
        </div>
    </div>
</template>

<script>
import ExploreComponent from './ExploreComponent.vue';
import InformationComponent from './InformationComponent.vue';
export default {
    data() {
        return {
            exploreArray: [
                {
                    text: "Start here",
                    href: "#",
                },
                {
                    text: "Success story",
                    href: "#",
                },
                {
                    text: "Blog",
                    href: "#",
                },
                {
                    text: "Courses",
                    href: "#",
                },
                {
                    text: "About us",
                    href: "#",
                },
                {
                    text: "Contact us",
                    href: "#",
                },
            ],
            informationArray: [
                {
                    text: "Membership",
                    href: "#",
                },
                {
                    text: "Purchase guide",
                    href: "#",
                },
                {
                    text: "Privacy policy",
                    href: "#",
                },
                {
                    text: "Terms of services",
                    href: "#",
                },
            ],
        };
    },
    components: { ExploreComponent, InformationComponent }
}
</script>