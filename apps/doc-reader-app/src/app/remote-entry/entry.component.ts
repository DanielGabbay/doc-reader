import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'dr-doc-reader-app-entry',
  template: `<dr-nx-welcome></dr-nx-welcome>`,
})
export class RemoteEntryComponent {}
