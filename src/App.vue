<template>
    <div>
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.ShowList"></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    components: {
        FooterGuide
    }
}
</script>

