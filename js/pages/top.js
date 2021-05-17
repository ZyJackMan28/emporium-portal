const lyTop = {
    template: "\
    <div class='nav-top'> \
     <shortcut/>\
        <!--头部--> \
        <div class='header' id='headApp'> \
            <div class='py-container'> \
                <div class='yui3-g Logo'> \
                    <div class='yui3-u Left logoArea'> \
                        <a class='logo-bd' title='emporium' href='index.html' target='_blank'></a> \
                    </div> \
                    <div class='yui3-u Center searchArea' > \
                        <div class='search' > \
                            <form action='' class='sui-form form-inline'> \
                                <!--searchAutoComplete--> \
                                <div class='input-append' > \
                                    <input type='text' id='autocomplete' v-model='key' \
                                           class='input-error input-xxlarge' /> \
                                    <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button> \
                                </div> \
                            </form> \
                        </div> \
                        <div class='hotwords'> \
                            <ul> \
                                <li class='f-item'>Fresh Emporium</li> \
                                <li class='f-item'>亿元优惠</li> \
                                <li class='f-item'>9.9元团购</li> \
                                <li class='f-item'>每满99减30</li> \
                                <li class='f-item'>亿元优惠</li> \
                                <li class='f-item'>9.9元团购</li> \
                                <li class='f-item'>办公用品</li> \
                            </ul> \
                        </div> \
                    </div> \
                    <div class='yui3-u Right shopArea'> \
                        <div class='fr shopcar'> \
                            <div class='show-shopcar' id='shopcar'> \
                                <span class='car'></span> \
                                <a class='sui-btn btn-default btn-xlarge' href='/cart.html' target='_blank'> \
                                    <span>我的购物车</span> \
                                    <i class='shopnum'>0</i> \
                                </a> \
                                <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'> \
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> \
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> \
                                </div> \
                            </div> \
                        </div> \
                    </div> \
                </div> \
                <div class='yui3-g NavList'> \
                    <div class='yui3-u Left all-sort'> \
                        <h4>Emp Luxury</h4> \
                    </div> \
                    <div class='yui3-u Center navArea'> \
                        <ul class='nav'> \
                            <li class='f-item'>服装城</li> \
                            <li class='f-item'>美妆馆</li> \
                            <li class='f-item'>品优超市</li> \
                            <li class='f-item'>全球购</li> \
                            <li class='f-item'>闪购</li> \
                            <li class='f-item'>团购</li> \
                            <li class='f-item'>有趣</li> \
                            <li class='f-item'><a href='seckill-index.html' target='_blank'>秒杀</a></li> \
                        </ul> \
                    </div> \
                    <div class='yui3-u Right'></div> \
                </div> \
            </div> \
        </div>\
       </div> \
      ",
    name:'ly-top',
    data() {
        return {
            key: "",
            query: location.search
        }
    },
    created() {
        //绑定键盘事件
        //this.keyenter();
        this.key = this.getUrlParam("key");

    },
    methods: {
        /*keyenter(){
            //将键盘事件直接绑定在document
            var self = this;
            document.onkeydown = function (e) {
                let key = window.event.keyCode;
                if(key == 13){
                    self.search();
                }

            }
        },*/
        search() {
            //alert("hahah");
            /*使用绝对路径*/
            window.location = '/search.html?key=' + this.key;
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return decodeURI(r[2]);
            }
            return null;
        }
    },

    components: {
        shortcut:() => import('./shortcut.js')
    }
}
export default lyTop;