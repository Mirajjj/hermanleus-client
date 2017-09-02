import { Directive, ElementRef } from '@angular/core';

declare var window: any;
declare var $: any;

@Directive({
  selector: '[brain]'
})

export class BrainDirective {

  constructor(el: ElementRef) {
    const canvas = el.nativeElement
    const resize = function () {
      $(canvas).width($(window).width());
      $(canvas).height($(window).height());
    };

    resize();

    $(window).resize(resize);

    new window.brain(canvas, './assets/brainAssets')
  }

}
