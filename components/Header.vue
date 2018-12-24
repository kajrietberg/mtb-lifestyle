<template>
    <header>
        <div class="wrapper wrapper--header">
            <h1>
                MTB LifeStyle
            </h1>
            <nav class="nav--header">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/webshop">Webshop</a></li>
                    <li><a href="/login">Login</a> </li>
                    <li><a href="/contact">Contact</a> </li>
                </ul>
            </nav>
        </div>
    </header>

</template>



<script>
    export default {
        name: "Header"
    };

</script>

<style lang="scss" scoped>
    .wrapper--header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .nav--header {
        ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            height: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                &:not(last-of-type) {
                    margin-right: 2rem;
                }
            }
        }
    }
</style>