<template>
  <div class="home withSkin">
    <div class="popPgae dflexAndCenter" v-if='vid!=""'>
      <div class="container">
        <div class="cloz" @click='vid=""'></div>
        <div class="youtube">
          <youtube :video-id="vid" player-width='100%' player-height='100%' @ended='vid=""' :player-vars="{ autoplay: 1,rel:0} "></youtube>
        </div>
      </div>
    </div>
    <div class="page p-login dflexAndCenter" v-if='pageChannel===1'>
      <div class="container">
        <div class="loginWrap">
          <div class="inputWrap">
            <input type="text" v-model="acount">
            <input type="password"  v-model="password">
            <input type="button" value="" @click='login'>
          </div>
        </div>
      </div>
    </div>
    <div class="page dflexAndCenter" v-if='pageChannel===2'>
      <div class="container">
        <div class="video-menu-title"></div>
        <div class="video-menu">
          <div class="vBtn v1" @click='pageChannel=3'></div>
          <div class="vBtn v2" @click='pageChannel=4'></div>
          <div class="vBtn v3" @click='pageChannel=5'></div>
          <div class="vBtn v4" @click='pageChannel=6'></div>
        </div>
      </div>
    </div>
    <div class="page dflexAndCenter p-video" v-if='pageChannel===3'>
      <div class="container">
        <div class="v-title vt1"></div>
        <div class="youtubeWrap">
          <div class="youTubeBox" @click='playVideo("qWHLWRIoLFk","polident_instructions_tw")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/qWHLWRIoLFk/0.jpg")'>
              <!-- <youtube video-id="qWHLWRIoLFk" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt greenTxt">保麗淨使用方式說明<br>(台語版)</div>
          </div>
          <div class="youTubeBox" @click='playVideo("DxRTSpCUqm8","polident_instructions_zh")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/DxRTSpCUqm8/0.jpg")'>
              <!-- <youtube video-id="DxRTSpCUqm8" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt greenTxt">保麗淨使用方式說明<br>(國語版)</div>
          </div>
          <div class="youTubeBox" @click='playVideo("3nQkijT7bdY","polident_experience")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/3nQkijT7bdY/0.jpg")'>
              <!-- <youtube video-id="3nQkijT7bdY" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt greenTxt">活動假牙配戴經驗分享</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page dflexAndCenter p-video" v-if='pageChannel===4'>
      <div class="container">
        <div class="v-title vt2"></div>
        <div class="youtubeWrap">
          <div class="youTubeBox" @click='playVideo("iDazx8urrok","sensodyne_discovery")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/iDazx8urrok/0.jpg")'>
              <!-- <youtube video-id="iDazx8urrok" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt blueTxt">DISCOVERY探索頻道 X 舒酸定</div>
          </div>
          <div class="youTubeBox" @click='playVideo("jlUbFix3U6s","sensodyne_technology")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/jlUbFix3U6s/0.jpg")'>
              <!-- <youtube video-id="jlUbFix3U6s" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt blueTxt">舒酸定速效修護作用機轉</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page dflexAndCenter p-video" v-if='pageChannel===5'>
      <div class="container">
        <div class="v-title vt3"></div>
        <div class="youtubeWrap">
          <div class="youTubeBox" @click='playVideo("jwYU5QDifHE","parodontax")'>
            <div class="youtube" style='background-image: url("https://img.youtube.com/vi/jwYU5QDifHE/0.jpg")'>
              <!-- <youtube video-id="jwYU5QDifHE" player-width='100%' player-height='100%'></youtube> -->
            </div>
            <div class="txt blueTxt">牙周適修護作用機轉說明</div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="page p-rule dflexAndCenter" v-if='pageChannel===6'>
      <div class="container ">
        <div class="rule"></div>
      </div>
    </div>
    <div class="page p-form " v-if='pageChannel===7'>
      <div class="container">
        <label class='f-agree'>
          <input type="checkbox" v-model='userAgree'>
          <span class='costomInput'></span>
        </label>
        <label class='f-gender-male'>
          <input type="radio"  id="" value='male' v-model='userGender'>
          <span class='costomInput'></span>
        </label>
        <label class='f-gender-female'>
          <input type="radio"  id="" value='female' v-model='userGender'>
          <span class='costomInput'></span>
        </label>
        <input type="text" class='f-name' v-model='userName'>
        <input type="text" class='f-birth' v-model.number='userBirth' placeholder="民國" @keypress="onlyNumber">
        <input type="text" class='f-year' v-model.number='signYear' disabled>
        <input type="text" class='f-month' v-model.number='signMonth' disabled>
        <input type="text" class='f-day' v-model.number='signDay' disabled>
        <input type="text" class='f-phone' v-model='userPhone' @keypress="onlyNumber">
        
        <label class='f-time-1'>
          <input type="radio"  id="" value='09-13' v-model='userContactTime'>
          <span class='costomInput'></span>
        </label>
        <label class='f-time-2'>
          <input type="radio"  id="" value='13-17' v-model='userContactTime'>
          <span class='costomInput'></span>
        </label>
        <label class='f-time-3'>
          <input type="radio"  id="" value='17-21' v-model='userContactTime'>  
          <span class='costomInput'></span>
        </label>
        <vueSignature class='signature' ref="signature"  :sigOption='{backgroundColor:"rgba(255,255,255,0)"}' :w="'728px'" :h="'232px'"></vueSignature> 
        <div class="sendBtn" @click='sendData'></div>
      </div>
    </div>
    <div class="page p-product" v-if='pageChannel===8'>
      <div class="container">

      </div>
    </div>
    <div class="page" v-if='testMode'>
      <div class="container">
        <div class="btnWrap">
          <div class="btn" @click='playVideo("parodontax")'> parodontax</div>
          <div class="btn" @click='playVideo("polident_experience")'> polident_experience</div>
          <div class="btn" @click='playVideo("polident_instructions_tw")'> polident_instructions_tw</div>
          <div class="btn" @click='playVideo("polident_instructions_zh")'> polident_instructions_zh</div>
          <div class="btn" @click='playVideo("sensodyne_discovery")'> sensodyne_discovery</div>
          <div class="btn" @click='playVideo("sensodyne_technology")'> sensodyne_technology</div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="logoRight"></div>
      <div class="logoBr"></div>
      <div class="wording " :class='{"withTxt":pageChannel===8}'></div>
    </div>
    <div class="mainBtnWrap" v-if='pageChannel!==1'>
      <div class="homeBtn" @click='pageChannel=2'></div>
      <div class="prevBtn" @click='pageChannel-=1' v-if='pageChannel>2&&pageChannel<8'></div>
      <div class="nextBtn" @click='pageChannel+=1' v-if='pageChannel<7'></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import { required, minLength, between } from 'vuelidate/lib/validators'


export default {
  name: "home",
  components: {},
  data() {
    return {
      vid: '',
      testMode: false,
      pageChannel: 1,
      acount: "",
      password: "",
      hospitalData: null,
      totalData: null,
      userName: 'archung',
      userPhone: '0926276430',
      userGender: 'male',
      userBirth: '77',
      userContactTime: '13-17',
      userAgree: true,
    };
  },
  computed: {
    signYear() {
      return new Date().getFullYear() - 1911
    },
    signMonth() {
      return new Date().getMonth() + 1
    },
    signDay() {
      return new Date().getDate()
    }
  },
  created() {
    if (!firebase.apps.length) {
      var config = {
        apiKey: "AIzaSyAfSyBKDOds7c5qRLRHHg2Ug3RHLpNj_HE",
        authDomain: "gsk-319c7.firebaseapp.com",
        databaseURL: "https://gsk-319c7.firebaseio.com",
        projectId: "gsk-319c7",
        storageBucket: "gsk-319c7.appspot.com",
        messagingSenderId: "735059452550"
      };
      firebase.initializeApp(config);
    }
    this.database = firebase.database();
    this.storage = firebase.storage();
  },
  methods: {
    playVideo(vid, vName) {
      this.vid = vid;
      if (this.hospitalData) {
        let updates = {}
        updates["/videos/" + vName] = (this.hospitalData.videos[vName]) ? +this.hospitalData.videos[vName] + 1 : 1;
        updates["videoCount"] = (this.hospitalData.videoCount) ? +this.hospitalData.videoCount + 1 : 1;
        this.dataBaseRef.update(updates);

        let updates2 = {}
        updates2["/videos/" + vName] = (this.totalData.videos[vName]) ? +this.totalData.videos[vName] + 1 : 1;
        updates2["videoCount"] = (this.totalData.videoCount) ? +this.totalData.videoCount + 1 : 1;
        this.totalDataBaseRef.update(updates2);
      } else {
        alert("請先登入")
        return
      }
    },
    login() {
      this.dataBaseRef = this.database.ref(
        "gsk-video-system/hospitals/" + this.acount
      );
      this.totalDataBaseRef = this.database.ref("gsk-video-system/total");
      let that = this
      this.dataBaseRef.once("value").then(function (data) {
        console.log(data.val())
        if (!data.val()) {
          alert('查無此帳號')
          return
        }
        if (that.password !== data.val().pw) {
          alert('密碼錯誤')
        } else {
          alert('成功登入');
          that.pageChannel = 2;
          that.connectDataBase();

        }
      })
    },
    onlyNumber($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57)) { // 46 is dot
        $event.preventDefault();
      }
    },
    toNumber(str) {
      return str.replace(/\D/g, "");
    },
    sendData() {
      if (!this.userName || !this.userPhone || !this.userGender || !this.userBirth || !this.userContactTime || !this.userAgree) {
        alert('請完成表單');
        return
      }

      let manId;
      let that = this;
      let manCountDataBase = this.database.ref('/gsk-video-system/manList/manCount');
      let manDataBaseRef = this.database.ref("/gsk-video-system/manList/man/");
      let manPhoneId = this.toNumber(this.userPhone)
      let targetManRef = manDataBaseRef.child(manPhoneId);

      targetManRef.once("value")
        .then(function (snapshot) {
          console.log(snapshot.exists());


          // if (!snapshot.exists()) {
          if (false) {
            alert('您已經填過資料囉');
          } else {

            // 01.上傳照片

            let imageName = manPhoneId + '.png';
            let png = that.$refs.signature.save();

            that.storage.ref('/videoSystemPhotos/' + imageName)
              .putString(png, "data_url")
              .then(function (snapshot) {
                return snapshot.ref.fullPath
              }).then((imgPath) => {
                // 02.上傳資料
                targetManRef.set({
                  hospital: that.hospitalData.hospital,
                  hospitalId: that.toNumber(that.hospitalData.hospitalTel),
                  date: new Date().toLocaleString(),
                  userName: that.userName,
                  userPhone: that.userPhone,
                  userGender: that.userGender,
                  userBirth: that.userBirth,
                  userContactTime: that.userContactTime,
                  userAgree: that.userAgree,
                  sign: imgPath
                });

                // 03. update man count
                manCountDataBase.once('value').then(function (snapshot) {
                  manCountDataBase.set(+snapshot.val() + 1);
                });

                // 03. update hospital manList
                let manArr = that.hospitalData.manArr;
                manArr = (manArr) ? manArr : []
                manArr.push(manPhoneId);
                
                let updates = {}
                updates["manArr"] = manArr;
                updates["manCount"] = manArr.length;
                that.dataBaseRef.update(updates);
              });
          }
        });



    },
    onlynumber(str) {
      return str.replace(/\D/g, '');
    },
    connectDataBase() {
      let that = this
      this.dataBaseRef.on('value', data => {
        that.hospitalData = data.val()
      })
      this.totalDataBaseRef.on('value', data => {
        that.totalData = data.val()
      })
    }
  }
}
</script>
<style scoped lang="sass">
  .youtube
    position: relative
    background-size: cover
    background-position: 50% 50%
    // width: 50%
    &:before
      display: block
      content: ""
      width: 100%
      padding-top: 390 / 640 * 100%
    > *
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
  .greenTxt 
    color:  #238f42
  .blueTxt
    color: #00093b
  =bg($pic-name)
    background-image: url("../assets/images/#{$pic-name}")

  input
    display: block
    padding: 10px 15px
    border: 0
    margin-bottom: 5px
  .btn  
    display: block
    padding: 10px 15px
    cursor: pointer
    // margin-bottom: 5px
    background-color: #eee
  .page
    // padding: 15px
    // margin-bottom: 15px
  .popPgae
    position: fixed
    top: 0
    left: 0
    z-index: 5000
    width: 100%
    height: 100%
    background-color: rgba(black,0.7)
    .container
      width: 70%
      position: relative

    .cloz
      +bg('cloz.png')
      width: 40px
      height: 40px
      position: absolute
      right: 0
      top: -50px


    
  .withSkin
    input
      padding: 10px 15px
      background-color: transparent
      margin-bottom: 0
      font-size: 22px
    .page
      position: relative
      border: 0
      padding: 0
      margin: 0
      z-index: 5
      width: 100vw
      height: 100vh
      overflow: hidden
      .container
        max-width: 95vw 
    .bg
      position: fixed
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      z-index: 1
      background-size: cover
      background-image: url('../assets/images/bg.png')
      .logoRight
        +bg('rtLogo.png')
        width: 311px
        height: 256px
        position: absolute
        top: 0
        right: 0
      .logoBr
        +bg('rbLogo.png')
        position: absolute
        width: 858px
        height: 214px
        bottom: 0
        right: 0
      .wording  
        position: absolute
        left: 15px
        bottom: 15px
        width: 123px
        height: 8px
        +bg('wording.png')
        &.withTxt
          &:after
            position: absolute
            left: 130px
            bottom: 0
            +bg('wording2.png')
            width: 470px
            height: 41px
            content: ''

    .dflexAndCenter
      display: flex
      justify-content: center
      align-items: center

    .p-login
      .loginWrap
        +bg('loginBox.png')
        width: 723px
        height: 587px
        overflow: auto
        .inputWrap
          margin-left: 262px
          margin-top: 185px
          input 

            height: 60px
            margin-left: 69px
            width: 220px
            margin-bottom: 25px
            &[type="button"]
              position: relative
              left: -80px
              top: 17px
    .p-video
      .container
        width: 80%
        position: relative
    .v-title
      position: absolute
      bottom: 100%
      margin-bottom: 15px
      left: 0
      &.vt1
        +bg('logo_1.png')
        width: 271px
        height: 117px
      &.vt2
        +bg('logo_2.png')
        width: 199px
        height: 97px
      &.vt3
        +bg('logo_3.png')
        width: 221px
        height: 81px
    .youtubeWrap
      display: flex
      justify-content: space-between
      > * + *
        margin-left: 25px
      .youTubeBox
        width: 50%
        cursor: pointer
        .txt 
          font-size: 26px
          font-weight: bold
          padding-top: 10px
      
    .video-menu
      display: flex
      flex-wrap: wrap
      justify-content: space-between
    .video-menu-title
      +bg('videoMenu_title.png')
      width: 433px
      height: 52px
      margin-bottom: 20px
      margin-left: 7px

    .vBtn
      width: 265px
      height: 265px
      margin: 7px 7px
      &.v1
        +bg('mBtn_01.png')    
      &.v2
        +bg('mBtn_02.png')
      &.v3
        +bg('mBtn_03.png')
      &.v4
        +bg('mBtn_04.png')
    .mainBtnWrap
      position: fixed
      bottom: 80px
      left: 60px
      z-index: 5
      display: flex
      .homeBtn
        +bg('homeBtn.png')
        width: 61px
        height: 61px  
        margin-right: 25px
      .prevBtn
        +bg('lBtn.png')
        width: 61px
        height: 61px  
        margin-right: 25px
      .nextBtn
        +bg('rBtn.png')
        width: 61px
        height: 61px  
        margin-right: 25px
    .p-rule
      .container
        width: 1020px
        height: 450px
        overflow-y: scroll
        padding-bottom: 50px
      .rule
        width: 1018px
        height: 961px
        +bg('rule.png')
    
    .p-form

      .container
        +bg('form.png')
        width: 1097px
        height: 529px
        margin: 80px auto 
        position: relative
      .signature
        position: absolute
        top: 209px
        left: 3px
        &:after
          content: ''
          position: absolute
          +bg('txt2.png')
          bottom: 5px
          left: 10px
          pointer-events: none
          width: 697px
          height: 35px
      .sendBtn
        position: absolute
        bottom: 0
        right: 0
        cursor: pointer
        +bg('sendBtn.png')
        width: 302px
        height: 67px
      
      .costomInput
        position: absolute
        top: 0
        left: 0
        width: 38px
        height: 38px
        &:after
          opacity: 0
          content: ''
          position: absolute
          width: 18px
          height: 10px
          background: transparent
          top: 7px
          left: 7px
          border: 5px solid #333
          border-top: none
          border-right: none
          transform: rotate(-45deg)
      input:checked + .costomInput:after
        opacity: 1
      input
        font-size: 30px
        width: 300px
        &.f-name
          // border: 1px solid red
          position: absolute
          top: 120px
          left: 130px
        &.f-birth
          // border: 1px solid red
          position: absolute
          top: 120px
          left: 920px
          width: 150px
        &.f-year
          // border: 1px solid red
          position: absolute
          top: 50px
          left: 855px
          width: 80px
          font-size: 26px
          text-align: center
        &.f-month
          // border: 1px solid red
          position: absolute
          top: 50px
          left: 932px
          width: 80px
          font-size: 26px
          text-align: center
        &.f-day
          // border: 1px solid red
          position: absolute
          top: 50px
          left: 1007px
          width: 80px
          font-size: 26px
          text-align: center
        &.f-phone
          // border: 1px solid red
          position: absolute
          top: 481px
          left: 177px
          width: 500px
          font-size: 26px
      label
        position: absolute
        width: 38px
        height: 38px
        display: block
        &.f-agree
          // border: 1px solid red
          top: 0
          left: 2px
        &.f-gender-male
          // border: 1px solid red
          top: 133px
          left: 495px
        &.f-gender-female
          // border: 1px solid red
          top: 133px
          left: 635px
        &.f-time-1
          // border: 1px solid red
          top: 270px
          left: 790px
        &.f-time-2
          // border: 1px solid red
          top: 330px
          left: 790px
        &.f-time-3
          // border: 1px solid red
          top: 388px
          left: 790px
        input
          display: none
    .p-product
      .container
        +bg('price.png')
        width: 1004px
        height: 530px
        margin: 80px auto
</style>
