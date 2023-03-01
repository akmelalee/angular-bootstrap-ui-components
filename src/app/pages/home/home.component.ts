import { Component } from '@angular/core';
interface uiComponent {
  title: string;
  path: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Angular Bootstrap UI Components';
  Components: uiComponent[] = [
    {title: 'Accordion', path: '/accordion' },
    {title: 'Alerts', path: '/alert' },
    {title: 'Badge', path: '' },
    {title: 'Breadcrumb', path: '' },
    {title: 'Buttons', path: '' },
    {title: 'Button group', path: '' },
    {title: 'Card', path: '' },
    {title: 'Carousel', path: '' },
    {title: 'Collapse', path: '' },
    {title: 'Dropdowns', path: '' },
    {title: 'List group', path: '' },
    {title: 'Modal', path: '' },
    {title: 'Navs & tabs', path: '' },
    {title: 'Navbar', path: '' },
    {title: 'Offcanvas', path: '' },
    {title: 'Pagination', path: '' },
    {title: 'Popovers', path: '' },
    {title: 'Progress', path: '' },
    {title: 'Scrollspy', path: '' },
    {title: 'Spinners', path: '' },
    {title: 'Toasts', path: '' },
    {title: 'Tooltips', path: '' }
  ]

}
