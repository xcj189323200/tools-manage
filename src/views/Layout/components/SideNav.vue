<template>
  <el-aside :class="{'not-open':!sidebar.opened, 'is-open': sidebar.opened}" width="200px" id="sideMenu">
    <el-menu :default-openeds="subMenuActive" :default-active="childMenuActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="!sidebar.opened" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <template v-for="(item) in datas">
        <el-submenu class="nav-item" :index="item.path" :key="item.path">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span class="nav-title">{{item.groupName}}</span>
          </template>
          <el-menu-item-group v-for="(child, index) in item.children" :key="index">
            <router-link :to="{name: child.urlLink}">
              <el-menu-item :index="child.urlLink">{{child.permissionName}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import NavContants from '@contants/nav.js'
export default {
  data() {
    return {
      subMenuActive: [], // 一级菜单选中的菜单
      childMenuActive: '', // 二级菜单选中的菜单
      isCollapse: true,
      datas: NavContants
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar'
    })
  },
  mounted() {
  },
  methods: {
    handleOpen() { },
    handleClose() { },
    close() { },
    clickToggle() {
      this.opened = !this.opened
    }
  },
  watch: {
    $route: {
      handler(val) {
        const { matched } = val
        if (Array.isArray(matched) && matched.length > 1) {
          this.subMenuActive = [matched[0].name]
          this.childMenuActive = matched[1].name || 'home'
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.not-open {
  width: 65px !important;
  overflow-x: hidden;
  // justify-content: center;
  // display: flex
}
.is-open {
  width: auto;
}
#sideMenu {
  background: $sideMenuColor;
  transition: width 0.8s;
  .el-menu-vertical-demo {
    border-right: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .nav-item > div:hover {
    .nav-title,
    i {
      color: #409eff;
    }
  }
  .active {
    background-color: $tabColor;
    color: #fff;
    border-color: $tabColor;
    &::before {
      content: "";
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }
}
</style>
