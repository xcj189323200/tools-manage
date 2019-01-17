<template>
  <div v-if="isShow" id="EditCommdity">
    <el-dialog :title="title" :visible.sync="isShow" width="50%">
      <div class="container">
        <div class="product_cont">
          <el-form ref="shopInfoForm" :model="datas">
            <el-form-item :label-width="formLabelWidth" label="图片上传" prop="imgUrlList">
              <UploadImg :value="datas.imgList" :max-length="20" @getUpload="(datas)=> this.datas.imgList = datas"/>
            </el-form-item>
          </el-form>
        </div>
        <!-- 步骤 -->
        <div class="product_footer">
          <el-button type="primary" style="margin-top: 12px;" @click="save_clickHandler()">保存</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/*
 * @Author: 徐长剑
 * @Date: 2018-07-27 14:57:16
 * @LastEditors: 徐长剑
 * @LastEditTime: 2018-07-27 18:23:23
 * @Description: 编辑商品 弹出框
 */
import SearchBar from '@components/Ui/SearchBar'
import LabelItem from '@components/Ui/LabelItem'
import TableList from '@components/Ui/TableList'
import UploadImg from '@components/Common/UploadImg'

export default {
  components: {
    SearchBar,
    LabelItem,
    TableList,
    UploadImg
  },
  data() {
    return {
      isShow: false, // 判断编辑框是 否弹出
      title: '上传图片',
      source: 'add',
      datas: {
        imgList: [] // 商品主图
      },
      params: {},
      formLabelWidth: '140px'
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  mounted() {

  },
  methods: {
		/**
     * @description 初始化
     */
    init() {
      this.datas = {
        imgList: [] // 图片列表
      }
    },
		/**
     * @description 编辑弹出框显示 点击回调事件
     */
    showModal(row = {}, source) {
      this.isShow = true
      this.source = source
      this.init()
    },
		/**
     * @description 保存 点击回调事件
     */
     save_clickHandler() {
      if (!this.datas.imgList) return
      this.$emit('submit-edit', this.datas)
      this.isShow = false
    }
  }
}
</script>
<style lang="scss">
#EditCommdity {
  .el-dialog {
  }
  .product_cont {
    margin-top: 50px;
  }
  .el-form-item {
    margin-bottom: 20px;
  }
  .product_footer {
    text-align: right;
  }
}
</style>

