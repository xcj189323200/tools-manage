/**
 * 设置相关接口
 */
export default {
  /**
   * @description 获得房屋列表
   * @date 2018-11-02
   * @param {Number}
   * @param {boolean}
   * @returns *
   */
  getHouseList(params) {
    return this.get({
      url: this.API_HOST + `house`,
      params
    })
  }
}
