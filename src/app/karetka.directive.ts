import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appKaretka]'
})
export class KaretkaDirective {

  constructor() {
  }

  moveCarriage(e): void {
    const {value} = e.target;
    if (!value) {
      return;
    }
    const index = value.search('_');
    if (index >= 0) {
      e.target.setSelectionRange(index, index);
    }
  }

  @HostListener('focus', ['$event']) onFocus(e): void {
    this.moveCarriage(e);
  }

  @HostListener('click', ['$event']) onClick(e): void {
    this.moveCarriage(e);
  }
}
