<template>
  <div id="Layout">
    <div class="main-container" :style="{ 'min-height': getScreenHeight +'px'}">
      <side-nav/>
      <div class="content">
        <Header></Header>
        <tags-view/>
        <transition name="fade-transform" mode="out-in">
          <div class="main-view" v-if="key">
            <keep-alive :includes="getCacheViews">
              <router-view :key="key"/>
            </keep-alive>
            <!-- <keep-alive v-if="getCacheViews.includes($route.name)">
              <router-view :key="$route.fullPath"/>
            </keep-alive>
            <router-view v-else/>-->
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Header from './components/Header'
import TagsView from './components/TagsView'
import SideNav from './components/SideNav'

export default {
  name: 'Layout',
  data() {
    return {
      getScreenHeight: 600 + 'px',
      cacheList: []
    }
  },
  computed: {
    ...mapGetters(['getCacheViews']),
    ...mapState(['tags']),
    key() {
      const { name } = this.$route
      let _key
      this.getCacheViews.map(k => {
        if (k.name === name) {
          _key = k.key
        }
      })
      // console.log(_key, '-----_key')
      return _key
    }
  },
  watch: {},
  components: {
    Header,
    TagsView,
    SideNav
  },
  created() {

  },
  mounted() {
    this.getScreenHeight = `${document.documentElement.clientHeight}`
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#Layout {
  .main-container {
    display: flex;
    overflow: auto;
    .content {
      width: 100%;
      .main-view {
        overflow: auto;
      }
    }
  }
}
</style>

