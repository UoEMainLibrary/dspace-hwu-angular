import { Component } from '@angular/core';
import { AccessibilityComponent as BaseComponent } from '../../../../../app/info/accessibility/accessibility.component';
import { ThemedAccessibilityComponent } from '../../../../../app/info/accessibility/themed-accessibility.component';


@Component({
  selector: 'ds-accessibility',
  styleUrls: ['./accessibility.component.scss'],
  templateUrl: './accessibility.component.html',
  standalone: true,
  imports: [ThemedAccessibilityComponent],
})

/**
 * Component displaying the Accessibility Statement
 */
export class AccessibilityComponent extends BaseComponent {}

