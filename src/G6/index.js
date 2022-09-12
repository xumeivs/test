// 绘图
import G6 from "@antv/g6"
const collapseIcon = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x - r + 4, y],
    ['L', x - r + 2 * r - 4, y],
  ];
};
const expandIcon = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x - r + 4, y],
    ['L', x - r + 2 * r - 4, y],
    ['M', x - r + r, y - r + 4],
    ['L', x, y + r - 4],
  ];
};

// 自定义节点带下标的节点
G6.registerNode(
  "myRect",
  {
    afterDraw(cfg, group) {
      const size = this.getSize(cfg)
      const color = cfg.color
      const width = size[0]
      const height = size[1]
      const title = cfg.title
      const style = this.getShapeStyle(cfg)
      // console.log("cfg:", cfg, "width:", width, "height:", height, "size", size)
      // 定格显示的rect
      group.addShape('rect', {
        attrs: {
          fill: '#3399FF',
          opacity: 1,
          width: width,
          height: height / 3,
          x: 0 - width / 2,
          y: 0 - height / 2,
          stroke: '#3399FF',
          radius: [2, 4],

        },
        label: title
      })
      // 显示的文本
      group.addShape('text', {
        attrs: {
          fill: '#444444',
          opacity: 1,
          // cfg.style.width 与 cfg.style.heigth 对应 rect Combo 位置说明图中的 innerWdth 与 innerHeight
          x: -width / 2,
          y: -height / 2 + 20,
          text: title,
          fontSize: 14
        },
        draggable: true,
        name: 'opt-name',
      })
      // 下方添加按钮
      group.addShape("marker", {
        attrs: {
          ...style,
          fill: "#fff",
          opacity: 1,
          x: 0,
          y: height / 2,
          r: 10,
          symbol: expandIcon,
        },
        draggable: true,
        name: 'add_next'
      })
    },
    getAnchorPoints() {
      return [
        [0.5, 0],
        [0.5, 1],
      ]
    }
  },
  'rect'
)
// 自定义combo

G6.registerCombo(
  'cRect',
  {
    drawShape: function draw(cfg, group) {
      // console.log(group)
      cfg.padding = cfg.padding || [30, 20, 30, 20];
      const self = this;
      const width = cfg.style.width
      const height = cfg.style.height
      // 获取样式配置，style.r 是加上了 padding 的半径
      // 对应 Circle Combo 位置说明图中的 R
      const style = self.getShapeStyle(cfg);
      // 绘制一个 circle 作为 keyShape，与 'circle' Combo 的 keyShape 一致
      // console.log("style:",style)
      const circle = group.addShape('rect', {
        attrs: {
          // ...style,
          // x: -style.width / 2 - (cfg.padding[3] - cfg.padding[1]) / 2,
          // y: -style.height / 2 - (cfg.padding[0] - cfg.padding[2]) / 2,
          x: 0,
          y: 0,
          r: style.r,
          stroke: '#20B2AA',
          radius: [2, 4],
        },
        draggable: true,
        name: 'combo-keyShape',
      });
      // 增加下方 marker
      const marker = group.addShape('marker', {
        attrs: {
          ...style,
          fill: '#fff',
          opacity: 1,
          x: 0,
          y: -style.y,
          r: 10,
          symbol: expandIcon,
        },
        draggable: true,
        name: 'combo-marker-shape',
      });
      // 增加上方操作类型框
      // console.log("width:", width)
      const opt = group.addShape('rect', {
        attrs: {
          fill: '#20B2AA',
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y,
          r: 10,
          height: 20,
          width: width + cfg.padding[3] * 2,
          stroke: '#20B2AA',
          radius: [2, 4]
        },
        name: "top-title"
      });
      // 操作类型文本说明
      const title = cfg.title
      group.addShape('text', {
        attrs: {
          fill: '#000000',
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y + 20,
          text: title,
          fontSize: 14
        },
        name: "combo-type"
      })
      // 增加伸缩的标识文字
      group.addShape('text', {
        attrs: {
          fill: '#000000',
          opacity: 1,
          x: width / 2 - 20,
          y: style.y + 20,
          text: "收",
          fontSize: 14
        },
        name: "triangle-icon"
      })
      return circle;
    },
    afterUpdate: function afterUpdate(cfg, combo) {
      const self = this;
      const group = combo.get('group')
      const style = self.getShapeStyle(cfg)
      const mainShap = group.find(ele => ele.get('name') == 'combo-keyShape')
      const topTitle = group.find(ele => ele.get('name') == 'top-title')
      const textView = group.find(ele => ele.get('name') == 'combo-type')
      const market = group.find(ele => ele.get('name') === "combo-marker-shape")
      const shrink = group.find(ele => ele.get('name') == 'triangle-icon')
      // console.log(style)
      // console.log(mainShap)
      // 更新
      // console.log(textView)
      mainShap.attr({
        ...style,
        // y:mainShap.cfg.cacheCanvasBBox.y
        y: style.y,
        stroke: textView.attrs.text.indexOf("循环") > -1 ? "#3366FF" : "#20b2aa"
      })
      // 更新上方画幅
      topTitle.attr({
        width: style.width,
        x: style.x,
        y: style.y,
        fill: textView.attrs.text.indexOf("循环") > -1 ? "#3366FF" : "#20b2aa",
        stroke: textView.attrs.text.indexOf("循环") > -1 ? "#3366FF" : "#20b2aa"
      })
      // 更新上方文字
      textView.attr({
        x: style.x,
        y: style.y + 20
      })
      market.attr({
        x: 0,
        y: style.y + style.height
      })
      shrink.attr({
        x: style.x + style.width - 20,
        y: style.y + 20,
        text: style.width > 100 ? '收' : '放'
      })
    }
  },
  'rect',
);

// 自定义IF combo
/*
G6.registerCombo(
  'ifRect',
  {
    drawShape: function draw(cfg, group) {
      // console.log(group)
      cfg.padding = cfg.padding || [50, 20, 30, 20];
      const self = this;
      const width = cfg.style.width
      const height = cfg.style.height
      // 获取样式配置，style.r 是加上了 padding 的半径
      // 对应 Circle Combo 位置说明图中的 R
      const style = self.getShapeStyle(cfg);
      // 绘制一个 circle 作为 keyShape，与 'circle' Combo 的 keyShape 一致
      // console.log("style:",style)
      const circle = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          r: style.r,
          stroke: '#20B2AA',
          radius: [2, 4],
        },
        draggable: true,
        name: 'combo-keyShape',
      });
      // 增加下方 marker
      const marker = group.addShape('marker', {
        attrs: {
          ...style,
          fill: '#fff',
          opacity: 1,
          x: 0,
          y: -style.y,
          r: 10,
          symbol: expandIcon,
        },
        draggable: true,
        name: 'combo-marker-shape',
      });
      // 增加上方操作类型框
      // console.log("width:", width)
      const opt = group.addShape('rect', {
        attrs: {
          fill: '#4682B4',
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y,
          r: 10,
          height: 20,
          width: width + cfg.padding[3] * 2,
          stroke: '#20B2AA',
          radius: [2, 4]
        },
        name: "combo-title"
      });
      // 操作类型文本说明
      const title = cfg.title
      group.addShape('text', {
        attrs: {
          fill: '#000000',
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y + 20,
          text: title,
          fontSize: 14
        },
        name: "combo-title-text"
      })
      group.addShape('text', {
        attrs: {
          fill: '#000000',
          opacity: 1,
          x: 0 - width / 2 - 10,
          y: style.y + 40,
          text: "Then",
          fontSize: 14
        },
        name: "then-text"
      })
      group.addShape('text', {
        attrs: {
          fill: '#000000',
          opacity: 1,
          x: width / 2 - 20,
          y: style.y + 40,
          text: "Else",
          fontSize: 14
        },
        name: "else-text"
      })
      group.addShape("text", { // 增加缩放还原
        attrs: {
          fill: "#000000",
          opacity: 1,
          x: width / 2 - 20,
          y: style.y + 20,
          text: "收",
          fontSize: 14
        },
        name: "triangle-icon"
      })
      return circle;
    },
    afterUpdate: function afterUpdate(cfg, combo) {
      const self = this;
      const group = combo.get('group')
      const style = self.getShapeStyle(cfg)
      const mainShap = group.find(ele => ele.get('name') == 'combo-keyShape')
      const topTitle = group.find(ele => ele.get('name') == 'combo-title')
      const typeText = group.find(ele => ele.get("name") == 'combo-title-text')
      const thenText = group.find(ele => ele.get('name') == 'then-text')
      const elseText = group.find(ele => ele.get('name') == 'else-text')
      const market = group.find(ele => ele.get('name') == 'combo-marker-shape')
      const shrink = group.find(ele => ele.get('name') == 'triangle-icon')
      // 更新
      // console.log(style, "更新后的style")
      mainShap.attr({
        ...style,
      })
      topTitle.attr({
        width: style.width,
        x: style.x,
        y: style.y,
        stroke: style.stroke
      })
      typeText.attr({
        x: style.x,
        y: style.y + 20
      })
      thenText.attr({
        x: style.x + 10,
        y: style.y + 40,
        opacity: style.width > 100 ? 1 : 0
      })
      elseText.attr({
        x: -style.x - 40,
        y: style.y + 40,
        opacity: style.width > 100 ? 1 : 0
      })
      market.attr({
        x: 0,
        y: style.y + style.height
      })
      shrink.attr({
        x: style.x,
        y: style.y,
        text: style.width > 100 ? '收' : '放'
      })
    }
  },
  'rect',
)
*/

// 重新自定义 IF
G6.registerCombo(
  'ifCombo',
  {
    drawShape: function draw(cfg, group) {
      cfg.padding = cfg.padding || [50, 20, 30, 20]
      const self = this
      const width = cfg.style.width
      const height = cfg.style.height
      const style = self.getShapeStyle(cfg)
      const circle = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          r: style.r,
          stroke: '#20B2AA',
          radius: [2, 4]
        },
        draggable: true,
        name: "combo-keyShape"
      })
      const marker = group.addShape('marker', {
        attrs: {
          ...style,
          fill: "#fff",
          opacity: 1,
          x: 0,
          y: -style.y,
          r: 10,
          symbol: expandIcon,
        },
        draggable: true,
        name: "combo-marker-shape"
      });
      const opt = group.addShape('rect', {
        attrs: {
          fill: "#4682B4",
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y,
          r: 10,
          height: 20,
          width: width + cfg.padding[3] * 2,
          stroke: '#20B2AA',
          radius: [2, 4]
        },
        name: "top-title"
      })
      const title = cfg.title
      group.addShape('text', {
        attrs: {
          fill: "#000000",
          opacity: 1,
          x: 0 - width / 2 - 20,
          y: style.y + 20,
          text: title,
          fontSize: 14
        },
        name: "combo-type"
      })
      // 伸缩文本
      group.addShape('text', {
        attrs: {
          fill: "#000000",
          opacity: 1,
          x: width / 2 - 20,
          y: style.y + 20,
          text: "收",
          fontSize: 14
        },
        name: "triangle-icon"
      })
      return circle
    },
    afterUpdate: function afterUpdate(cfg, combo) {
      const self = this
      const group = combo.get('group')
      const style = self.getShapeStyle(cfg)
      const mainShap = group.find(ele => ele.get('name') == 'combo-keyShape')
      const topTitle = group.find(ele => ele.get('name') == 'top-title')
      const textView = group.find(ele => ele.get('name') == 'combo-type')
      const market = group.find(ele => ele.get('name') === "combo-marker-shape")
      const shrink = group.find(ele => ele.get('name') == "triangle-icon")
      // console.log(style)
      // console.log(mainShap)
      // 更新
      mainShap.attr({
        ...style,
        // y:mainShap.cfg.cacheCanvasBBox.y
        y: style.y,
        stroke: "#4682b4"
      })
      // 更新上方画幅
      topTitle.attr({
        width: style.width,
        x: style.x,
        y: style.y,
        fill: "#4682b4",
        stroke: "#4682b4"
      })
      // 更新上方文字
      textView.attr({
        x: style.x,
        y: style.y + 20
      })
      market.attr({
        x: 0,
        y: style.y + style.height
      })
      shrink.attr({
        x: style.x + style.width - 20,
        y: style.y + 20,
        text: style.width > 100 ? "收" : "放"
      })
    }
  },
  'rect'
)


export default { G6 }