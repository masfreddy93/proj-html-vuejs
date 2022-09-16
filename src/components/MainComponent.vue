<template>
    <main>
        <SideBar />
        <HeroComponent />
        <Section1Component />
        <Section2Component />
        <Section3Component />
        <Section4Component />
        <Section5Component />
        <Section6Component />
        <ButtonArrowUp />
    </main>
</template>


<script>
import HeroComponent from "./secondaryComponents/HeroComponent.vue";
import SideBar from "./secondaryComponents/SideBar.vue"; 
import Section1Component from "./secondaryComponents/Section1Component.vue";
import Section2Component from "./secondaryComponents/Section2Component.vue";
import Section3Component from "./secondaryComponents/Section3Component.vue";
import Section4Component from "./secondaryComponents/Section4Component.vue";
import Section5Component from "./secondaryComponents/Section5Component.vue";
import Section6Component from "./secondaryComponents/Section6Component.vue";
import ButtonArrowUp from "./secondaryComponents/ButtonArrowUp.vue";

export default {
    components: { HeroComponent, SideBar, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component, ButtonArrowUp }
}

</script>



<style lang="scss">
@import '../style/variables.scss';

main {

    .side-bar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.5rem;
        background-color: white;
        box-shadow: -1px 1px 1px #e4eaf3;
        position: fixed;
        right: 0;

        a {
            padding: 0.25rem;

            &:hover {
                opacity: 0.2;
            }
        }
    }

    .hero {
        text-align: center;

        h5 {
            margin-bottom: 1.25rem;
            font-size: 1rem;
        }

        .hero-top {
            padding-top: 100px;
            background: linear-gradient(($header-bg, #8888d9) 86%, rgb(250, 247, 247) 86%);
            color: white;

            .container-hero {
                position: relative;
            }

            h2 {
                margin-bottom: 0.75rem;
                font-size: 2.875rem;
            }

            p {
                margin-bottom: 2rem;
                font-size: 1.125rem;
                color: $font-color-grey-hero;
            }

            .button {
                margin-bottom: 5rem;
            }

            figure {
                position: relative;
                padding-bottom: 1rem;


                img.poster-hero {
                    max-height: 465px;
                    display: inline-block;
                    border: 20px solid white;
                    border-radius: 10px;
                    position: relative;
                    z-index: 1;
                }

                img.youtube-logo {
                    position: absolute;
                    max-width: 100px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                    z-index: 99;

                    &:hover {
                        opacity: 0.8;
                    }
                }

                img.hero-person {
                    position: absolute;
                    bottom: 0;
                }

                img.person-left {
                    max-width: 360px;
                    left: 0;
                    transform: translateX(-85%);
                }

                img.person-right {
                    max-width: 240px;
                    right: 0;
                    transform: translate(100%, 45%);
                }
            }
        }

        .hero-middle {
            padding: 13rem 0 5rem;

            .container-hero {
                position: relative;

                h3 {
                    font-size: 2.0625rem;
                    margin-bottom: 3.125rem;
                }

                h5 {
                    margin-bottom: 1.25rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                }

                span {
                    font-size: 0.875rem;
                    color: $font-color-grey-hero;
                }

            }
        }

        .hero-bottom {

            ul {
                padding: 3rem;
                @include my-display-flex;

                li {
                    align-self: center;

                    span {
                        display: block;
                        font-size: 2.75rem;
                        font-weight: bolder;
                        color: $button-bg;
                        margin-bottom: 0.5rem;
                    }

                    h5 {
                        color: $font-color-grey-hero;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    .section-1 {

        .container {
            @include my-display-flex;
            text-align: start;

            .cards,
            .services {
                padding: 0.5rem;
            }

            h5,
            p {
                color: $font-color-grey-section;
            }


            .cards {
                display: flex;
                align-items: center;
                gap: 2rem;
                flex-basis: 50%;

                .cards-left {
                    margin-top: -5rem;

                }

                .cards-right {
                    margin-bottom: -5rem;
                }

                .card {
                    margin-bottom: 2rem;
                    padding-top: 2rem;
                    box-shadow: 10px 20px 50px $section-bg-grey;

                    p,
                    h4,
                    img {
                        padding: 0 1.25rem;
                    }

                    h4 {
                        font-size: 1.125rem;
                        font-weight: bold;
                        margin-bottom: 1rem;
                    }

                    p {
                        font-size: 0.9375rem;
                        line-height: 1.5rem;
                        // margin-bottom: 2rem;
                    }

                    img {
                        height: 200px;
                        object-fit: contain;
                    }
                }
            }

            .services {
                align-self: center;
                flex-basis: 50%;
                padding: 2rem 5.5rem;

                h5 {
                    font-size: 1rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    margin-bottom: 1.75rem;
                }

                h2 {
                    font-size: 2.75rem;
                    font-weight: bold;
                    margin-bottom: 3rem;
                }

                ul {
                    margin-bottom: 2rem;

                    li {
                        display: flex;
                        gap: 1rem;
                        font-size: 1rem;
                        margin-bottom: 1rem;

                        .fa-check {
                            color: $button-bg;
                        }
                    }
                }
            }
        }

    }

    .section-2 {
        background-color: $section-bg-grey;

        h5 {
            color: $font-color-grey-section;
        }

        .carousel {
            @include my-display-flex;
            flex-wrap: wrap;

            .card {
                padding: 1rem 0;
                margin-bottom: 1rem;
            }

            li {
                flex-basis: calc(50% - 1rem);
                justify-content: flex-start;
                padding: 1rem;

                &:hover {
                    background-color: white;
                }

                img {
                    max-width: 170px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    object-fit: cover;

                }

                .card-details {
                    align-self: center;

                    &>span,
                    p {
                        margin-bottom: 1.25rem;
                    }

                    &>span {
                        display: block;
                        font-size: 1.25rem;
                        font-weight: bold;
                        color: $button-bg;

                        .course-price-decimals {
                            font-size: 1rem;
                        }
                    }

                    &>a {
                        line-height: 2rem;
                        font-size: 1.125rem;
                        font-weight: bold;
                    }

                    .course-details {
                        font-size: 0.75rem;
                        font-weight: 400;

                        .lessons-number,
                        .students-number {
                            gap: 0.5rem;
                        }
                    }

                }

            }
        }
    }

    .section-3 {

        .card {
            padding: 3rem 0;
            gap: 5rem;

            .card-thumbnail {
                background-image: url('../assets/images/maxcoach-shape-05-150x150.png');
                background-repeat: no-repeat;
                background-position: bottom right;
                background-size: auto;
                position: relative;

                img {
                    max-width: 200px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .back-poster {
                    background-color: #D2A98E;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    position: absolute;
                    top: -5%;
                    left: 17%;
                    z-index: -1;
                }
            }

            p {
                font-size: 2rem;
                margin-bottom: 3rem;
            }

            h5 {
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: 1.25rem;
                padding: 0;
            }

            span {
                font-size: 0.875rem;
                color: $font-color-grey-section;
            }
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
        }
    }

    .section-4 {
        background-color: $section-bg-grey;

        h5 {
            color: $font-color-grey-section;
        }

        ul {
            gap: 2rem;

            .card-thumbnail {
                margin-bottom: 1.5rem;
            }

            h5 {
                color: $font-color-grey-section;
                margin-bottom: 1rem;
                padding: 0;
                font-size: 1rem;
            }

            h4 {
                margin-bottom: 1.5rem;
            }

            h4 a {
                line-height: 2rem;
                font-size: 1.4375rem;
                font-weight: bold;
            }

            .blog-details {
                // gap: 1.5rem;

                .row-section {
                    gap: .5rem;
                    font-size: 0.75rem;
                }
            }

        }
    }

    .section-5 {
        h5 {
            color: $font-color-grey-section;
            margin-bottom: 1rem;
        }

        ul {
            gap: 3rem;

            .card {

                figure {
                    margin-bottom: 2.5rem;

                    svg {
                        font-size: 4rem;

                    }
                }

                h4 {
                    margin-bottom: 1rem;
                }

                h4 a {
                    line-height: 1.5rem;
                    font-size: 1.1875rem;
                    font-weight: bold;
                }

                p {
                    font-size: 0.875rem;
                }
            }
        }
    }

    .section-6 {
        background: linear-gradient((white, $section6-bg-grey) 54.085%, white 54.085%);
        
        .container {
            position: relative;

            img {
                margin-bottom: 8.5rem;
            }

            h4 {
                font-size: 1.4375rem;
            }

            h3 {
                font-size: 2.0625rem;
                margin-bottom: 2rem;
            }
        }
    }

    .link-arrow-top {
        font-size: 1.5rem;
        font-weight: bold;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        position: fixed;
        bottom: 1.875rem;
        right: 1.875rem;
    }

}
</style>