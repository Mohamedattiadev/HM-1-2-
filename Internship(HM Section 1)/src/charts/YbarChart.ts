import Motherclass from "./Motherclass";
export default class YbarChart extends Motherclass {
  getX(): string {
    return "value";
  }
  getY(): boolean | undefined {
    return true;
  }
  getxAxis(): object |undefined {
    return {
      type: this.getX(),
      boundaryGap: [0, 0.01],
    };
  }
  getyAxis(): object |undefined {
    return {
      type: this.getY() ? "category" : "",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    };
  }
  getGrid(): object {
    return {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    };
  }
  getTooltip(): object {
    return {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    };
  }
  getTitle(): object {
    return {
      text: "World Population",
    };
  }

  getSeries(): Array<object> {
    return [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
      },
    ];
  }
}
