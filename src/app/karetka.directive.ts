import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appKaretka]'
})
export class KaretkaDirective {

  constructor() {
  }

  moveCarriage(input): void {
    const {value} = input;
    if (!value) {
      return;
    }
    const index = value.search('_');
    if (index >= 0) {
      input.setSelectionRange(index, index);
    }
  }

  @HostListener('focus', ['$event.target']) onFocus(input): void {
    this.moveCarriage(input);
  }

  @HostListener('click', ['$event.target']) onClick(input): void {
    this.moveCarriage(input);
  }
}
