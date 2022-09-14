<template>
    <header>
        <div class="container">
            <div class="header-start">
                <figure class="logo">
                    <img src="../assets/images/dark-logo.png" alt="">
                </figure>
            </div>


            <div class="header-end">
                <ul class="header-end-menu">
                    <li v-for="(item, i) in menuItems" :key="i">
                        <a :href="item.href" > {{ item.text }} </a>
                    </li>
                </ul>

                <ul class="header-end-tools">
                    <li class="cart">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="cart-icon" /></a>
                        <div class="shop-counter"> {{ shopCounter}} </div>
                    </li>
                    <li class="user"><a href="#"><font-awesome-icon icon="fa-regular fa-user" /></a></li>
                    <li class="search-bar">
                        <input type="text" placeholder="Search...">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="lens" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<script>

export default {

    data() {
        return {
            menuItems: [
                {
                    text: 'Home',
                    href: '#'
                },
                {
                    text: 'Pages',
                    href: '#'
                },
                {
                    text: 'Courses',
                    href: '#'
                },
                {
                    text: 'Features',
                    href: '#'
                },
                {
                    text: 'Blog',
                    href: '#'
                },
                {
                    text: 'Shop',
                    href: '#'
                }
            ],
            shopCounter: 0,
        }
    }

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
                max-height: 2rem;
                filter: brightness(10);
            }
        }

        .header-end {
            @include my-display-flex;
            gap: 0.5rem;

            .header-end-menu {
                @include my-display-flex;
                gap: 2.5rem;

                li {
                    position: relative;
                    padding-right: 1rem;
                    font-weight: 700;
                }

                li::after {
                    content: '';
                    position: absolute;
                    border: 1px solid white;
                    border-width: 0 2px 2px 0;
                    display: inline-block;
                    padding: 2.5px;
                    transform: rotate(45deg);
                    right: 0.3rem;
                    top: 0.4rem;
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

                .search-bar {
                    position: relative;

                    input {
                        padding: 1rem;                    
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