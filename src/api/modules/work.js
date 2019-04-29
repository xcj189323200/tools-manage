/**
 * 设置相关接口
 */
export default {
  /**
   * @description 获得分类列表
   * @date 2018-11-02
   * @returns *
   */
  getWorkList(params) {
    return this.get({
      url: this.API_HOST + `work`,
      params
    })
  }
}
