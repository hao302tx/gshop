<template>
    <div>
        <header id="order_header">
            <HeaderTop title="搜索"></HeaderTop>
        </header>
        <div id="search_input">
            <input type="text" placeholder="请输入商家名称">
            <button type="submit">提交</button>
        </div>
    </div>
</template>
<script>
import '../../../static/css/reset.css'
import '../../../static/css/search.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {
        HeaderTop
    }
}
</script>
