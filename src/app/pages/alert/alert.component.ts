import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  AlertsData = [
  {title: 'primary', type: 'alert-primary', icon: 'bi-info'},
  {title: 'secondary', type: 'alert-primary', icon: 'bi-bag-check-fill'},
  {title: 'success', type: 'alert-success', icon: 'bi-bag-check-fill'},
  {title: 'danger', type: 'alert-danger', icon: 'bi-exclamation-square-fill'},
  {title: 'warning', type: 'alert-warning', icon: 'bi-exclamation-square-fill'},
  {title: 'info', type: 'alert-info', icon: 'bi-exclamation-square-fill'},
  {title: 'light', type: 'alert-light', icon: 'bi-exclamation-square-fill'},
  {title: 'dark', type: 'alert-dark', icon: 'bi-exclamation-square-fill'}
  ];
}
