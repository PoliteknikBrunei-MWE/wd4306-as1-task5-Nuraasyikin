import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonLabel, IonMenuToggle, IonItem } from '@ionic/angular/standalone';
import { IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonHeader, IonContent, IonApp, IonRouterOutlet, IonMenu, IonMenuToggle],
})
export class AppComponent {
  constructor() {}
}
