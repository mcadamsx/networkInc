import { Component } from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
