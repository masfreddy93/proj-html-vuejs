<template>
    <footer>
        <div class="container">
            <div class="footer-top">
                <FooterTopLeftComponent :contactDetails="contactDetails" />
                <FooterTopRightComponent />
            </div>

            <div class="footer-bottom">
                <p> {{ copyright }} </p>
            </div>
        </div>
    </footer>
</template>


<script>
import FooterTopLeftComponent from './FooterTopLeftComponent.vue';
import FooterTopRightComponent from './FooterTopRightComponent.vue';

export default {
    data() {
        return {
            contactDetails: {
                id: "Address",
                address: "382 NE 199 St 3487 Miami FL 33209-2899",
                telephone: "+1(305)547-9909",
                hours: "9am - 5pm EST, Monday-Friday",
                email: "support@maxcoach.com"
            },

            copyright: "© 2020 Maxcoach. All Rights Reserved"
        };
    },
    components: { FooterTopLeftComponent, FooterTopRightComponent }
}

</script>



<style lang="scss">
@import '../style/variables.scss';

footer {
    background-color: $footer-bg-grey;

    .footer-top {
        padding: 4.25rem 0;
        @include my-display-flex;
        justify-content: flex-start;

        .footer-top-left {
            flex-basis: 0;
            flex-grow: 1;

            h4, address, p {
                margin-bottom: 1.5rem;
                font-size: 0.75rem;
            }

            h4 {
                font-size: 1rem;
            }

            .social-icons {
                padding-top: 0.75rem;
                @include my-display-flex;
                justify-content: flex-start;
                gap: 1.5rem;
                color: $font-color-grey-section;
            }
        }

        .footer-top-right {
            flex-basis: 0;
            flex-grow: 1;  
            @include my-display-flex;
            justify-content: flex-start;
            align-items: flex-start;

            & > div {
                flex-basis: 0;
                flex-grow: 1;
            }
            
            .footer-top-right-explore ul {
                @include my-display-flex;
                flex-wrap: wrap;

                li {
                    flex-basis: calc(50% - 0.5rem);
                }
            }

            h4, li {
                margin-bottom: 1rem;
                font-size: 0.75rem;
            }

            h4 {
                font-size: 1rem;
            }

        }
    }

    .footer-bottom {
        font-size: 0.75rem;
        color: $font-color-grey-section;
        text-align: center;
        padding-bottom: 3.75rem;
    }
}
</style>