<template>
    <footer>
        <div class="container">
            <div class="footer-top">
                <div class="footer-top-left">
                    <h4> {{ contactDetails.id }} </h4>
                    <address> {{ contactDetails.address}} </address>
                    <p> {{ contactDetails.telephone }} [{{ contactDetails.hours }}] </p>
                    <p> {{ contactDetails.email }} </p>
                    <ul class="social-icons">
                        <li v-for="(icon, i) in socialIcons" :key="i" :class="icon.class"><a :href="icon.href"> <font-awesome-icon :icon="icon.iconText" /> </a></li>
                    </ul>
                </div>
                <div class="footer-top-right">
                    dx
                </div>
            </div>

            <div class="footer-bottom">
                <p> {{ copyright }} </p>
            </div>
        </div>
    </footer>
</template>


<script>

    export default{
        data() {
            return {
                contactDetails: {
                    id: 'Address',
                    address: '382 NE 199 St 3487 Miami FL 33209-2899',
                    telephone: '+1(305)547-9909',
                    hours: '9am - 5pm EST, Monday-Friday',
                    email: 'support@maxcoach.com'
                },
                socialIcons: [
                    {
                        class: 'facebook-icon',
                        iconText: 'fa-brands fa-square-facebook',
                        href: '#'
                    },
                    {
                        class: 'twitter-icon',
                        iconText: 'fa-brands fa-twitter',
                        href: '#'
                    },
                    {
                        class: 'instagram-icon',
                        iconText: 'fa-brands fa-instagram',
                        href: '#'
                    },
                    {
                        class: 'linkedin-icon',
                        iconText: 'fa-brands fa-linkedin',
                        href: '#'
                    },
                ],
                copyright: '© 2020 Maxcoach. All Rights Reserved'

            }
        }
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
                }
            }

            .footer-top-right {
                flex-basis: 0;
                flex-grow: 1;
            }
        }

        .footer-bottom {
            margin-bottom: 3.75rem 0;
            font-size: 0.75rem;
            color: $font-color-grey-section;
            text-align: center;
        }
    }

</style>