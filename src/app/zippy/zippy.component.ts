import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  @Input("title") title: string = ""
  showContent = false
  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
}
