import { Component } from '@angular/core';

import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { AccessibilityComponent } from './accessibility.component';

/**
 * Themed wrapper for AccessibilityComponent
 */
@Component({
  selector: 'ds-accessibility',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [AccessibilityComponent],
})
export class ThemedAccessibilityComponent extends ThemedComponent<AccessibilityComponent> {
  protected getComponentName(): string {
    return 'AccessibilityComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/accessibility/accessibility.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./accessibility.component`);
  }

}
