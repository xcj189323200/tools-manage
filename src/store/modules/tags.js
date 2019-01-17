/*
 * @Author: 徐长剑
 * @Description: 【modules】页面导航标签
 * @Date: 2019-01-09 13:49:09
 */

const tagsView = {
  state: {
    list: [], // 需要缓存的标签
    cacheViews: [] // 需要缓存的页面
  },
  mutations: {
    /*
    * @Description: [mutations] 添加需要缓存的标签
    */
    EDIT_TAGS: (state, list) => {
      state.list = list.map(k => {
        const { path, fullPath, meta, query, name } = k
        return { name, path, fullPath, meta, query }
      })
    },
    /*
    * @Description: [mutations] 添加需要缓存的页面
    */
    ADD_CACHE_VIEWS: (state, { meta = {}, name }) => {
      if (meta.keepAlive && !state.cacheViews.includes(name)) {
        state.cacheViews.push({
          name,
          key: new Date().getTime()
        })
      }
    },
    /*
    * @Description: [mutations] 去除需要缓存的页面
    */
    DEL_CACHE_VIEWS: (state, name) => {
      state.cacheViews = state.cacheViews.filter(k => k !== name)
    }
  },
  getters: {
    getCacheViews: state => {
      const _cacheViews = [...state.cacheViews]
      return _cacheViews
    }
  },
  actions: {
    /*
    * @Description: [actions] 添加需要缓存的标签
    */
    addTags({ commit, state }, data = {}) {
      const { name } = data
      const { list } = state
      const isAddRoute = list.some(k => {
        return k.name === name
      })
      if (name && !isAddRoute) {
        commit('ADD_CACHE_VIEWS', data)
        commit('EDIT_TAGS', [...list, data])
      }
    },
    /*
    * @Description: [actions] 删除需要缓存的标签
    */
    delTags({ commit, state }, name) {
      return new Promise(resolve => {
        const _list = state.list.filter(k => k.name !== name)
        commit('EDIT_TAGS', _list)
        commit('DEL_CACHE_VIEWS', name)
        resolve(state.list)
      })
    }
  }
}

export default tagsView
