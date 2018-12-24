<template>
    <div>
        <Header/>
        <main>
            <nuxt/>
            <!--<Cart/>-->
        </main>

        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from "@/components/Footer";
    import Cart from "@/components/Cart";

    export default {
        name: "page-header-footer",
        components: {
            Cart,
            Footer,
            Header
        }

    }
</script>
