/*
重新规划 计算流程图布局
*/
// let data = require('./testData')
class alTest {
  static main() {
    let test = new alTest(data)
    test.getOrderAarry("node1")
    let isCheck = test.checkData() // 是否需要重新布局
    if (isCheck) {
      let newLay = test.newLayout()
      console.log(newLay)
    }
  }
  constructor(data) {
    this.data = data.data
    this.orderArray = new Array() // 最外层的node/combo
  }
  run() {
    this.getOrderAarry("node1")
    let isCheck = this.checkData()
    if (isCheck) {
      let newLay = this.newLayout()
      return newLay
    } else return this.data
  }
  newLayout() {
    const newLay = new Object();
    let basic = 0
    this.orderArray.forEach((e) => {
      if (basic == 0) basic += 50
      else basic += 200
      newLay[e] = basic
    })
    for (let key in newLay) {
      this.data.nodes.forEach(node => {
        if (node.id == key) {
          node.y = newLay[key]
          return node
        }
      })
      this.data.combos.forEach(combo => {
        if (combo.id == key) {
          combo.y = newLay[key]
          return combo
        }
      })
    }
    return this.data
  }
  findNode(id) {
    let res = this.data.nodes.find((node) => node.id == id)
    return res
  }
  findCombo(id) {
    let res = this.data.combos.find((combo) => combo.id == id)
    return res
  }
  getOrderAarry(nodeId) {
    // 所有流程默认 nodeId:node1 为初始节点
    // 获取最外层的node/combo 数组
    this.orderArray.push(nodeId)
    let nextId = this.data.edges.find(edge => edge.source == nodeId)
    if (!nextId) {
      return
    }
    this.getOrderAarry(nextId.target)

  }
  checkData() {
    /*
    对布局坐标进行校验 如果最外层相邻两个节点得y差值
    > 200 返回真 
    return Boolean
    */
    let result = false
    for (let i = 0; i < this.orderArray.length - 1; i++) {
      let target1ID = this.orderArray[i]
      let target2ID = this.orderArray[i + 1]
      let target1;
      let target2;
      let hasCombo;
      if (target1ID.includes("combo")) {
        target1 = this.findCombo(target1ID)
        hasCombo = true
      } else {
        target1 = this.findNode(target1ID)
      }
      if (target2ID.includes("combo")) {
        target2 = this.findCombo(target2ID)
        hasCombo = true
      } else {
        target2 = this.findNode(target2ID)
      }
      if (hasCombo && target2.y - target1.y > 200) {
        if (target1.hasOwnProperty("collapsed") && !target1.collapsed) {
          continue
        }
        if (target2.hasOwnProperty("collapsed") && !target2.collapsed) {
          continue
        }
        result = true
      }
    }
    return result
  }
  toJson() {
    let res = JSON.stringify(this.data)
    return res
  }
}

export { alTest }
