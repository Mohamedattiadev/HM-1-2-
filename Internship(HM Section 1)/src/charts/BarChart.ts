import Motherclass from "./Motherclass";
export default class BarChart extends Motherclass {
  getX(): string {
    return "category";
  }

  getY(): boolean | undefined {
    return true;
  }

  getxAxis(): object| undefined {
    return {
      type: this.getX(),
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  }

  getyAxis(): object| undefined {
    return {
      type: this.getY() ? "value" : "",
    };
  }

  getSeries(): Array<object> {
    return [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ];
  }
}
