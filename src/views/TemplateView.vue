<template>
    <div class="d-flex flex-column" style="height: 100vh">
        <header>
            <navbar-components/>
        </header>
        <body class="mb-auto">
            <slot></slot>
        </body>
        <footer>
            <footor-component/>
        </footer>
    </div>

</template>

<script>
import NavbarComponents from '@/components/NavbarComponents'
import FootorComponent from '@/components/FootorComponent'
    export default {
        name : "TemplateView",
        components:{
            NavbarComponents,
            FootorComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>