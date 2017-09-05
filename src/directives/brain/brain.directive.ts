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

    const events = {
      onHover: function () {
        $('.parallax .light').removeClass('bright')
        $('.parallax .light').addClass('dark')
      },
      onHoverOut: function () {
        $('.parallax .light').removeClass('dark')
         $('.parallax .light').addClass('bright')
      }
    }

    new window.brain(canvas, './assets/brainAssets', events)
  }

}
