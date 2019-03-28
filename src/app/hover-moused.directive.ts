import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverMoused]'
})
export class HoverMousedDirective implements OnInit{
  ngOnInit(){}
  constructor() { }

  @HostBinding('style.backgroundColor') myBack: string;
  @HostBinding('style.fontSize') mySize: string;

  @HostListener('mouseenter') mouseEnterEvent (eventData: Event){
    this.myBack = 'yellow';
    this.mySize = 3 + 'rem';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event){
    this.myBack = 'rgba(0,0,0,0)';
    this.mySize = 2 + 'rem';
  }
}
