<template>
    <section class="shoplist">
        <section class="shop" v-for="(item,index) in shoplist" :key="index">
            <shop-item :item="item"></shop-item>
        </section>
        <loading :show="isLoading"></loading>
    </section>
</template>
<script>
import { Loading } from 'vux'
import api from '@/api/shop'
import shopItem from '@/components/shop/shop_item.vue'
export default{
    data(){
        return{
            shoplist:[],
            isLoading:true,
        }
    },
    methods:{
        getShoplist(){
            api.getShoplist().then(res=>{
                this.shoplist = res.data;
                this.isLoading = false;
            }).catch(err=>{
                this.isLoading = false;
            })
        }
    },
    components:{
        'loading':Loading,
        'shopItem':shopItem,
    },
    mounted(){
        this.getShoplist();
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .shoplist{
        
    }
    .shop{
        padding:.45rem 0;
        border-bottom: .013333rem solid #eee;
    }
    .shop-info{
        display: flex;
        display: -webkit-flex;
        padding: 0 .25rem;
    }
    .logo{
        width:1.5rem;
        height:1.5rem;
        flex:none;
        img{
            box-sizing: border-box;
            width:100%;
            height:100%;
            border: .013333rem solid rgba(0,0,0,.08);
            // border-radius: .053333rem;
        }
    }
    .index{
        text-align:left;
        padding-left:.25rem;
        flex:auto;
        .index-item{
            position:relative;
            margin-bottom:pxToRem(4);
            .right{
                position: absolute;
                right:0;
                top:50%;
                transform: translateY(-50%);
            }
            .fengniao{
                padding:0 .04rem;
                background-image:$bgImage;
                color:#fff;
            }
        }
        .index-item1{
            font-size:pxToRem(14);
        }
        // .index-item2{
        //     height:.6rem;
        // }
        .index-item3{
            .gege{
                display: inline-block;
                color:#ddd;
                margin:0 .06rem;
            }
            .juli:after{
                content:'|';
                color:#ddd;
                margin:0 .06rem;    
            }
        }
    }
    .shop-activity{
        padding-left:2rem;
        padding-right:.3rem;
        text-align:left;
        .title{
            margin-top: pxToRem(6);
            margin-bottom: pxToRem(6);
            span{
                margin-right:pxToRem(6);
                border:1px solid #eee;
                padding:pxToRem(1) pxToRem(1);
            }
        }
        .activity{
            position: relative;
            .item{
                margin-bottom:.1rem;
            }
            .tejia{
                background-color: rgb(241, 136, 79);
                color:#fff;
                padding:.04rem;
            }
            .jian{
                background-color: rgb(240, 115, 115);
                color:#fff;
                padding:.04rem;
            }
            .super{
                background-color: rgb(240, 115, 115);
                color:#fff;
                padding:.04rem;
            }
            .shou{
                background-color: rgb(112, 188, 70);
                color:#fff;
                padding:.04rem;
            }
            .bao{
                background-color: rgb(153, 153, 153);
                color:#fff;
                padding:.04rem;
            }
            .btn{
                position: absolute;
                right:0;
                top:0;
            }
        }
    }
</style>