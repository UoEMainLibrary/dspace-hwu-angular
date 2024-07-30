import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { CopyrightComponent } from './copyright.component';

/**
 * Themed wrapper for Component
 */
@Component({
  selector: 'ds-themed-copyright',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [CopyrightComponent]
})
export class ThemedCopyrightComponent extends ThemedComponent<CopyrightComponent> {
  protected getComponentName(): string {
    return 'CopyrightComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/copyright/copyright.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./copyright.component`);
  }

}
