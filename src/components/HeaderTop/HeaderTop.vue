<template>
    <div id="msite_header">     
       <slot name="search"></slot>
        <div class="Msite_div1">{{title}}</div>
        <slot name="address"></slot>
    </div>
</template>
<script>
import '../../../static/css/reset.css'
import '../../../static/css/msite.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    props : {
        title: String
    }
}
</script>

