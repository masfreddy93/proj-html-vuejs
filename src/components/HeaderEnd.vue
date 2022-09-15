<template>
    <div class="header-end">

        <ul class="header-end-navbar">
            <li v-for="(item, i) in menuItems" :key="i">
                <a :href="item.href"> {{ item.text }} </a>
            </li>
        </ul>

        <ul class="header-end-tools">
            <li class="cart">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="cart-icon" />
                </a>
                <div class="shop-counter"> {{ shopCounter}} </div>
            </li>
            <li class="user">
                <a href="#">
                    <font-awesome-icon icon="fa-regular fa-user" class="user-icon" />
                </a>
            </li>
            <li class="search-bar">
                <input type="text" placeholder="Search...">
                <a href="#"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="lens" />
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    text: "Home",
                    href: "#"
                },
                {
                    text: "Pages",
                    href: "#"
                },
                {
                    text: "Courses",
                    href: "#"
                },
                {
                    text: "Features",
                    href: "#"
                },
                {
                    text: "Blog",
                    href: "#"
                },
                {
                    text: "Shop",
                    href: "#"
                }
            ],
            shopCounter: 0,
        }
    }
}
</script>