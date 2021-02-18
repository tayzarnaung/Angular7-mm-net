import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive( {  selector: '[appMakeround]'	} )

export class MakeroundDirective {

  @Input() minRadius = '0%';
  @Input() maxRadius : any; 

  borderRadius : any;

  constructor(private elementRef : ElementRef, private renderer : Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'maroon')
  }

  @HostListener('mouseenter') mymousein(){
    // this.borderRadius = '50%';
    this.borderRadius = this.maxRadius;
  }

  @HostListener('mouseleave') mymouseout(){
    this.borderRadius = this.minRadius
  }

  @HostBinding('style.border-radius') get myradius(){
    // ('style.width')  css style property=> background-color, color, font-size, height  etc.
    return this.borderRadius;
  }

}