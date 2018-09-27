<template>
  <div>
    <h1>setUp</h1>
    <input type="text" v-model="key">
    <input type="button" value="setup" @click='setUp'>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SetUp",
  data() {
    return {
      key: "0465465645"
    };
  },
  created() {
    console.log("create");
    console.log('firebase.apps.length: ', firebase.apps.length);
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
  },
  methods: {
    setUp() {
      let dataBase = this.database.ref(
        "gsk-video-system/hospitals/" + this.key
      );
      dataBase
        .set({
          pw: this.key,
          hospitalName: "阿忠醫院",
          videos: {
            polident_experience: 0,
            polident_instructions_tw: 0,
            polident_instructions_zh: 0,
            sensodyne_discovery: 0,
            sensodyne_technology: 0,
            parodontax: 0
          },
          mansArr: []
        })
        .then(() => {
          console.log("set up done");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  

</style>
