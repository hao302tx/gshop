<template>
    <footer class="footer">
        <hr>
        <div class="footer_container" @click="goto('/msite')">
            <a href="javascript:;"><img :class="{pic_on : '/msite' === $route.path}" src="../../../static/image/外卖.png" width="28px" height="28px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/msite' === $route.path}">外卖</span>
        </div>
        <div class="footer_container" @click="goto('/search')">
            <a href="javascript:;"><img :class="{pic_on : '/search' === $route.path}"  src="../../../static/image/搜索--1.png" width="28px" height="28px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/search' === $route.path}">搜索</span>
        </div>
        <div class="footer_container" @click="goto('/order')">
            <a href="javascript:;"><img :class="{pic_on : '/order' === $route.path}" src="../../../static/image/订单.png" width="28px" height="28px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/order' === $route.path}">订单</span>
        </div>
        <div class="footer_container" @click="goto('/profile')">
            <a href="javascript:;"><img :class="{pic_on : '/profile' === $route.path}" src="../../../static/image/我 的.png" width="28px" height="28px" alt=""></a>
            <span class="footer_span" :class="{font_on : '/profile' === $route.path}">我的</span>
        </div>
    </footer>
</template>

<script>
import '../../../static/css/reset.css'
import '../../../static/css/footer.css'
export default {
    methods: {
        goto:function(path) {
            this.$router.replace(path);
        }
    }
}
</script>
