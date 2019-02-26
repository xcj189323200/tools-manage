<template>
  <div id="House">
    <div class="container">
      <!-- 搜索头部 -->
      <SearchBar class="search_header">
        <!-- <div>
          <LabelItem label="供货商:">
            <el-input size="small" v-model="search.supplierName" placeholder="请输入供货商名称"></el-input>
          </LabelItem>
        </div>
        <div class="btnBox">
          <el-button type="primary" icon="el-icon-search" :loading="flags.searchFlag" @click="search_clickHandler()">搜索</el-button>
          <el-button type="primary" icon="el-icon-plus" @click="edit_clickHandler()">新增</el-button>
        </div>-->
      </SearchBar>
      <!-- 表格 -->
      <TableList :loading="flags.loading" :dataList="dataList" :size="params.size" :page="params.page" :total="totalElements" @pageChange="pageChange_handler">
        <el-table-column align="left" fixed="left" prop="title" label="房屋标题" min-width="120">
          <template slot-scope="scope">
            <a class="house_title" target="_blank" :href="houseLink_clickHandler(scope.row)">{{scope.row.title}}</a>
          </template>
        </el-table-column>
        <el-table-column align="left" prop="community_name" label="小区名称" min-width="80"></el-table-column>
        <el-table-column align="center" prop="cover_pic" label="预览" min-width="80">
          <template slot-scope="scope">
            <img class="cover_pic" :src="scope.row.cover_pic" alt>
          </template>
        </el-table-column>
        <el-table-column align="left" prop="area" label="面积" min-width="80"></el-table-column>
        <el-table-column align="left" prop="orientation" label="朝向" min-width="80"></el-table-column>
        <el-table-column align="left" prop="price" label="价钱" min-width="80">
          <template slot-scope="scope">
            <span>{{scope.row.price | formatPrice(scope.row.price)}}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" prop="unit_price" label="单价" min-width="80">
          <template slot-scope="scope">
            <span>{{scope.row.unit_price}}元/平</span>
          </template>
        </el-table-column>
      </TableList>
    </div>
  </div>
</template>

<script>
/*
 * @Author: 徐长剑
 * @Date: 2018-11-22 14:57:16
 * @LastEditors: 徐长剑
 * @LastEditTime: 2018-11-22 14:57:16
 * @Description: 房屋管理
 */
import SearchBar from '@components/Ui/SearchBar'
import LabelItem from '@components/Ui/LabelItem'
import TableList from '@components/Ui/TableList'
import Utils from '@utils/utils'
export default {
  components: {
    SearchBar,
    LabelItem,
    TableList,
    Utils
  },
  data() {
    return {
      // search: {
      //   supplierName: '' // 供货商名称
      // },
      totalElements: 0,
      flags: {
        searchFlag: false,
        loading: false
      },
      params: {
        page: 1,
        size: 20
        // supplierName: '' // 供货商名称
      },
      dataList: []
    }
  },
  methods: {
    /**
     * @description 搜索 点击回调事件
     */
    houseLink_clickHandler(row) {
      const _host = `https://lf.lianjia.com/ershoufang/${row['house_code']}.html`
      return _host
    },
    /**
     * @description 搜索 点击回调事件
     */
    search_clickHandler() {
      this.flags.searchFlag = true
      const _params = Object.assign(this.params, this.search, {
        page: 1
      })
      this.params = Utils.filterParams(_params)
      this.getData()
    },
    /**
     * @description 分页 回调事件
     */
    pageChange_handler(page) {
      this.params.page = page
      this.getData()
    },
    /**
     * @description 获得数据 点击回调事件
     */
    getData() {
      this.flags.loading = true
      const _params = Object.assign({}, this.params, {
        page: this.params.page - 1
      })
      this.$http.getHouseList(_params).then(res => {
        const { data } = res
        console.log(res, '------')
        if (res.code === 200) {
          const { list = [] } = data
          this.dataList = list
          this.totalElements = data['total_count']
        }
        this.flags.searchFlag = false
        this.flags.loading = false
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
.house_title{
  text-decoration: underline;
}
.cover_pic {
  width: 80px;
  height: 80px;
}
</style>
