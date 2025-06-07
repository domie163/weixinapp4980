<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"200rpx 80rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221221/d43d607ac21d4ea593130b716e7a7795.gif) no-repeat center top / 100% auto,linear-gradient(180deg, rgba(124,210,235,1) 0%, rgba(33,121,222,1) 100%),#2179de","height":"100%"}'>
		<view :style='{"padding":"60rpx 40rpx","boxShadow":"0px 0px 0px #ddd","borderRadius":"12rpx","background":"none","display":"block","width":"100%","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yonghuzhanghao"  type="text"  class="uni-input" name="" placeholder="用户账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yonghuxingming"  type="text"  class="uni-input" name="" placeholder="用户姓名" />
			</view>
			<picker :style='{"boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"24rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'"  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yonghudianhua"  type="text"  class="uni-input" name="" placeholder="用户电话" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"0px solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"0px solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yishengzhanghao"  type="text"  class="uni-input" name="" placeholder="医生账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yishengxingming"  type="text"  class="uni-input" name="" placeholder="医生姓名" />
			</view>
			<picker :style='{"boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"24rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yisheng'"  @change="yishengxingbieChange" :value="yishengxingbieIndex" :range="yishengxingbieOptions">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#698fad","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.yishengdianhua"  type="text"  class="uni-input" name="" placeholder="医生电话" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 20rpx 0","height":"auto"}' v-if="tableName=='yisheng'" @tap="yishengtouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"0px solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"0px solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<picker :style='{"boxShadow":"4rpx 4rpx 0px #2c77cb","margin":"24rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"12rpx","background":"#b5d9f4","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yisheng'"  @change="yishengzhichengChange" :value="yishengzhichengIndex" :range="yishengzhichengOptions">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}' class="uni-input">{{ruleForm.zhicheng?ruleForm.zhicheng:"请选择职称"}}</view>
			</picker>
			<button :style='{"padding":"0px","margin":"40rpx auto 24rpx","borderColor":"#ef6d0d","color":"#333","display":"block","borderRadius":"40rpx","background":"linear-gradient(180deg, rgba(253,246,139,1) 0%, rgba(254,233,97,1) 84%, rgba(255,220,52,1) 100%),#ffdc34","borderWidth":"0 0 8rpx","width":"60%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                yonghuxingbieOptions: [],
                yonghuxingbieIndex: 0,
                yishengxingbieOptions: [],
                yishengxingbieIndex: 0,
                yishengzhichengOptions: [],
                yishengzhichengIndex: 0,
				ruleForm: {
                yonghuzhanghao: '',
                mima: '',
                yonghuxingming: '',
                xingbie: '',
                yonghudianhua: '',
                touxiang: '',
                yishengzhanghao: '',
                mima: '',
                yishengxingming: '',
                xingbie: '',
                yishengdianhua: '',
                touxiang: '',
                zhicheng: '',
                yishengjianjie: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yonghu'){
                this.yonghuxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yonghuxingbieOptions[0]
			}
                        // 自定义下拉框值
			if(this.tableName=='yisheng'){
                this.yishengxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yishengxingbieOptions[0]
			}
                        // 自定义下拉框值
			if(this.tableName=='yisheng'){
                this.yishengzhichengOptions = "主任,副主任".split(',');
				this.ruleForm.zhicheng=this.yishengzhichengOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
            yonghutouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            // 下拉变化
            yishengxingbieChange(e) {
                    this.yishengxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yishengxingbieOptions[this.yishengxingbieIndex]
            },
            yishengtouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            // 下拉变化
            yishengzhichengChange(e) {
                    this.yishengzhichengIndex = e.target.value
                    this.ruleForm.zhicheng = this.yishengzhichengOptions[this.yishengzhichengIndex]
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yonghu` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.yonghudianhua&&(!this.$validate.isMobile(this.ruleForm.yonghudianhua))){
					this.$utils.msg(`用户电话应输入手机格式`);
					return
				}
				if((!this.ruleForm.yishengzhanghao) && `yisheng` == this.tableName){
					this.$utils.msg(`医生账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yisheng` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yisheng` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.yishengxingming) && `yisheng` == this.tableName){
					this.$utils.msg(`医生姓名不能为空`);
					return
				}
				if(`yisheng` == this.tableName && this.ruleForm.yishengdianhua&&(!this.$validate.isMobile(this.ruleForm.yishengdianhua))){
					this.$utils.msg(`医生电话应输入手机格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
