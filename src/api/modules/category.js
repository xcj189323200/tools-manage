/**
 * 设置相关接口
 */
export default {
  /**
   * @description 获得分类列表
   * @date 2018-11-02
   * @returns *
   */
  getCategoryList(params) {
    return this.get({
      url: this.API_HOST + `category`,
      params
    })
  },
  createCategory(data) {
    return this.post({
      url: this.API_HOST + `category`,
      data
    })
  }
}

