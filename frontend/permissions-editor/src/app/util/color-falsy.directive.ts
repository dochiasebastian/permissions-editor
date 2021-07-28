import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorFalsy]'
})
export class ColorFalsyDirective implements AfterViewInit {
  @Input() appColorFalsy: boolean = true;

  constructor(private el: ElementRef) {}
  
  ngAfterViewInit(): void {
    if (!this.appColorFalsy) {
      this.el.nativeElement.style.color = "#FF4C1F";
    }
  }

}
