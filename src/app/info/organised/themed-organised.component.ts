import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { OrganisedComponent } from './organised.component';

/**
 * Themed wrapper for Component
 */
@Component({
  selector: 'ds-themed-organised',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [OrganisedComponent]
})
export class ThemedOrganisedComponent extends ThemedComponent<OrganisedComponent> {
  protected getComponentName(): string {
    return 'OrganisedComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/organised/organised.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./organised.component`);
  }

}
