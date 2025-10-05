<template>
  <div class="grid col-12">
    <div class="logo bg-birthday-color-sub">
      <div class="logo-text">
        <h1>NAOKI MAKITA</h1>
        <p class="h1-p">In-house System Engineer</p>
      </div>
    </div>
    <div class="col-12 works">
      <div class="grid-center waku">
        <div class="col-12">
          <h2>In-house Works</h2>
        </div>
        <div v-for="item in this.in_house_work_item" class="grid col-4_sm-8 item" style="cursor: pointer" @click="openModal(item['id'])" :key="item['id']">
          <nuxt-img class="item-img" :width="img_w_item" :height="img_h_item" :src="item['img']" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" />
          {{item["title"]}}
        </div>
      </div>
    </div>
    <div class="col-12 works bg-birthday-color-sub">
      <div class="grid-center waku">
        <div class="col-12">
          <h2>Private Works</h2>
        </div>
        <div v-for="item in private_work_item" class="grid col-4_sm-8 item" style="cursor: pointer" @click="openModal(item['id'])" :key="item['id']">
          <nuxt-img class="item-img" :width="img_w_item" :height="img_h_item" :src="item['img']" style="object-fit: cover;width: 100%" loading="lazy" alt="header-img" />
          {{item["title"]}}
        </div>
      </div>
    </div>
    <div class="col-12 works">
      <div class="grid-center waku">
        <div class="col-12">
          <h2>Skills</h2>
        </div>
        <div class="col-4_sm-6 item">
          <div class="circle anime2 rails"><div class="circle-inner"><p style="margin: 0;font-size: .8rem;letter-spacing: 0;">Ruby on Rails</p></div></div>
        </div>
        <div class="col-4_sm-6 item">
          <div class="circle anime2 nuxt"><div class="circle-inner">Nuxt.js</div></div>
        </div>
        <div class="col-4_sm-12 item">
          <div class="circle anime2 html"><div class="circle-inner">HTML</div></div>
        </div>
        <div class="grid-center col-10_sm-12">
          <div class="col-5_sm-6 item">
            <div class="circle anime3 filemaker"><div class="circle-inner">FileMaker</div></div>
          </div>
          <div class="col-5_sm-6 item">
            <div class="circle anime2 gas"><div class="circle-inner">GAS</div></div>
          </div>
        </div>
        <div class="col-4_sm-12 item">
          <div class="circle anime1 sql"><div class="circle-inner">SQL</div></div>
        </div>
        <div class="col-4_sm-6 item">
          <div class="circle anime1 gcp"><div class="circle-inner">GCP</div></div>
        </div>
        <div class="col-4_sm-6 item">
          <div class="circle anime1 live"><div class="circle-inner">ライブ配信</div></div>
        </div>
        <div class="grid-center col-10_sm-12">
          <div class="col-5_sm-6 item">
            <div class="circle anime2 isms"><div class="circle-inner">ISMS</div></div>
          </div>
          <div class="col-5_sm-6 item">
            <div class="circle anime4 engr"><div class="circle-inner">情シス</div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 works bg-birthday-color-sub">
      <div class="grid waku">
        <div class="col-12">
          <h2>About</h2>
        </div>
        <div class="about" style="margin: auto">
          <p style="display:inline-block;vertical-align:top;margin: 0">
            <nuxt-img class="" width="112" src="/naoki_makita.jpg" style="object-fit: cover;border-radius: 1rem;" loading="lazy" alt="header-img" />
          </p>
          <br class="display-none-pc">
          <div class="about-div" style="display:inline-block;vertical-align:top">
            <h3 class="col-12">
              マキタ　ナオキ
            </h3>
            <div class="col-12">
              <p><a href="mailto:contact@klavier.page" target="_blank" rel="noopener"><span style="text-decoration: underline">ご用の際はメールまで</span></a><br></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal" appear v-if="modal">
      <div class="modal modal-overlay" @click.self="closeModal">
        <div class="modal-window" style="max-height: 90vh">
          <div class="modal-header" style="position: relative">
            {{ title }}
            <button @click="closeModal" style="position: absolute;right: .6rem;top: .6rem;background: none;border: none;color: #555;cursor: pointer">×</button>
          </div>
          <div class="modal-content" style="overflow-y: auto;max-height: 80vh;">
            <div class="">
              <div class="">
                <div style="position: relative;text-align: center">
                  <nuxt-img class="item-img" :width="img_w_modal" :height="img_h_modal" :src="img" style="object-fit: cover;max-width: 100%" loading="lazy" alt="header-img" />
                </div>
              </div>
              <div class="" v-html="text">
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img_w_item: "1024px",
        img_h_item: "1024px",
        img_w_modal: "1024px",
        img_h_modal: "1024px",
        modal: false,
        img: undefined,
        vw: undefined,
        title: "",
        item: [
          {id: 0, title: "保守・運用", img: "/i1.jpg",
          text: "<h3>◆&nbsp仕事内容</h3><p>人数が多くはない会社の社内SEをしています。兼Webエンジニア</p><h3>◆&nbspできること（システム）</h3><p>リモート環境構築／システム機器購入／社内サーバーの管理／Gmailなどの外部アプリやPC、社内システムの使い方レクチャー・不具合対処／Youtube Live配信</p><h3>◆&nbsp楽しみ</h3><p>「この作業、もっと楽にできないかな？」の解決を楽しみにしています。<br>その為には、社内ほか事業部の情報インプットが大事です。部分最適にならないように気を付けつつ、素早くシステム改善ができることが社内SEの強みだと考えています。</p>"
          },
          {id: 1, title: "カスタマー対応", img: "/i2.jpg",
          text: "<h3>◆&nbsp仕事内容</h3><p>電話応対・メール応対・来客応対を週10時間程度行っています。<br>主にWebページの使い方や不明点の説明、決済などによるシステムエラーの状況伺いなどをしますが、事業にまつわるものも対応可能な範囲のものは回答します。<br>問合せの原因がシステム不具合だった場合は、お客様への対応と共に、Webシステム(CakePHP , Ruby on Rails , Vue.js)の改修やMySQLなどのデータ操作、再発防止の対策をします。</p><h3>◆&nbsp楽しみ</h3><p>お客様の作業時間を減らすことを楽しみにしています。<br>サポートを受ける場合、大体、お客様は何かに困っています。そのお客様に対して、「その情報はここから閲覧できますよ」などのピンポイントな解決方法だけでなく、「ここに困るということは、こういう情報も足りてないのでは？」など＋αでお手伝いし、お客様の無駄な時間を減らすことに試行錯誤しています。</p>"
          },
          {id: 2, title: "社内システム改修", img: "/i3.jpg",
          text: "<h3>◆&nbsp仕事内容</h3><p>FileMakerを用いた業務改善を行っています。<a href='https://www.claris.com/ja/blog/2021/claris-engage-2020-nextgen-2' target='_blank' rel='noreferrer'>ClarisEngage2020登壇</a></p><p>ほかGASを用いた社内DXなど</p>"
          },
          {id: 3, title: "イベントスペース(停止中)", img: "/p1.png",
          text: "<p>ROLE：Design／Coding／Writing<br>URL：<a href='https://sv-rikugien.klavier.page/'>https://sv-rikugien.klavier.page/</p>"
          },
          {id: 4, title: "音楽教室", img: "/p2.png",
          text: "<p>ROLE：Coding<br>URL：<a href='https://cjmtokyo.com/' target='_blank' rel='noreferrer'>https://cjmtokyo.com/</p>"
          },
          {id: 5, title: "宿泊所", img: "/p3.png",
          text: "<p>ROLE：Design／Coding<br>URL：<a href='https://launion.page/'target='_blank' rel='noreferrer'>https://launion.page/</p>"
          },
          {id: 6, title: "医療事務サポート", img: "/p4.png",
          text: "<p>ROLE：Design／Coding<br>URL：<a href='https://accueil-med.jp/'target='_blank' rel='noreferrer'>https://accueil-med.jp/</p>"
          },
          {id: 7, title: "動画配信", img: "/p5.png",
          text: "<p>ROLE：Design／Coding<br>URL：<a href='https://fom-create.com/'target='_blank' rel='noreferrer'>https://fom-create.com/</p>"
          },
          {id: 8, title: "ピアノ曲事典", img: "/p6.png",
          text: "<p>ROLE：Coding<br>URL：<a href='https://enc.piano.or.jp/'target='_blank' rel='noreferrer'>https://enc.piano.or.jp/</p>"
          },
        ],
      }
    },
    methods: {
      openModal(number) {
        this.modal = true;
        this.title = this.item[number]["title"];
        this.img = this.item[number]["img"];
        this.text = this.item[number]["text"]
      },
      closeModal() {
        this.modal = false
      }
    },
    created() {
      const mailgo_config = {
        tel: false,
        sms: false,
        dark: true,
        actions: {
          yahoo: false,
          outlook: false,
        }
      }
      mailgo(mailgo_config);
    },
    mounted() {
      this.vw = window.innerWidth;
      if(this.vw > 768){
        this.img_w_item = 240;
        this.img_w_modal = 360;
      }
      else{
        this.img_w_item = parseInt( this.vw * 2 / 3)
        this.img_w_modal = this.img_w_item
      }
      this.img_h_item = parseInt(this.img_w_item * 2 / 3)
      this.img_h_modal = "auto"
      this.img_w_header_img = this.vw;
    },
    computed: {
      in_house_work_item: function(){
        return this.item.filter(function(data){
          return data['id'] < 3
        })
      },
      private_work_item: function(){
        return this.item.filter(function(data){
          return data['id'] > 2
        })
      },
    }
  }
</script>

<style>
.logo {
  margin: auto;
  width: 100%;
  height: 100vh;
  position: relative;
}

.logo-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  width: 100vw;
}

.font-kelly {
  font-family: 'Kelly Slab', cursive;
}

.bg-birthday-color {
  background: #7d7b83;
}

.bg-birthday-color-sub {
  background: #f0e3ff;
}

#page .item {
  text-decoration: underline;
  margin: 1rem 0;
}

.waku {
  max-width: 780px;
  margin: auto;
}


h1 {
  font-family: 'Kelly Slab', cursive;
  text-align: center;
  margin: 0;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: .2rem;
  color: #484554;
}

.h1-p {
  font-family: 'Kelly Slab', cursive;
  color: #999;
  letter-spacing: .3rem;
  text-align: center;
  margin: 0;
}

.works {
  padding: 3vh 0 20vh 0;
}

.about {
  text-align: center;
}

h2 {
  font-family: 'Kelly Slab', cursive;
  text-align: center;
  letter-spacing: .5rem;
}

.item-img {
  margin-bottom: .3rem;
}

.circle {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    margin: auto;
}

.html {
  background: #DD4B25;
}

.html::before , .html::after{
  background: #E4A28D;
}

.rails {
  background: #C60000;
}

.rails::before , .rails::after{
  background: #FFE6D9;
}

.nuxt {
  background: #00BF8A;
}

.nuxt::before , .nuxt::after{
  background: #CCFBE5;
}

.filemaker {
  background: #438BAA;
}

.filemaker::before , .filemaker::after{
  background: #E0EEEB;
}

.gas {
  background-image: radial-gradient(circle at -16.45% 25.82%, #E34133 0, #E34133 10%, #4081EC 20%, #E34133 30%, #F3B604 40%, #32A350 50%, #4081EC 60%, #E34133 70%, #F3B604 80%, #32A350 90%, #4081EC 100%);
}

.gas::before , .gas::after{
  background-image: radial-gradient(circle at -16.45% 25.82%, #FFEECB 0, #D8F9DA 10%, #E7EFFF 20%, #FFE5DB 30%, #FFEECB 40%, #D8F9DA 50%, #E7EFFF 60%, #FFE5DB 70%, #FFEECB 80%, #D8F9DA 90%, #E7EFFF 100%);
}

.sql {
  background: #F0951F;
}

.sql::before , .sql::after{
  background: #FFEBCD;
}

.gcp {
  background: #316BDF;
}

.gcp::before , .gcp::after{
  background: #EBEEFF;
}

.live {
  background: #FF0000;
}

.live::before , .live::after{
  background: #FFE6D9;
}

.isms {
  background: #003399;
}

.isms::before , .isms::after{
  background: #CAC8FF;
}

.engr {
  background: #FFB566;
}

.engr::before , .engr::after{
  background: #FFF6E7;
}






.circle::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -60px;
    width: 120px;
    height: 120px;
    transform-origin: right 60px;
    z-index: 2;
}

.circle::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 60px;
    width: 120px;
    height: 120px;
    transform-origin: left 60px;
    z-index: 3;
}

.anime1::before {
  animation: rotate-circle-left-110 6s linear infinite;
}
.anime1::after {
  animation: rotate-circle-right-110 6s linear infinite;
}

.anime2::before {
  animation: rotate-circle-left-170 6s linear infinite;
}
.anime2::after {
  animation: rotate-circle-right-170 6s linear infinite;
}

.anime3::before {
  animation: rotate-circle-left-240 6s linear infinite;
}
.anime3::after {
  animation: rotate-circle-right-240 6s linear infinite;
}

.anime4::before {
  animation: rotate-circle-left-240 6s linear infinite;
}
.anime4::after {
  animation: rotate-circle-right-240-o 6s linear infinite;
}



.circle .circle-inner {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 62px;
    padding-top: 38px;
    background: #fff;
    border-radius: 50%;
    z-index: 4;
}

.modal-overlay {
  align-items: center;
  background: rgba(0, 0, 0, .5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 5vh 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
}
.modal-window {
  background: #FFF;
  border-radius: 4px;
  overflow: hidden;
  width: 90%;
  margin: auto;
}
.modal-content {
  padding: .5rem 1rem;
}
.modal-header {
  background: #CEE8E4;
  padding: 10px;
  text-align: left;
}
.modal-enter-active , .modal-leave-active {
  transition: opacity .4s;
}
.modal-enter-active .modal-window {
  transition: opacity .4s, transform .4s;
}
.modal-leave-active .modal-window {
  transition: opacity .4s, transform .4s;
}
.modal-leave-active {
  transition: opacity .6s ease .4s;
}
.modal-enter , .modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-content p {
  padding-bottom: 1rem;
}


@keyframes rotate-circle-right-110 {
    0%   {
        transform: rotate(0deg);
    }
    30%  {
        transform: rotate(110deg);
    }
    100% {
        transform: rotate(110deg);
    }
}

@keyframes rotate-circle-right-170 {
    0%   {
        transform: rotate(0deg);
    }
    30%  {
        transform: rotate(170deg);
    }
    100% {
        transform: rotate(170deg);
    }
}

@keyframes rotate-circle-right-240 {
    0%   {
        transform: rotate(0deg);
        background: #E0EEEB;
    }
    22.5%  {
        transform: rotate(180deg);
        background: #E0EEEB;
    }
    22.6% {
        transform: rotate(0deg);
        background: #438BAA;
    }
    100% {
        transform: rotate(0deg);
        background: #438BAA;
    }
}

@keyframes rotate-circle-right-240-o {
    0%   {
        transform: rotate(0deg);
        background: #FFF6E7;
    }
    22.5%  {
        transform: rotate(180deg);
        background: #FFF6E7;
    }
    22.6% {
        transform: rotate(0deg);
        background: #FFB566;
    }
    100% {
        transform: rotate(0deg);
        background: #FFB566;
    }
}

@keyframes rotate-circle-left-240 {
    0%   { transform: rotate(0deg); }
    22.5%  { transform: rotate(0deg); }
    30% { transform: rotate(60deg); }
    100% { transform: rotate(60deg); }
}

@media (max-width: 768px) {
}

@media (min-width: 769px) {
  .about {
    text-align: left;
  }

  .about-div {
    margin-left: 1rem
  }
  h1 {
    font-size: 3rem;
    letter-spacing: 1rem;
  }
  .logo {
    height: 700px;
  }

  #page .item {
    padding: 10px;
  }


  .modal-window {
    max-width: 768px;
    width: 100%;
  }

  .modal-content {
    padding: 1rem 3rem;
  }
}

</style>


