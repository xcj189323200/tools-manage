<template>
  <div class="main-box">
    <div class="container">
      <!-- 搜索头部 -->
      <SearchBar class="search_header">
        <div class="btnBox">
          <el-button type="primary" icon="el-icon-plus" @click="operation_clickHandler('','add')">新增</el-button>
        </div>
      </SearchBar>
      <!-- 表格 -->
      <TableList :loading="flags.loading" :dataList="dataList" align="center">
        <el-table-column  align="center" type="index" label="序号" width="80"></el-table-column>
        <el-table-column  align="center" prop="imgUrl" label="图片预览" min-width="100">
          <template slot-scope="scope">
            <img class="preview-img" :src="Contants.BASE_IMG_URL + scope.row.imgUrl" alt>
          </template>
        </el-table-column>
        <el-table-column  align="center" prop="imgUrl" label="完整地址" min-width="180">
          <template slot-scope="scope">
            {{Contants.BASE_IMG_URL + scope.row.imgUrl}}
          </template>
        </el-table-column>
        <el-table-column  align="center" prop="imgUrl" label="地址" min-width="180"></el-table-column>
      </TableList>
    </div>
    <edit-modal ref="uploadModal" @submit-edit="getImgList_handler"></edit-modal>
  </div>
</template>

<script>
/*
 * @Author: 徐长剑
 * @Date: 2018-07-27 14:57:16
 * @LastEditors: 徐长剑
 * @LastEditTime: 2018-07-27 18:23:23
 * @Description: spu页面
 */
import SearchBar from '@components/Ui/SearchBar'
import LabelItem from '@components/Ui/LabelItem'
import TableList from '@components/Ui/TableList'
import EditModal from './components/EditModal'
import Contants from '@contants/index'
// import Utils from '@utils/utils'

export default {
  components: {
    SearchBar,
    LabelItem,
    TableList,
    EditModal
  },
  data() {
    return {
      Contants,
      dataList: [],
      totalElements: 0, // 总页数
      flags: {
        searchFlag: false,
        loading: false,
        moreFlag: false // 控制切换显示更多
      },
      params: {
        page: 1,
        size: 40
      }
    }
  },
  methods: {
    /**
     * @description 初始化
     */
    init() {

    },
    /**
     * @description 获得上传 图片的回调函数
     */
    getImgList_handler({ imgList }) {
      console.log(imgList, '-----imgList')
      imgList.map(imgUrl => {
        this.dataList.push({ imgUrl })
      })
    },
    /**
     * @description 搜索 点击回调事件
     */
    /**
     * @description 操作按钮 点击回调事件
     * @param {Object} record  每条数据
     * @param {String} type edit 编辑spu  addSku 添加sku
     */
    operation_clickHandler(record, type) {
      switch (type) {
        case 'add':
          this.$refs.uploadModal.showModal(record, type)
          break
      }
    }
  },
  created() {
    this.init()
  },
  activated() {
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
.preview-img {
  width: 80px;
  left: 80px;
}
</style>

