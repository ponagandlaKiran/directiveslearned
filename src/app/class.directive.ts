import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor(private element :ElementRef) { 
    console.log('newdirectiveworking');
    // this.element.nativeElement.style.backgroundColor='orange';
  }

}
