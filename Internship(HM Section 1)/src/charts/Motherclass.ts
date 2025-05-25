export default class Motherclass {
  x: string;
  y: boolean | undefined;
  series: Array<object>;
  option: object;
  constructor() {
    this.x = this.getX();
    this.y = this.getY();
    this.series = this.getSeries();
    this.option = {
      xAxis: this.getxAxis(),
      yAxis: this.getyAxis(),
      tooltip: this.getTooltip(),
      title: this.getTitle(),
      legend: this.getLegend(),
      series: this.series,
    };
  }
  getX(): string {
    return "";
  }

  getY(): boolean | undefined {
    return undefined;
  }
  getxAxis(): object| undefined {
    return undefined
  }

  getGrid(): object {
    return {};
  }
  getyAxis(): object |undefined{
    return undefined; 
  }
  getTooltip(): object {
    return {};
  }
  getTitle(): object {
    return {};
  }
  getLegend(): object {
    return {};
  }
  getSeries(): Array<object> {
    return [];
  }

  getOption(): object {
    return this.option;
  }
}
