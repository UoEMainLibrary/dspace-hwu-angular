import { Component } from '@angular/core';
import { AboutComponent as BaseComponent } from '../../../../../app/info/about/about.component';
import { ThemedAboutComponent } from '../../../../../app/info/about/themed-about.component';


@Component({
  selector: 'ds-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html',
  standalone: true,
  imports: [ThemedAboutComponent]

})

/**
 * Component displaying the Privacy Statement
 */
export class AboutComponent extends BaseComponent {}

