import { Directive ,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // private _backgroundcolor: string = 'transparent';

  @Input('appHighlight') set backgroundcolor(color : string){
    this.el.nativeElement.style.backgroundColor = color;
  }
   
  constructor(private el: ElementRef) {
    // setTimeout(() => {
    // //   this.el.nativeElement.style.backgroundColor = this.backgroundcolor;
    // }, 5000);
    
   }
  //  @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
