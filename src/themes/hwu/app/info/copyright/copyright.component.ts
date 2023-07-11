import { Component } from '@angular/core';
import { CopyrightComponent as BaseComponent } from '../../../../../app/info/copyright/copyright.component';


@Component({
  selector: 'ds-copyright',
  styleUrls: ['./copyright.component.scss'],
  templateUrl: './copyright.component.html',
})

/**
 * Component displaying the Copyright Statement
 */
export class CopyrightComponent extends BaseComponent {}

