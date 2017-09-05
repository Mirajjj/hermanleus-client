import { Directive, ElementRef } from '@angular/core';

declare var window: any
declare var $: any
declare var setInterval: any

@Directive({
  selector: '[space-walk]'
})

export class SpaceWalkDirective {
  constructor(el: ElementRef) {
    const img = $(el.nativeElement)
    let width = 101
    const timeDelta = 40
    const delta = 0.03
    const bottomLimit = 101
    const topLimit = 150

    let isDirectionForward = false 

    img.width(width + '%')
    
    const scene = setInterval(function() {
      console.log(width)
      if (isDirectionForward) {
        width += delta

        img.width(width + '%')
             .css('margin-left', '-' + (width - 100) / 2 + '%')

        isDirectionForward = width < topLimit     
      } else {
        width -= delta

        img.width(width + '%')
             .css('margin-left', '-' + (width - 100) / 2 + '%')

        isDirectionForward = width < bottomLimit 
      }
    }, timeDelta)
  }
}