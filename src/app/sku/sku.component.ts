import { Component, OnInit } from "@angular/core";

import { SpecAdjoinMatrix } from "./specAdjoinMatrix";

@Component({
  selector: "app-sku",
  templateUrl: "./sku.component.html",
  styleUrls: ["./sku.component.scss"],
})
export class SkuComponent extends SpecAdjoinMatrix implements OnInit {
  specList = [
    { title: "颜色", list: ["红色", "紫色", "白色", "黑色"] },
    { title: "套餐", list: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    { title: "内存", list: ["64G", "128G", "256G"] },
  ];
  specCombinationList = [
    { id: "1", specs: ["紫色", "套餐一", "64G"] },
    { id: "2", specs: ["紫色", "套餐一", "128G"] },
    { id: "3", specs: ["紫色", "套餐二", "128G"] },
    { id: "4", specs: ["黑色", "套餐三", "256G"] },
  ];
  constructor() {
    super();
  }

  specsS = Array(this.specList.length).fill("");
  handleClick(text: string, index: number) {
    // 排除可选规格里面没有的规格
    if (this.specsS[index] !== text && !this.optionSpecs.includes(text)) return;
    // 根据text判断是否已经被选中了
    this.specsS[index] = this.specsS[index] === text ? "" : text;
    this.optionSpecs = this.getSpecscOptions(this.specsS);
  }
  ngOnInit(): void {
    this.quantityListInit();
  }
}
