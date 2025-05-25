import Motherclass from "./Motherclass";

export default class PieChart extends Motherclass {
 
  getTitle(): object {
    return {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    };
  }
  getTooltip(): object {
    return {
      trigger: "item",
    };
  }
  getLegend(): object {
    return {
      orient: "vertical",
      left: "left",
    };
  }

  getSeries(): Array<object> {
    return [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ];
  }
}
