import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { D3Service, D3 } from 'd3-ng2-service';
export const DASH_ANIMATION = 300;
@Component({
  selector: 'app-hexagon-pagination',
  templateUrl: './hexagon-pagination.component.html',
  styleUrls: ['./hexagon-pagination.component.scss'],
  animations: [
    trigger('pageNumber', [
      state('middle', style({
        display: 'box',
        transform: 'translateY(0%)',
        opacity: 1
      })),
      state('top', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('bottom', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('none', style({
        display: 'none',
        transform: 'translateX(100%)'
      })),
      transition('middle => top', animate('400ms ease-out')),
      transition('middle => bottom', animate('400ms ease-out')),
      transition('bottom => middle', animate('400ms ease-out')),
      transition('top => middle', animate('400ms ease-out'))
    ])
  ]
})
export class HexagonPaginationComponent implements OnInit {
  @Input()
  currentPage: number;

  // constiables for D3 Hexagon
  parent;
  containerWidth;
  containerHeight;
  width;
  height;
  shortSide;
  longSide;
  hypothenus;
  midPointX;
  midPointY;
  hexagonSVG;
  private hexagonData: any[];

  diagonalLineParent;
  diagonalLineContainerWidth;
  diagonalLineContainerHeight;
  diagonalLineMargin = { horizontal: 5, vertical: 5 };
  diagonalLineSVG;
  private diagonalLineData: any[];
  d3: D3;

  previousPagePosition = 'bottom';
  currentPagePosition = 'middle';

  previousPage = 1;
  private _currentPage = 1;

  constructor(
    private d3Service: D3Service,
    private ref: ChangeDetectorRef
  ) {
    this.ref = ref;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    const pageNo: SimpleChange = changes.currentPage;
    this.previousPage = pageNo.previousValue;
    this.currentPage = pageNo.currentValue;

    if (this.previousPage < this.currentPage) {
      this.previousPagePosition = 'middle';
      this.currentPagePosition = 'bottom';
      this.ref.detectChanges();
      this.previousPagePosition = 'top';
      this.currentPagePosition = 'middle';
      this.ref.detectChanges();
    } else {
      this.previousPagePosition = 'middle';
      this.currentPagePosition = 'top';
      this.ref.detectChanges();
      this.previousPagePosition = 'bottom';
      this.currentPagePosition = 'middle';
      this.ref.detectChanges();
    }

    if (this.d3) {
      this.redrawActiveLine();
    }

  }

  ngOnInit() {
    // Retrieve d3
    this.d3 = this.d3Service.getD3();
    this.generateHexagon();
    this.drawActiveLine();
    this.generateDiagonalLine();
  }

  generateHexagon() {
    this.getD3constiableForHexagon();
    this.setupSVGForHexagon();
    this.setupGradient();
    const greyLineData = this.getLineDataForGreyHexagon();
    this.setupCordinateForHexagon();
    this.drawBackgroundHexagon(greyLineData);
  }

  getD3constiableForHexagon() {
    this.parent = document.getElementById('hexagon');
    this.containerWidth = this.parent.offsetWidth;
    this.containerHeight = this.parent.offsetHeight;
    this.shortSide = this.containerWidth / 4;
    this.longSide = Math.sqrt(3) * this.shortSide;
    this.hypothenus = this.containerHeight / 2;
    this.midPointX = this.containerWidth / 2;
    this.midPointY = 0;
  }

  setupSVGForHexagon() {
    this.hexagonSVG = this.d3.select('#hexagon')
      .classed('svg-container', true)
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0 0 ${this.containerWidth} ${this.containerHeight}`)
      .classed('svg-content-responsive', true);
  }

  setupGradient() {
    const GradientAttribute = this.addAndReturnGradientAttribute();
    this.setGradientColorFor(GradientAttribute);
  }

  addAndReturnGradientAttribute() {
    const gradientAttribute = this.hexagonSVG.append('svg').append('linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '100%')
      .attr('y2', '0%');
    return gradientAttribute;
  }

  setGradientColorFor(gradientAttribute) {
    gradientAttribute.append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#5CDBBB')
      .attr('stop-opacity', 1);

    gradientAttribute.append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#67AFFF')
      .attr('stop-opacity', 1);
  }

  getLineDataForGreyHexagon() {
    const line = this.d3.line()
      .x((d: any) => d.x)
      .y((d: any) => d.y);
    return line;
  }

  setupCordinateForHexagon() {
    this.hexagonData = [
      { 'x': this.midPointX, 'y': this.midPointY }, // point 0
      { 'x': this.midPointX + this.longSide, 'y': this.midPointY + this.shortSide }, // point 1
      { 'x': this.midPointX + this.longSide, 'y': this.midPointY + this.shortSide + this.hypothenus }, // point 2
      { 'x': this.midPointX, 'y': this.midPointY + 2 * this.shortSide + this.hypothenus }, // point 3
      { 'x': this.midPointX - this.longSide, 'y': this.shortSide + this.hypothenus }, // point 4
      { 'x': this.midPointX - this.longSide, 'y': this.shortSide }, // point 5
      { 'x': this.containerWidth / 2, 'y': 0 } // point 0
    ];
  }

  drawBackgroundHexagon(greyLineData) {
    const hexagon = this.hexagonSVG.append('path')
      .attr('d', greyLineData(<any>this.hexagonData))
      .attr('stroke', '#666666')
      .attr('stroke-width', 1)
      .attr('fill', 'none');
  }

  drawActiveLine() {
    const hexagonData = this.hexagonData.slice(0, this.currentPage + 1);
    // Draw the lines
    const lineGenerator = this.d3.line()
      .x((d: any) => d.x)
      .y((d: any) => d.y);
    const hexagon = this.hexagonSVG.append('path')
      .attr('id', 'active')
      .attr('d', lineGenerator(<any>hexagonData))
      .attr('stroke', 'url(#gradient)')
      .attr('stroke-width', 3.5)
      .attr('fill', 'none');

    const totalLength = (<any>hexagon).node().getTotalLength();

    hexagon
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .attr('stroke-dashoffset', 0);
      // .transition()
      // .duration(DASH_ANIMATION)
      // .ease(this.d3.easeLinear)
  }

  generateDiagonalLine() {
    this.getD3constiableForDiagonalLine();
    this.setupSVGForDiagonalLine();
    const diagonalLineData = this.getLineDataForDiagonalLine();
    this.setupCordinateForDiagonalLine();
    this.drawDiagonalLine(diagonalLineData);
  }

  getD3constiableForDiagonalLine() {
    this.diagonalLineParent = document.getElementById('text');
    this.diagonalLineContainerWidth = this.diagonalLineParent.offsetWidth;
    this.diagonalLineContainerHeight = this.diagonalLineParent.offsetHeight;
  }

  setupSVGForDiagonalLine() {
    this.diagonalLineSVG = this.d3.select('#text')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0 0 ${this.diagonalLineContainerWidth} ${this.diagonalLineContainerHeight}`);
  }

  getLineDataForDiagonalLine() {
    const line = this.d3.line()
      .x((d: any) => d.x)
      .y((d: any) => d.y);
    return line;
  }

  setupCordinateForDiagonalLine() {
    this.diagonalLineData = [
      // { 'x': this.diagonalLineContainerWidth + 5, 'y': 0 - 5},
      // { 'x': 0 + 5 , 'y': this.diagonalLineContainerHeight - 5},
      { 'x': this.diagonalLineContainerWidth - this.diagonalLineMargin.horizontal, 'y': this.diagonalLineMargin.vertical },
      { 'x': this.diagonalLineMargin.horizontal, 'y': this.diagonalLineContainerHeight - this.diagonalLineMargin.vertical }
    ];
  }

  drawDiagonalLine(diagonalLineData) {
    this.diagonalLineSVG.append('path')
      .attr('d', diagonalLineData(<any>this.diagonalLineData))
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .attr('fill', 'none');
  }

  redrawActiveLine() {
    // Draw the lines
    const lineGenerator = this.d3.line()
      .x((d: any) => d.x)
      .y((d: any) => d.y);
    const hexagon = this.hexagonSVG.select('path#active')
      .attr('d', lineGenerator(<any>this.hexagonData));

    // HANDLE ANIMATION
    // Total length of the hexagonal path
    const totalLength = (<any>hexagon).node().getTotalLength();
    // Control the animation
    const dashOffset: number = totalLength;
    let startDashOffset: number = totalLength;
    let endDashOffset = 0;

    // Check the previous page to get the offsets
    if (this.previousPage < this.currentPage) {
      startDashOffset = totalLength / 6 * (6 - this.previousPage);
      endDashOffset = totalLength / 6 * (6 - this.currentPage);
    } else {
      startDashOffset = totalLength / 6 * (6 - this.previousPage);
      endDashOffset = totalLength / 6 * (6 - this.currentPage);
    }

    hexagon
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', startDashOffset)
      // .transition()
      // .duration(DASH_ANIMATION)
      // .ease(this.d3.easeLinear)
      .attr('stroke-dashoffset', endDashOffset);

  }

}
