<template>
    <div>
   <header id="search_header">
            <HeaderTop title="订单"></HeaderTop>

    </header>
    <div class="search_logo">
        <img src="../../../static/image/异常.png" alt="">
        <p>登陆后查看外卖订单</p>
        <button>立即登陆</button>
    </div>
    </div>
</template>
<script>
import '../../../static/css/reset.css'
import '../../../static/css/order.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
 components : {
        HeaderTop
    },
}
</script>

