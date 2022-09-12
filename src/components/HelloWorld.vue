<template>
  <div id="mountNode"></div>
</template>

<script>
import G6 from "@/G6";
import alTest from "@/G6/alTest";
let thisGraph = undefined;
export default {
  name: "HelloWorld",
  data() {
    return {
      process_data: {
        combos: [
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            children: [
              {
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
                children: [
                  {
                    anchorPoints: [
                      [0.5, 0],
                      [0.5, 1],
                    ],
                    children: [
                      {
                        id: "8dae9f60-3ed7-45dc-8178-eb6fed299f0e",
                        comboId: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
                        itemType: "node",
                        depth: 33,
                      },
                    ],
                    depth: 22,
                    id: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
                    padding: [30, 20, 30, 20],
                    parentId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
                    radius: [2, 4],
                    style: {
                      active: {
                        fill: "rgb(247, 250, 255)",
                        lineWidth: 1,
                        stroke: "rgb(95, 149, 255)",
                      },
                      disable: {
                        fill: "rgb(250, 250, 250)",
                        lineWidth: 1,
                        stroke: "rgb(234, 234, 234)",
                      },
                      height: 61,
                      highlight: {
                        fill: "rgb(253, 253, 253)",
                        lineWidth: 2,
                        stroke: "#4572d9",
                        "text-shape": {
                          fontWeight: 500,
                        },
                      },
                      inactive: {
                        fill: "rgb(253, 253, 253)",
                        lineWidth: 1,
                        stroke: "rgb(224, 224, 224)",
                      },
                      opacity: 1,
                      r: 105.02618721061906,
                      selected: {
                        fill: "rgb(253, 253, 253)",
                        lineWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "rgb(95, 149, 255)",
                        stroke: "rgb(95, 149, 255)",
                        "text-shape": {
                          fontWeight: 500,
                        },
                      },
                      width: 201,
                    },
                    title: "For列表循环",
                    type: "cRect",
                    x: 634.3333333333334,
                    y: 402.75,
                    itemType: "combo",
                  },
                  {
                    id: "89cc9200-f825-4a8b-aab4-0b97375284cb",
                    comboId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
                    itemType: "node",
                    depth: 22,
                  },
                ],
                depth: 12,
                id: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
                padding: [30, 20, 30, 20],
                parentId: "6fd57b25-1021-4030-aa83-58cf88546d96ifcombo",
                radius: [2, 4],
                style: {
                  active: {
                    fill: "rgb(247, 250, 255)",
                    lineWidth: 1,
                    stroke: "rgb(95, 149, 255)",
                  },
                  disable: {
                    fill: "rgb(250, 250, 250)",
                    lineWidth: 1,
                    stroke: "rgb(234, 234, 234)",
                  },
                  height: 241.5,
                  highlight: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 2,
                    stroke: "#4572d9",
                    "text-shape": {
                      fontWeight: 500,
                    },
                  },
                  inactive: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 1,
                    stroke: "rgb(224, 224, 224)",
                  },
                  opacity: 1,
                  r: 170.94315575652627,
                  selected: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 2,
                    shadowBlur: 10,
                    shadowColor: "rgb(95, 149, 255)",
                    stroke: "rgb(95, 149, 255)",
                    "text-shape": {
                      fontWeight: 500,
                    },
                  },
                  width: 242,
                },
                title: "Then",
                type: "cRect",
                x: 634.3333333333334,
                y: 343,
                itemType: "combo",
              },
            ],
            collapsed: false,
            depth: 10,
            id: "6fd57b25-1021-4030-aa83-58cf88546d96ifcombo",
            padding: [50, 20, 30, 20],
            radius: [2, 4],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              opacity: 1,
              height: 302.5,
              r: 207.12028510022864,
              width: 283,
            },
            title: "If条件",
            type: "ifCombo",
            x: 634.3333333333334,
            y: 343.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            children: [
              {
                anchorPoints: [
                  [0.5, 0],
                  [0.5, 1],
                ],
                children: [
                  {
                    id: "8dae9f60-3ed7-45dc-8178-eb6fed299f0e",
                    comboId: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
                    itemType: "node",
                    depth: 33,
                  },
                ],
                depth: 22,
                id: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
                padding: [30, 20, 30, 20],
                parentId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
                radius: [2, 4],
                style: {
                  active: {
                    fill: "rgb(247, 250, 255)",
                    lineWidth: 1,
                    stroke: "rgb(95, 149, 255)",
                  },
                  disable: {
                    fill: "rgb(250, 250, 250)",
                    lineWidth: 1,
                    stroke: "rgb(234, 234, 234)",
                  },
                  height: 61,
                  highlight: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 2,
                    stroke: "#4572d9",
                    "text-shape": {
                      fontWeight: 500,
                    },
                  },
                  inactive: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 1,
                    stroke: "rgb(224, 224, 224)",
                  },
                  opacity: 1,
                  r: 105.02618721061906,
                  selected: {
                    fill: "rgb(253, 253, 253)",
                    lineWidth: 2,
                    shadowBlur: 10,
                    shadowColor: "rgb(95, 149, 255)",
                    stroke: "rgb(95, 149, 255)",
                    "text-shape": {
                      fontWeight: 500,
                    },
                  },
                  width: 201,
                },
                title: "For列表循环",
                type: "cRect",
                x: 634.3333333333334,
                y: 402.75,
                itemType: "combo",
              },
              {
                id: "89cc9200-f825-4a8b-aab4-0b97375284cb",
                comboId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
                itemType: "node",
                depth: 22,
              },
            ],
            depth: 20,
            id: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
            padding: [30, 20, 30, 20],
            parentId: "6fd57b25-1021-4030-aa83-58cf88546d96ifcombo",
            radius: [2, 4],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              opacity: 1,
              height: 241.5,
              r: 170.94315575652627,
              width: 242,
            },
            title: "Then",
            type: "cRect",
            x: 634.3333333333334,
            y: 343.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            children: [
              {
                id: "8dae9f60-3ed7-45dc-8178-eb6fed299f0e",
                comboId: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
                itemType: "node",
                depth: 33,
              },
            ],
            depth: 31,
            id: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
            padding: [30, 20, 30, 20],
            parentId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
            radius: [2, 4],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              opacity: 1,
              height: 61,
              r: 105.02618721061906,
              width: 201,
            },
            title: "For列表循环",
            type: "cRect",
            x: 634.3333333333334,
            y: 403,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            children: [
              {
                id: "225578ec-559c-4c60-bb2a-45ca33f87528",
                comboId: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
                itemType: "node",
                depth: 44,
              },
              {
                id: "660396e3-6db0-4f76-8b10-3a03b2cee35d",
                comboId: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
                itemType: "node",
                depth: 44,
              },
            ],
            collapsed: false,
            depth: 42,
            id: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
            padding: [30, 20, 30, 20],
            radius: [2, 4],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(253, 253, 253)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              opacity: 1,
              height: 181,
              r: 135.24237501611688,
              width: 201,
            },
            title: "For字典循环",
            type: "cRect",
            x: 634.3333333333334,
            y: 821.75,
          },
        ],
        edges: [
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 141.5,
              anchorIndex: 0,
            },
            id: "edge-0.36958186167820251662818086270",
            isComboEdge: true,
            source: "node1",
            startPoint: {
              x: 634.3333333333334,
              y: 80.5,
              anchorIndex: 1,
            },
            style: {
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
            },
            target: "6fd57b25-1021-4030-aa83-58cf88546d96ifcombo",
            weight: 2,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 342,
              anchorIndex: 0,
            },
            id: "edge-0.18856734971196311662818095115",
            isComboEdge: true,
            source: "89cc9200-f825-4a8b-aab4-0b97375284cb",
            startPoint: {
              x: 634.3333333333334,
              y: 283.5,
              anchorIndex: 1,
            },
            style: {
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
            },
            target: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
            weight: 2,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 581.25,
              anchorIndex: 0,
            },
            id: "edge-0.426021909972429841662818113696",
            isComboEdge: true,
            source: "6fd57b25-1021-4030-aa83-58cf88546d96ifcombo",
            startPoint: {
              x: 634.3333333333334,
              y: 525,
              anchorIndex: 1,
            },
            style: {
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
            },
            target: "4b080844-18ac-44da-9ae5-d794d668ea13",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 700.75,
              anchorIndex: 0,
            },
            id: "edge-0.74836865640365091662818138727",
            isComboEdge: true,
            source: "4b080844-18ac-44da-9ae5-d794d668ea13",
            startPoint: {
              x: 634.3333333333334,
              y: 642.25,
              anchorIndex: 1,
            },
            style: {
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
            },
            target: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
            weight: 2,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 851.25,
              anchorIndex: 0,
            },
            id: "edge-0.0477925927222533351662818160059",
            source: "225578ec-559c-4c60-bb2a-45ca33f87528",
            startPoint: {
              x: 634.3333333333334,
              y: 792.25,
              anchorIndex: 1,
            },
            style: {
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            target: "660396e3-6db0-4f76-8b10-3a03b2cee35d",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 1001.75,
              anchorIndex: 0,
            },
            id: "edge-0.247343511553289821662883131458",
            isComboEdge: true,
            source: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
            startPoint: {
              x: 634.3333333333334,
              y: 942.75,
              anchorIndex: 1,
            },
            style: {
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
            },
            target: "ed0d32a6-2487-40d5-a8c8-10899963f07a",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 1121.75,
              anchorIndex: 0,
            },
            id: "edge-0.198351937838552321662883134727",
            source: "ed0d32a6-2487-40d5-a8c8-10899963f07a",
            startPoint: {
              x: 634.3333333333334,
              y: 1062.75,
              anchorIndex: 1,
            },
            style: {
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            target: "54b797fb-20f2-4f99-a8a9-95c42f1f51ee",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 1241.75,
              anchorIndex: 0,
            },
            id: "edge-0.20823182883387581662883159875",
            source: "54b797fb-20f2-4f99-a8a9-95c42f1f51ee",
            startPoint: {
              x: 634.3333333333334,
              y: 1182.75,
              anchorIndex: 1,
            },
            style: {
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            target: "2b7623ef-2fc8-4031-beb6-4a1d39b3f423",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 1361.75,
              anchorIndex: 0,
            },
            id: "edge-0.0052881361404888421662883163685",
            source: "2b7623ef-2fc8-4031-beb6-4a1d39b3f423",
            startPoint: {
              x: 634.3333333333334,
              y: 1302.75,
              anchorIndex: 1,
            },
            style: {
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            target: "c8c5e8f1-b7e1-4ff7-888c-6d937e3c42ae",
            weight: 1,
          },
          {
            depth: 0,
            endPoint: {
              x: 634.3333333333334,
              y: 1481.75,
              anchorIndex: 0,
            },
            id: "edge-0.446906400230494771662883166948",
            source: "c8c5e8f1-b7e1-4ff7-888c-6d937e3c42ae",
            startPoint: {
              x: 634.3333333333334,
              y: 1422.75,
              anchorIndex: 1,
            },
            style: {
              opacity: 1,
              stroke: "gery",
              endArrow: {
                path: "M 10,0 L 20,-5 L 20,5 Z",
                d: 5,
                fill: "#000000",
              },
              active: {
                lineWidth: 1,
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                lineWidth: 1,
                stroke: "rgb(245, 245, 245)",
              },
              highlight: {
                lineWidth: 2,
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                lineWidth: 1,
                stroke: "rgb(234, 234, 234)",
              },
              selected: {
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            target: "b2524c58-7800-42da-8a4e-c2281b9d243c",
            weight: 1,
          },
        ],
        nodes: [
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "node1",
            label: "开始",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "点击",
            type: "myRect",
            x: 634.3333333333334,
            y: 50,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            comboId: "1b963968-8b58-44a1-a2a9-14b0c97998e5combo",
            cursor: "pointer",
            depth: 21,
            id: "89cc9200-f825-4a8b-aab4-0b97375284cb",
            lable: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            type: "myRect",
            x: 634.3333333333334,
            y: 253,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            comboId: "dcb0370f-e04d-42a9-97ea-4cc84d392c2ccombo",
            cursor: "pointer",
            depth: 32,
            id: "8dae9f60-3ed7-45dc-8178-eb6fed299f0e",
            label: "",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
            },
            type: "myRect",
            x: 634.3333333333334,
            y: 403,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "4b080844-18ac-44da-9ae5-d794d668ea13",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "根据value属性值选择",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 611.75,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            comboId: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
            cursor: "pointer",
            depth: 44,
            id: "225578ec-559c-4c60-bb2a-45ca33f87528",
            label: "",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            type: "myRect",
            x: 634.3333333333334,
            y: 761.75,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            comboId: "1339c0f2-4566-40b3-bbc2-7e20e2b0cb6ecombo",
            cursor: "pointer",
            depth: 43,
            id: "660396e3-6db0-4f76-8b10-3a03b2cee35d",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "根据value属性值取消选择",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 881.75,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "ed0d32a6-2487-40d5-a8c8-10899963f07a",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "根据文本值(text)选择",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 1032.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "54b797fb-20f2-4f99-a8a9-95c42f1f51ee",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "获取元素标签名",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 1152.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "2b7623ef-2fc8-4031-beb6-4a1d39b3f423",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "获取第一个被选中的选项",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 1272.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "c8c5e8f1-b7e1-4ff7-888c-6d937e3c42ae",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "获取元素的文本值",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 1392.25,
          },
          {
            anchorPoints: [
              [0.5, 0],
              [0.5, 1],
            ],
            color: "#DDDDDD",
            cursor: "pointer",
            depth: 0,
            id: "b2524c58-7800-42da-8a4e-c2281b9d243c",
            label: "Do something",
            radius: [2, 4],
            size: [200, 60],
            style: {
              active: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 2,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
              },
              selected: {
                fill: "rgb(255, 255, 255)",
                lineWidth: 4,
                shadowBlur: 10,
                shadowColor: "rgb(95, 149, 255)",
                stroke: "rgb(95, 149, 255)",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              highlight: {
                fill: "rgb(223, 234, 255)",
                lineWidth: 2,
                stroke: "#4572d9",
                "text-shape": {
                  fontWeight: 500,
                },
              },
              inactive: {
                fill: "rgb(247, 250, 255)",
                lineWidth: 1,
                stroke: "rgb(191, 213, 255)",
              },
              disable: {
                fill: "rgb(250, 250, 250)",
                lineWidth: 1,
                stroke: "rgb(224, 224, 224)",
              },
            },
            title: "获取第一个被选中的选项",
            tyep: "myRect",
            type: "myRect",
            x: 634.3333333333334,
            y: 1512.25,
          },
        ],
        params: [],
      },
      VueScreenWidth: document.documentElement.clientWidth, // 当前屏幕宽度
      orderArray: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let myG6 = G6.G6;
      // 箭头
      const graph = new myG6.Graph({
        container: "mountNode",
        width: this.VueScreenWidth,
        height: 25200,
        autoPaint: true,
        // 全局combo设置
        defaultNode: {
          // 指定combo类型, 也可以将type写道combo数据中
          type: "myRect",
          color: "#DDDDDD",
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
          radius: [2, 4],
          // 此处可以配置默认combo的其他样式
          cursor: "pointer",
        },
        defaultEdge: {
          style: {
            opacity: 1,
            stroke: "gery", // 边描边颜色
            endArrow: {
              path: myG6.Arrow.triangle(10, 10, 5), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
              d: 5,
              fill: "#000000",
            },
          },
        },
        defaultCombo: {
          type: "cRect",
          style: {
            opacity: 1,
          },
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
          radius: [2, 4],
        },
      });
      thisGraph = graph;
      graph.data(this.process_data);
      // console.log("g6获取的数据", this.process_data);
      graph.render();
      // graph.zoom(1)  // 缩放图
      // 节点点击事件
      graph.on("node:click", (e) => {
        // 新增点击事件
        if (e.target.cfg.name === "add_next") {
          graph.paint();
          this.add_next(e);
        }
        let id = e.item._cfg.id; // 得到目标节点id
        this.singleData = this.process_data.nodes.filter(
          (node) => node.id == id
        )[0];
      });
      // combo 点击事件
      graph.on("combo:click", (e) => {
        const combo = e.item;
        const comboId = combo.get("id");

        const comboModel = combo.get("model");
        const comboNodes = combo.getNodes();
        if (e.target.get("name") === "combo-marker-shape") {
          this.add_next(e);
        }
        // 改变combo内的元素y位置, 使其全部在第一行, 这样combo缩小时, 不会出现连接线过长的问题
        if (e.target.get("name") == "triangle-icon") {
          graph.updateCombos(); // 更新combo
          graph.collapseExpandCombo(e.item);
          if (graph.get("layout")) graph.layout();
          else graph.refreshPositions();
          this.orderArray = [];
          this.getOrderAarry("node1");
          let isCheck = this.checkData();
          if (isCheck) {
            console.log(isCheck);
            this.newLayout();
          }
          thisGraph.changeData();
        }
      });
    },
    findNode(id) {
      let res = this.process_data.nodes.find((node) => node.id == id);
      return res;
    },
    findCombo(id) {
      let res = this.process_data.combos.find((combo) => combo.id == id);
      return res;
    },
    checkData() {
      /*
    对布局坐标进行校验 如果最外层相邻两个节点得y差值
    > 200 返回真 
    return Boolean
    */
      let result = false;
      for (let i = 0; i < this.orderArray.length - 1; i++) {
        let target1ID = this.orderArray[i];
        let target2ID = this.orderArray[i + 1];
        let target1;
        let target2;
        let hasCombo;
        if (target1ID.includes("combo")) {
          target1 = this.findCombo(target1ID);
          hasCombo = true;
        } else {
          target1 = this.findNode(target1ID);
        }
        if (target2ID.includes("combo")) {
          target2 = this.findCombo(target2ID);
          hasCombo = true;
        } else {
          target2 = this.findNode(target2ID);
        }
        if (hasCombo && target2.y - target1.y !== 200) {
          if (target1.hasOwnProperty("collapsed") && !target1.collapsed) {
            continue;
          }
          if (target2.hasOwnProperty("collapsed") && !target2.collapsed) {
            continue;
          }
          result = true;
        }
      }
      return result;
    },
    getOrderAarry(nodeId) {
      // 所有流程默认 nodeId:node1 为初始节点
      // 获取最外层的node/combo 数组
      this.orderArray.push(nodeId);
      let nextId = this.process_data.edges.find(
        (edge) => edge.source == nodeId
      );
      if (!nextId) {
        return;
      }
      this.getOrderAarry(nextId.target);
    },
    newLayout() {
      const newLay = new Object();
      let basic = 0;
      this.orderArray.forEach((e) => {
        if (basic == 0) basic += 50;
        else basic += 200;
        newLay[e] = basic;
      });
      for (let key in newLay) {
        this.process_data.nodes.forEach((node) => {
          if (node.id == key) {
            node.y = newLay[key];
            return node;
          }
        });
        this.process_data.combos.forEach((combo) => {
          if (combo.id == key) {
            combo.y = newLay[key];
            return combo;
          }
        });
      }
      return this.process_data;
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
