<template>
    <header>
        <div class="container">
            <HeaderStart :logo="logo" />
            <HeaderEnd />
        </div>
    </header>
</template>


<script>
import HeaderStart from './secondaryComponents/HeaderStart.vue';
import HeaderEnd from './secondaryComponents/HeaderEnd.vue';

export default {
    data() {
        return {
            logo: {
                href: "#",
                src: require("../assets/images/dark-logo.png"),
            }
        };
    },
    components: { HeaderStart, HeaderEnd }
}

</script>



<style lang="scss">

@import '../style/variables.scss';

header {
    background-color: $header-bg;
    color: white;

    .container {
        @include my-display-flex;

        .header-start {

            img {
                max-height: 24px;
                filter: brightness(10);
            }
        }

        .header-end {
            @include my-display-flex;

            .header-end-navbar {
                @include my-display-flex;
                gap: 2.5rem;

                a {
                    position: relative;
                    padding-right: 1rem;
                }

                a::after {
                    content: '';
                    position: absolute;
                    border: 0.5px solid white;
                    border-width: 0 1px 1px 0;
                    display: inline-block;
                    padding: 2px;
                    transform: rotate(45deg);
                    right: 0.3rem;
                    top: 0.45rem;
                }
            }

            .header-end-tools {
                @include my-display-flex;
                gap: 1rem;

                li.cart {
                    position: relative;

                    .cart-icon {
                        position: relative;
                        color: white;
                    }

                    .shop-counter {
                        position: absolute;
                        background-color: white;
                        border-radius: 50%;
                        aspect-ratio: 1;
                        width: 1rem;
                        height: 1rem;
                        color: $header-bg;
                        font-size: 0.75rem;
                        font-weight: 700;
                        text-align: center;
                        top: 0;
                        right: 0;
                        transform: translate(50%, -50%);
                    }
                }

                li.user .user-icon {
                    font-size: 0.75rem;
                    border: 1px solid white;
                    border-radius: 50%;
                    padding: 1px;
                }

                .search-bar {
                    position: relative;

                    input {
                        padding: 1rem;
                        width: 12.5rem;
                        font-size: 1rem;
                        font-weight: lighter;
                        border-radius: 0.5rem;  
                    }

                    .lens {
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        color:#2CB19B;
                    }
                }
            }
        }
    }
}

</style>