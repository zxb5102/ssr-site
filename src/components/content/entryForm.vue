<template>
  <div class="entry-form">
    <el-card class="box-card" v-if="!isSubmit">
      <div slot="header">
        <!-- <h3>有意入驻中航长江设计师产业园</h3> -->
        <h3>入驻申请表</h3>
      </div>
      <el-form ref="form" :model="form" label-width="95px" label-position="left" :rules="rules">
        <el-form-item label="入驻园区" prop="parkId">
          <el-radio v-model="form.parkId" label="2" @change="handlePark">武汉</el-radio>
          <el-radio v-model="form.parkId" label="1" @change="handlePark">南昌</el-radio>
        </el-form-item>
        <el-form-item label="类型" prop="showRegister">
          <el-radio v-model="form.showRegister" label=true @change="handleRegisterRadio">公司</el-radio>
          <el-radio v-model="form.showRegister" label=false @change="handleRegisterRadio">团队</el-radio>
        </el-form-item>
        <el-form-item label="注册地点" v-if="form.showRegister == 'true'" prop="register">
          <el-input v-model="form.register" type="textarea" :autosize="{ minRows: 1}"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="name" v-if="form.showRegister != ''&&form.showRegister=='true'">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="团队名称" prop="name" v-if="form.showRegister != ''&&form.showRegister=='false'">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所属行业" prop="industry">
          <el-input v-model="form.industry" type="textarea" :autosize="{ minRows: 2}"></el-input>
        </el-form-item>
        <el-form-item label="人员规模" prop="scale">
          <el-input v-model="form.scale" type="textarea" :autosize="{ minRows: 1}"></el-input>
        </el-form-item>
        <el-form-item label="现所在地区" prop="address">
          <el-input v-model="form.address" type="textarea" :autosize="{ minRows: 2}"></el-input>
        </el-form-item>
        <el-form-item label="具备优势" prop="advantage">
          <el-input v-model="form.advantage" type="textarea" :autosize="{ minRows: 4}"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="contact">
          <el-input v-model="form.contact" type="textarea" :autosize="{ minRows: 1}"></el-input>
        </el-form-item>
        <div v-bind:class="[isError ? 'errorShow' : '', 'error-tab' ,'el-alert' ,'el-alert--error']" class="">
          <i class="el-alert__icon el-icon-error"></i>
          <div class="el-alert__content">
            <span class="el-alert__title">{{errorMsg}}</span>
          </div>
        </div>
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
      </el-form>
    </el-card>
    <div v-else class="success-info">
      <el-card class="s-card">
        <div class="success-card">
          <svg t="1521700856002" class="icon" style="" viewBox="0 0 1756 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1444" xmlns:xlink="http://www.w3.org/1999/xlink" width="342.96875" height="200">
            <path d="M897.903543 98.746514c-211.933257 0-383.740343 171.805257-383.740343 383.740343 0 211.933257 171.807086 383.740343 383.740343 383.740343s383.740343-171.807086 383.740343-383.740343C1281.643886 270.551771 1109.8368 98.746514 897.903543 98.746514zM848.837486 634.216229l-160.098743-160.120686 30.145829-30.145829 129.952914 129.974857 228.094171-228.094171 30.145829 30.145829L848.837486 634.216229z" p-id="1445" fill="#0ec469"></path>
          </svg>
          <span>
            您的申请提交成功，
            <span style="color:red">{{time}}</span>秒后返回首页
          </span>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
var axios = require("axios");
if (ISDEV) {
  var MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);
  mock.onPost("/Enter/Create").reply(200, {
    code: 0,
    msg: "出现错误"
    // code:0
  });
}
export default {
  data() {
    return {
      time: 3,
      isSubmit: false,
      isError: false,
      errorMsg: "服务器繁忙请稍后重试",
      form: {
        showRegister: "",
        parkId: "",
        name: "",
        industry: "",
        scale: "",
        register: "",
        address: "",
        advantage: "",
        contact: ""
      },
      rules: {
        showRegister: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        parkId: [
          {
            required: true,
            message: "该项为必填项"
            // trigger: "focus"
          }
        ],
        industry: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        scale: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        register: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        advantage: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ],
        contact: [
          {
            required: true,
            message: "该项为必填项",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    handlePark() {
      this.$refs["form"].validateField("parkId");
    },
    handleRegisterRadio() {
      this.$refs["form"].validateField("showRegister");
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: "/Enter/Create",
            data: {
              ParkId: this.form.parkId,
              Name: this.form.name,
              Trade: this.form.industry,
              Scale: this.form.scale,
              HasRegistered:
                this.form.showRegister.trim() == "true" ? true : false,
              RegisterPlace:
                this.form.showRegister.trim() == "true"
                  ? this.form.register.trim()
                  : "",
              Place: this.form.address,
              Advantage: this.form.advantage,
              Phone: this.form.contact
            }
          })
            .then(resp => {
              var code = resp.data.code;
              if (code == 1) {
                this.errorMsg = resp.data.msg;
                this.isError = true;
              } else {
                this.errorMsg = "";
                this.isError = false;
                this.isSubmit = true;
                window.setInterval(() => {
                  this.time--;
                  if (this.time == 0) {
                    this.$router.push("index");
                  }
                }, 1000);
              }
            })
            .catch(error => {
              console.log(error);
              if (error.request) {
                this.errorMsg = "服务器繁忙,请稍后重试";
              } else if (error.response) {
                this.errorMsg = "服务器升级中,请联系管理员";
              }
              this.isError = true;
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.entry-form {
  font-size: 14px;
  background-color: white;
}
.box-card {
  max-width: 800px;
  margin: auto;
  @media (min-width: 992px) {
    position: relative;
    top: 20px;
  }
}
.error-tab {
  margin-bottom: 22px;
  display: none;
}
.errorShow {
  display: flex;
}
.s-card {
  max-width: 500px;
  margin: auto;
  position: relative;
  top: 30px;
}
.success-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    height: 150px;
    width: 150px;
  }
}
</style>


