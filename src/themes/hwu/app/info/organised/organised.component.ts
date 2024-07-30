import { Component } from '@angular/core';
import { OrganisedComponent as BaseComponent } from '../../../../../app/info/organised/organised.component';
import { ThemedOrganisedComponent } from '../../../../../app/info/organised/themed-organised.component';


@Component({
  selector: 'ds-organised',
  styleUrls: ['./organised.component.scss'],
  templateUrl: './organised.component.html',
  standalone: true,
  imports: [ThemedOrganisedComponent]
})

/**
 * Component displaying the Organised Statement
 */
export class OrganisedComponent extends BaseComponent {}

