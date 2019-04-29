/**
 * 设置相关接口
 */
export default {
  /**
   * @description 爬去boss
   * @date 2018-11-02
   * @returns *
   */
  crawlerWork(data) {
    return this.post({
      url: this.API_HOST + `crawler/work/getBoss`,
      data
    })
  }
}

