<template>
    <div>
        <header>
                <svg @click="$router.back()" t="1542119813843" class="icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs></defs><path d="M 710.154 8.9804 L 266.007 460.693 a 81.1186 81.1186 0 0 0 0.861532 114.476 l 446.193 441.051 a 26.9229 26.9229 0 0 0 37.8536 -38.2843 L 304.722 536.884 a 27.2729 27.2729 0 0 1 -0.323074 -38.4459 L 748.546 46.7263 A 26.9229 26.9229 0 1 0 710.181 9.00732 Z" fill="#707070" p-id="1924"></path></svg>
                <h1>美团外卖</h1>
            </header>
            <div class="Login_main">
                <div class="Login_selc">
                    <div @click="btnTel">短信登陆</div>
                    <div @click="btnPas">密码登陆</div>
                </div>
                <form id="Login_tel" v-show="loginTel">
                    <div class="Login_text">
                    <input type="text" placeholder="手机号">
                    <input type="text" placeholder="验证码">
                    </div>
                    <div class="Login_text2">
                    <span>温馨提示：未注册美团外卖账户的手机，登陆时将自动注册，且代表已同意</span>
                    <strong>《用户服务协议》</strong>
                    </div>
                    <input type="submit" value="登陆"  class="Login_submit">
                    <span>关于我们</span>
                </form>
                <form action="" id="Login_pas"  v-show="loginPas">
                    <input type="text" placeholder="手机/邮箱/用户名">
                    <input type="text" placeholder="密码">
                    <input type="text" placeholder="验证码">
                    <input type="submit" value="登陆" class="Login_submit">
                    <strong>关于我们</strong>
                </form>
            </div>
    </div>
</template>
<script>
import '../../../static/css/reset.css'
import '../../../static/css/Login.css'
import Vue from 'vue';
export default {
    data (){
        return {
            loginTel: true,
            loginPas: false
        }
    },
    methods: {
        btnTel: function() {
            this.loginTel = true;
            this.loginPas = false;
        },
        btnPas: function() {
            this.loginTel = false;
            this.loginPas = true;
        }
    }

}
</script>

