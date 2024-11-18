import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AmplifyAuthenticatorModule, DashboardComponent],
})
export class AppComponent {
  title = 'Dashboard';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs)
  }

}
