<template>
<div>
  <!-- header -->
  <b-navbar variant="info" type="dark">
    <b-navbar-brand href="#">
      <!-- <img src="../assets/images/icon.png" class="d-inline-block align-top mr-1" alt="BV"> -->
        保麗淨名單系統
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item  @click='logout()'>登出</b-nav-item>
      </b-navbar-nav>
  </b-navbar>
  <div class="manContainer p-3">
  <!-- login pannel -->
    <form class='sPannel mx-auto my-5 border p-4 rounded shadow bg-white' v-if='videosForDisplay==null'>
      <h3 class='text-center'>登入系統</h3>
      <hr>
      <div class="form-group ">
        <label for="exampleInputEmail1">帳號</label>
        <input type="text" class="form-control"  v-model="acount">
        <small class="form-text text-muted">請輸入包含區碼不含標點符號的診間電話，ex: 0212345678</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密碼</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="" v-model="password">
      </div>
      <button type="submit" class="btn btn-info ml-auto w-100"  @click.prevent='login'>登入</button>
    </form>
    <!-- 診間資料 -->
    <div class='sPannel mx-auto my-5 border p-4 rounded shadow bg-white' v-if='hospital_info!==null'>
      <h3 class="text-center">診間資訊</h3>
      <table class="table mt-3 " responsive>
        <tbody>
          <tr>
            <td class='text-right text-info'><i class="fas fa-hospital"></i></td>
            <td>{{hospital_info.hospital}}</td>
          </tr>
          <tr>
            <td class='text-right text-info'><i class="fas fa-user-md"></i></td>
            <td>{{hospital_info.doctor}} 醫生</td>
          </tr>
          <tr>
            <td class='text-right text-info'><i class="fas fa-user"></i></td>
            <td>{{hospital_info.commissioner}} 專員</td>
          </tr>
          <tr>
            <td class='text-right text-info'><i class="fas fa-map-marker-alt"></i></td>
            <td>{{hospital_info.address}}</td>
          </tr>
          <tr>
            <td class='text-right text-info'><i class="fas fa-phone"></i></td>
            <td>{{hospital_info.hospitalTel}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 影片次數統計 -->
    <div class='sPannel mx-auto my-5 border p-4 rounded shadow bg-white'  v-if='videosForDisplay!==null'>
      <h3 class="text-center">影片次數統計</h3>
      <table class="table mt-4">
        <tbody>
          <tr class='table-info'>
            <td colspan="2">保麗淨</td>
          </tr>
          <tr>
            <td class='text-info'>保麗淨使用方式說明 (台語版)</td>
            <td>{{videosForDisplay.polident_instructions_tw}}</td>
          </tr>
          <tr>
            <td class='text-info'>保麗淨使用方式說明 (國語版)</td>
            <td>{{videosForDisplay.polident_instructions_zh}} </td>
          </tr>
          <tr>
            <td class='text-info'>活動假牙配戴經驗分享</td>
            <td>{{videosForDisplay.polident_experience}} </td>
          </tr>
          <tr class='table-info'>
            <td colspan="2">舒酸定</td>
          </tr>
          <tr>
            <td class='text-info'>DISCOVERY探索頻道 X 舒酸定</td>
            <td>{{videosForDisplay.sensodyne_discovery}}</td>
          </tr>
          <tr>
            <td class='text-info'>舒酸定速效修護作用機轉</td>
            <td>{{videosForDisplay.sensodyne_technology}}</td>
          </tr>
          <tr class='table-info'>
            <td colspan="2">牙周適</td>
          </tr>
          <tr>
            <td class='text-info'>牙周適修護作用機轉說明</td>
            <td>{{videosForDisplay.parodontax}}</td>
          </tr>
          <tr class='table-warning'>
            <td class=''>總觀看次數</td>
            <td>{{videoCountForDisplay}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- man list -->
    <div class="bPannel mx-auto my-5 border p-4 rounded shadow bg-white" v-if='manList!==null'>
      <h3 class="text-center">填表名單</h3>
      <div class="table-responsive">
        <table class='table mt-3 table-striped'>
          <tbody> 
            <tr class='table-info'>
              <td>診所</td>
              <td>姓名</td>
              <td>性別</td>
              <td>年次</td>
              <td>電話</td>
              <td>聯絡時間</td>
              <td>填表時間</td>
              <td>簽名檔</td>    
            </tr>
            <tr v-for='(item,index) in manList' :key='index'>
              <td>{{item.hospital}}</td>
              <td>{{item.userName}}</td>
              <td>{{item.userGender}}</td>
              <td>{{item.userBirth}}</td>
              <td>{{item.userPhone}}</td>
              <td>{{item.userContactTime}}</td>
              <td>{{item.date.split(' ')[0]}}</td>
              <td><div v-b-modal.modal1 class="btn btn-outline-info btn-sm" @click='downloadSign(item.userName,item.sign)'>檢視圖檔</div></td>    
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="my-3 mx-auto bPannel p-4 rounded shadow bg-white  border" v-if='false'>
      <div class="my-3">
        <div class=''>
          <b-table striped hover :items="hospitalList"></b-table>
        </div>
      </div>
    </div>
    <!-- <div class="hospital" v-for='(data,index) in hospitalList_config' :key='index'>
        {{ index }}
        {{ data.commissioner }}
      </div> -->

    <!-- <input type="button" value="setup" @click='setUp'> -->
    <!-- Modal Component -->
    <b-modal id="modal1" :title="modal.title" ok-only lazy>
      <!-- <p class="my-4">Hello from modal!</p> -->
      <img :src="modal.imgUrl" alt="" class='w-100'>
    </b-modal>
  </div>  
</div>
</template>

<script>
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faKey, faHospital, faUserMd, faUser, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faKey, faHospital, faUserMd, faUser, faMapMarkerAlt, faPhone);
dom.watch();

export default {
  name: "SetUp",
  data() {
    return {
      acount: "",
      password: "",
      hospital_info: null,
      hospitalList: [
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "佑誠牙醫診所",
          doctor: "范芳豪",
          zip: "603",
          address: "嘉義縣梅山鄉中山路93號",
          hospitalTel: "05-2624545"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "林信聰牙醫診所",
          doctor: "林信聰",
          zip: "640",
          address: "雲林縣斗六市太平路160號",
          hospitalTel: "05-5338776"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "楊家榮牙醫診所",
          doctor: "楊家榮",
          zip: "632",
          address: "雲林縣虎尾鎮中正路24號",
          hospitalTel: "05-6322370"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "鼎好牙醫診所",
          doctor: "張明璁",
          zip: "412",
          address: "台中市大里區中興路一段265號",
          hospitalTel: "04-24953100"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "仁和牙醫診所",
          doctor: "蕭錦河",
          zip: "402",
          address: "台中市南區仁和路222號",
          hospitalTel: "04-22877843"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "精美牙醫診所",
          doctor: "張哲源",
          zip: "500",
          address: "彰化市南瑤路327巷26號",
          hospitalTel: "04-7249197"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "博仁牙醫診所",
          doctor: "黃純雄",
          zip: "500",
          address: "彰化市永安街183號",
          hospitalTel: "04-7247802"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "世華牙醫診所",
          doctor: "劉忠孔",
          zip: "403",
          address: "台中市西區民權路187號",
          hospitalTel: "04-22295003"
        },
        {
          area: "中區",
          commissioner: "邵惠鈴",
          hospital: "群欣牙醫診所",
          doctor: "周菀吟",
          zip: "500",
          address: "彰化市中正路一段217號",
          hospitalTel: "04-7278188"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "弘光老人醫院",
          doctor: "廖昱豪",
          zip: "406-H",
          address: "台中市北屯區太原路三段1141號",
          hospitalTel: "04-22390600"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "新光牙醫診所",
          doctor: "黃熙穆",
          zip: "411",
          address: "台中市太平區振福路216號",
          hospitalTel: "04-23951466"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "信安牙醫診所",
          doctor: "許芳瑞",
          zip: "542",
          address: "南投縣草屯鎮中山街281號",
          hospitalTel: "049-2333609"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "忠信牙醫診所",
          doctor: "史忠泉",
          zip: "411",
          address: "台中市太平區坪林里中山路1段382號",
          hospitalTel: "04-23925668"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "長青牙醫診所",
          doctor: "汪麗華",
          zip: "420",
          address: "台中市豐原區東勢里中山路450號",
          hospitalTel: "04-25268808"
        },
        {
          area: "中區",
          commissioner: "謝螢玫",
          hospital: "立宇牙醫診所",
          doctor: "陳敏欽",
          zip: "434",
          address: "台中市龍井區龍新路153巷15號",
          hospitalTel: "04-26356988"
        },
        {
          area: "中區",
          commissioner: "謝螢玫",
          hospital: "禾諺牙醫診所",
          doctor: "賴彥宏",
          zip: "404",
          address: "台中市北區北屯路61號",
          hospitalTel: "04-22347580"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "澤任(羅大維)牙醫診所",
          doctor: "羅大維",
          zip: "600",
          address: "嘉義市仁愛路349號",
          hospitalTel: "05-2230800"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "凱悅牙醫診所",
          doctor: "",
          zip: "406",
          address: "台中市北屯區九龍街104號",
          hospitalTel: "04-22381908"
        },
        {
          area: "中區",
          commissioner: "林雨潔",
          hospital: "益新牙醫診所",
          doctor: "",
          zip: "406",
          address: "台中市北屯區北屯路441-11號",
          hospitalTel: "04-22461388"
        },
        {
          area: "南區",
          commissioner: "郭怡吟",
          hospital: "蘇牙醫診所",
          doctor: "蘇茂章",
          zip: "701",
          address: "台南市東區龍山里東門路二段88號",
          hospitalTel: "06-2369908"
        },
        {
          area: "南區",
          commissioner: "郭怡吟",
          hospital: "天仁牙醫診所",
          doctor: "吳瑞豐",
          zip: "700",
          address: "台南市中西區安里保安路63號",
          hospitalTel: "06-2268228"
        },
        {
          area: "南區",
          commissioner: "郭怡吟",
          hospital: "仁愛牙醫診所",
          doctor: "施振中",
          zip: "744",
          address: "台南市新市區新市里光華街181號",
          hospitalTel: "06-5995555"
        },
        {
          area: "南區",
          commissioner: "郭怡吟",
          hospital: "臻品牙醫診所",
          doctor: "李忠慶",
          zip: "700",
          address: "台南市中西區健康路一段12號",
          hospitalTel: "06 214 8611"
        },
        {
          area: "南區",
          commissioner: " ",
          hospital: "凱悅牙醫診所",
          doctor: "蔡岳峯",
          zip: "741",
          address: "台南市善化區和平路109號",
          hospitalTel: "06-5856988"
        },
        {
          area: "南區",
          commissioner: "郭怡吟",
          hospital: "蔡牙醫診所",
          doctor: "蔡爾翰",
          zip: "734",
          address: "台南市六甲區復興街46 號 ",
          hospitalTel: "06 - 6982033"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "江牙醫診所",
          doctor: "江 育臣",
          zip: "804",
          address: "高雄市鼓山區西藏街255號",
          hospitalTel: "(07)5614690"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "宏杰牙醫診所",
          doctor: "蔡信杰",
          zip: "804",
          address: "高雄市鼓山區鼓山二路98之2號",
          hospitalTel: "07-5312941"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "北益牙醫診所",
          doctor: "陳建富",
          zip: "807",
          address: "高雄市三民區建國三路445號",
          hospitalTel: "07-2154514"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "平安牙醫診所",
          doctor: "陳志賢",
          zip: "900",
          address: "屏東縣屏東市林森路28-4號",
          hospitalTel: "08-7224501"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "博愛牙醫診所",
          doctor: "張怡民",
          zip: "807",
          address: "高雄市三民區吉林街158號1樓",
          hospitalTel: "07-3218666"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "上盛牙醫診所",
          doctor: "",
          zip: "905",
          address: "屏東縣里港鄉里港路41號",
          hospitalTel: "08-7750956"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "健元牙醫診所",
          doctor: "莊世豪",
          zip: "905",
          address: " 屏東縣里港鄉春林村里港路15、17號",
          hospitalTel: " 08-7757180"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "齒時齒刻牙醫診所",
          doctor: "吳源豪",
          zip: "900",
          address: " 屏東縣屏東市安鎮里大豐路9號2樓之1",
          hospitalTel: " 08-7550797"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "祐民牙醫診所",
          doctor: "刁明豪",
          zip: "813",
          address: "高雄市左營區自由二路141號3樓",
          hospitalTel: "07-5563053"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "美濃牙醫診所",
          doctor: "劉威志",
          zip: "843",
          address: "高雄市美濃區中正路二段247號",
          hospitalTel: "07-6820599"
        },
        {
          area: "南區",
          commissioner: "Apo",
          hospital: "繼文牙醫診所",
          doctor: "郭繼文",
          zip: "803",
          address: "高雄市鹽埕區建國四路123號",
          hospitalTel: "07-5320934"
        },
        {
          area: "南區",
          commissioner: "Apo",
          hospital: "樂林牙醫診所",
          doctor: "王聖堯",
          zip: "832",
          address: "高雄市林園區文化街147號",
          hospitalTel: "07-6411765"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "永安牙醫診所",
          doctor: "沈顯堂",
          zip: "521",
          address: "彰化縣北斗鎮中華路33號",
          hospitalTel: "(04)8883020"
        },
        {
          area: "南區",
          commissioner: "蔡瑞欣",
          hospital: "韓牙醫",
          doctor: "韓羽聞",
          zip: "815",
          address: "高雄市大社區三民路249號",
          hospitalTel: "07-3535301"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "基安牙醫診所",
          doctor: "許大春",
          zip: "702",
          address: "台南市南區樹林街二段426號",
          hospitalTel: "(06)2111871"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "聖祥牙醫診所",
          doctor: "吳國平",
          zip: "702",
          address: "台南市南區金華路二段33巷2號",
          hospitalTel: "(06)2652515"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "安德牙醫診所",
          doctor: "黃瑞陽",
          zip: "830",
          address: "高雄市鳳山區五權路87號",
          hospitalTel: "(07)7452123"
        },
        {
          area: "南區",
          commissioner: "梁君玲",
          hospital: "健新牙醫診所",
          doctor: "柯智祥",
          zip: "830",
          address: "高雄市鳳山區五甲三路22號",
          hospitalTel: "(07)8219273"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "杏林牙醫",
          doctor: "李宗沂",
          zip: "600",
          address: "嘉義市吳鳳北路147號",
          hospitalTel: "05-2278218"
        },
        {
          area: "中區",
          commissioner: "沈芯卉",
          hospital: "洪牙醫",
          doctor: "洪榮聰",
          zip: "616",
          address: "嘉義縣新港鄉大興路5號",
          hospitalTel: "05-3743407"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "蔡進富牙醫診所",
          doctor: "蔡進富",
          zip: "220",
          address: "新北市板橋區陽明街283號",
          hospitalTel: "(02)22576535"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "正昌牙醫診所",
          doctor: "楊耀芳",
          zip: "220",
          address: "新北市板橋區裕民街36巷1號",
          hospitalTel: "(02)22572649"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "坤冉牙醫診所",
          doctor: "郭正坤",
          zip: "244",
          address: "新北市林口區中正路143號",
          hospitalTel: "(02)26012321"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "新埔牙醫診所",
          doctor: "陳威橋",
          zip: "220",
          address: "新北市板橋區文化路二段17號",
          hospitalTel: "(02)22519378"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "家德牙醫診所",
          doctor: "葉哲志",
          zip: "220",
          address: "新北市板橋區重慶路308巷10號1樓",
          hospitalTel: "(02)89541305"
        },
        {
          area: "北區 ",
          commissioner: "趙崇貴",
          hospital: "益群牙醫診所",
          doctor: "劉光夏",
          zip: "220",
          address: "新北市板橋區四維路179號",
          hospitalTel: "(02)22598351"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "陽順牙醫診所",
          doctor: "呂子銘",
          zip: "104",
          address: "台北市中山區松江路287之5號1樓",
          hospitalTel: "(02)2516-1652"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "三和牙醫診所",
          doctor: "劉遠灝",
          zip: "104",
          address: "台北市中山區四平街20-8號",
          hospitalTel: "(02)258-15658"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "清新牙醫診所",
          doctor: "劉麗瑰",
          zip: "231",
          address: "新北市新店區寶安街64號",
          hospitalTel: "(02)2910-7886"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "元大牙醫診所",
          doctor: "郭俊訟",
          zip: "247",
          address: "新北市蘆洲區光華路68號1樓",
          hospitalTel: "(02)2531-9288"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "佳恩牙醫診所",
          doctor: "石進財",
          zip: "265",
          address: "宜蘭縣羅東鎮興東南路145號",
          hospitalTel: "(03)956-7323"
        },
        {
          area: "北區 ",
          commissioner: "游蕙綺",
          hospital: "承錡馬楷牙醫診所",
          doctor: "劉承錡",
          zip: "104",
          address: "台北市中山區長春路65號2樓",
          hospitalTel: "(02) 2562-2265"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "專加牙醫診所",
          doctor: "詹明哲",
          zip: "114",
          address: "台北市內湖區康寧路一段73號",
          hospitalTel: "(02)87928426"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "百福牙醫診所",
          doctor: "鄭鳴岱",
          zip: "206",
          address: "基隆市七堵區福二街242巷2號",
          hospitalTel: "(02)24514436"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "嘉仁牙醫診所",
          doctor: "劉秉嘉",
          zip: "221",
          address: "新北市汐止區大同路2段517號",
          hospitalTel: "(02)26412171"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "江北牙醫診所",
          doctor: "翁詩淦",
          zip: "221",
          address: "新北市汐止區大同路2段434號2樓",
          hospitalTel: "(02)26435621"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "唯真牙醫診所",
          doctor: "朱健銘",
          zip: "221",
          address: "新北市汐止區福德一路113-1號",
          hospitalTel: "(02)26958528"
        },
        {
          area: "北區 ",
          commissioner: "邱彥蓁",
          hospital: "德惠牙醫診所",
          doctor: "陳怡良",
          zip: "221",
          address: "新北市汐止區忠孝東路384號",
          hospitalTel: "(02)26484564"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "慶祥牙醫診所",
          doctor: "黃至熒",
          zip: "238",
          address: "新北市樹林區樹新路40號",
          hospitalTel: "(02)26829298"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "冠倫牙醫診所",
          doctor: "王耀州",
          zip: "242",
          address: "新北市新莊區中華路一段32號",
          hospitalTel: "(02)22762488"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "仁和牙醫診所",
          doctor: "趙德三",
          zip: "236",
          address: "新北市土城區中央路二段223號之1",
          hospitalTel: "(02)22607442"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "又怡牙醫診所",
          doctor: "王清水",
          zip: "238",
          address: "新北市樹林區中山路一段93號",
          hospitalTel: "(02)26872527"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "天華牙醫診所",
          doctor: "林威宏",
          zip: "238",
          address: "新北市土城區中央路一段264號",
          hospitalTel: "(02)26814827"
        },
        {
          area: "北區 ",
          commissioner: "邱繼弘",
          hospital: "富邦牙醫診所",
          doctor: "林明堂",
          zip: "242",
          address: "新北市新莊區幸福路580號1樓",
          hospitalTel: "(02)29911325"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "天津牙醫診所",
          doctor: "戴意恩",
          zip: "106",
          address: "台北市大安區忠孝東路三段86號1樓",
          hospitalTel: "(02)27524523"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "愛育牙醫診所",
          doctor: "李湧泉",
          zip: "106",
          address: "台北市大安區復興南路二段193巷7號1樓",
          hospitalTel: "(02)27059704"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "雅品牙醫診所",
          doctor: "王淑玲",
          zip: "106",
          address: "台北市大安區仁愛路四段101號3樓之1",
          hospitalTel: "(02)27319155"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "守禮牙醫診所",
          doctor: "黃守禮",
          zip: "106",
          address: "台北市大安區大安路二段17號",
          hospitalTel: "(02)27042857"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "泰福牙醫診所",
          doctor: "黃書福",
          zip: "106",
          address: "台北市大安區泰順街60巷8號3樓",
          hospitalTel: "(02)23630318"
        },
        {
          area: "北區 ",
          commissioner: "許綵庭",
          hospital: "西寧安泰牙醫診所",
          doctor: "許 義正",
          zip: "103",
          address: "台北市大同區西寧北路15號1樓",
          hospitalTel: "(02)25527121"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "喜美牙醫診所",
          doctor: "楊立新",
          zip: "112",
          address: "台北市北投區西安街一段353號1樓",
          hospitalTel: "(02)28225171"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "長生堂牙醫診所",
          doctor: "陳國棟",
          zip: "112",
          address: "台北市北投區中央南路一段195號之一",
          hospitalTel: "(02)28943906"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "周欽定牙醫診所",
          doctor: "周欽定",
          zip: "111",
          address: "台北市士林區延平北路五段277號",
          hospitalTel: "(02)28121459"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "德安牙醫診所",
          doctor: "談偉創",
          zip: "112",
          address: "台北市北投區西安街一段367號",
          hospitalTel: "(02)28263931"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "李國屏牙醫診所",
          doctor: "李國屏",
          zip: "112",
          address: "台北市北投區裕民一路47號",
          hospitalTel: "(02)28239912"
        },
        {
          area: "北區 ",
          commissioner: "吳秋枝",
          hospital: "育生牙醫診所",
          doctor: "林昱璿",
          zip: "111",
          address: "台北市士林區中山北路五段699巷2-1號",
          hospitalTel: "(02)28313677"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "瑞樺牙醫診所",
          doctor: "張永治",
          zip: "234",
          address: "新北市永和區中正路35號",
          hospitalTel: "(02)29486022"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "瑞光牙醫診所",
          doctor: "王溫勝",
          zip: "235",
          address: "新北市中和區中興街134號",
          hospitalTel: "(02)22422130"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "漢聲牙醫診所",
          doctor: "許獻忠",
          zip: "234",
          address: "新北市永和區中正路547號",
          hospitalTel: "(02)29271385"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "晶品牙醫診所",
          doctor: "陳正忠",
          zip: "116",
          address: "台北市文山區羅斯福路五段244號",
          hospitalTel: "(02)86637900"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "喜田牙醫診所",
          doctor: "李振中",
          zip: "234",
          address: "新北市永和區中正路491號",
          hospitalTel: "(02)29299168"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "保福牙醫診所",
          doctor: "鄭宗明",
          zip: "234",
          address: "新北市永和區保福路一段44號",
          hospitalTel: "(02)29214641"
        },
        {
          area: "北區 ",
          commissioner: "林士軒",
          hospital: "鴻宜牙醫診所",
          doctor: "柳宜伶",
          zip: "235",
          address: "新北市中和區南山路160號",
          hospitalTel: "(02)22459088"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "誠泰牙醫診所",
          doctor: "鄭國成",
          zip: "324",
          address: "桃園縣平鎮區龍南路144號",
          hospitalTel: "(03)4603489"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "雙成牙醫診所",
          doctor: "陳玉玲",
          zip: "302",
          address: "新竹縣竹北市中正東路254號",
          hospitalTel: "(03)6562880"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "長江牙醫診所",
          doctor: "陳憲江",
          zip: "320",
          address: "桃園縣中壢區中山路508號",
          hospitalTel: "(03)4915269"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "康華牙醫診所",
          doctor: "陳 榮塗",
          zip: "302",
          address: "新竹縣竹北市華興街172號",
          hospitalTel: "03-5528098"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "新中興醫院",
          doctor: "朱國威",
          zip: "300",
          address: "新竹市興南街43號",
          hospitalTel: "03-5213163"
        },
        {
          area: "北區 ",
          commissioner: "温純純",
          hospital: "芳林牙醫診所",
          doctor: "林 世岸",
          zip: "310",
          address: "新竹縣竹東鎮長春路一段248號",
          hospitalTel: "03-5104365"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "陳牙醫診所",
          doctor: "陳萬基",
          zip: "325",
          address: "桃園縣龍潭鎮北龍路212號",
          hospitalTel: "(03)4799279"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "立誠牙醫診所",
          doctor: "劉方勝",
          zip: "108",
          address: "台北市萬華區萬大路489號",
          hospitalTel: "(02)23096747"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "大偉牙醫診所",
          doctor: "陳秋彥",
          zip: "330",
          address: "桃園市中山路696號",
          hospitalTel: "(03)3791166"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "東昇牙醫診所",
          doctor: "黃國彬",
          zip: "333",
          address: "桃園縣龜山鄉中興路372-3號",
          hospitalTel: "(03)3501105"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "南港牙醫診所",
          doctor: "詹有德",
          zip: "115",
          address: "台北市南港區研究院路一段11號",
          hospitalTel: "(02)27829777"
        },
        {
          area: "北區 ",
          commissioner: "陳可楹",
          hospital: "微笑牙醫診所",
          doctor: "王鵬飛",
          zip: "338",
          address: "桃園縣蘆竹鄉中正路391號",
          hospitalTel: "(03)3527655"
        }
      ],
      manList: null,
      modal: {
        title: '',
        imgUrl: '',
      },
      videosForDisplay: null,
      videoCountForDisplay: 0,
    };
  },
  computed: {
    hospitalList_config() {
      var newList = {};
      this.hospitalList.forEach((item, index) => {
        newList[this.onlynumber(item.hospitalTel)] = {
          ...item,
          pw: this.onlynumber(item.hospitalTel),
          videos: {
            polident_experience: 0,
            polident_instructions_tw: 0,
            polident_instructions_zh: 0,
            sensodyne_discovery: 0,
            sensodyne_technology: 0,
            parodontax: 0
          },
          videoCount: 0,
          manCount: 0,
          mansArr: []
        };
      });

      return newList;
    },
    
  },
  created() {
    // console.log(this.hospitalList_config);
    // console.log("create");
    // console.log('firebase.apps.length: ', firebase.apps.length);
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
    onlynumber(str) {
      return str.replace(/\D/g, "");
    },
    logout() {
      this.hospital_info = null;
      this.acount = '';
      this.password = '';
      this.manList = null;
      this.videosForDisplay = null;
      alert('成功登出')
    },
    login() {
      if (this.acount == 'admin' && this.password == 'admin') {
        alert('成功登入');
        this.adminLogin();
        return
      }
      this.dataBaseRef = this.database.ref(
        "gsk-video-system/hospitals/" + this.acount
      );
      this.totalDataBaseRef = this.database.ref("gsk-video-system/total");
      let that = this
      this.dataBaseRef.once("value").then(function (data) {
        if (!data.val()) {
          alert('查無此帳號')
          return
        }
        // that.hospitalData = data.val();
        if (that.password !== data.val().pw) {
          alert('密碼錯誤')
        } else {
          alert('成功登入');
          that.hospital_info = data.val();
          that.videoCountForDisplay= that.hospital_info.videoCount;
          that.videosForDisplay= that.hospital_info.videos;
          that.loadManList();
        }
      })
    },
    adminLogin() {
      console.log('admin');
      console.log('loadManList: ');
      let that = this;
      that.manList = [];
      this.database.ref("gsk-video-system/manList/man").once('value', function (snapshot) {
        that.manList = snapshot.val();
      });
      this.database.ref("gsk-video-system/total").once('value', function (snapshot) {
        that.videoCountForDisplay= snapshot.val().videoCount;
        that.videosForDisplay= snapshot.val().videos;
      });
    },
    downloadSign(name, path) {
      let that = this;
      that.modal.imgUrl = '';
      that.modal.title = '';
      this.storage.ref().child(path).getDownloadURL().then(function (url) {
        // // `url` is the download URL for 'images/stars.jpg'

        // // This can be downloaded directly:
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = function (event) {
        //   var blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();
        // Or inserted into an <img> element:
        that.modal.title = name + '的簽名檔';
        that.modal.imgUrl = url;
        // var img = document.getElementById('myimg');
        // img.src = url;
      }).catch(function (error) {
        // Handle any errors
      });
    },
    loadManList() {
      console.log('loadManList: ');
      let manArr = this.hospital_info.manArr;
      let that = this;
      that.manList = [];
      this.database.ref("gsk-video-system/manList/man").once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          if (manArr.indexOf(childKey) != -1) {
            that.manList.push(childSnapshot.val());
          }
          // var childData = childSnapshot.val();
          // ...
        });
      });


    },
    setUp() {
      // let dataBase = this.database.ref(
      //   "gsk-video-system/hospitals/" + this.key
      // );
      let dataBase = this.database.ref("gsk-video-system/hospitals/");
      dataBase.set(this.hospitalList_config).then(() => {
        console.log("set up done");
      });
      // dataBase
      //   .set({
      //     pw: this.key,
      //     hospitalName: "阿忠醫院",
      //     videos: {
      //       polident_experience: 0,
      //       polident_instructions_tw: 0,
      //       polident_instructions_zh: 0,
      //       sensodyne_discovery: 0,
      //       sensodyne_technology: 0,
      //       parodontax: 0
      //     },
      //     mansArr: []
      //   })
      //   .then(() => {
      //     console.log("set up done");
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="sass" scoped>

.sPannel
  width: 100%
  max-width: 450px
.bPannel
  width: 100%
  max-width: 1024px
// .container
//   max-width: 1024px
//   margin: 25px auto
</style>
