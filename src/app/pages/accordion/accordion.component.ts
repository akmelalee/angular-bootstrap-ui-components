import { Component } from '@angular/core';

interface accordionList  {
  title: string,
  description: string
}
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  simpleAccordion:accordionList[]= [
    {
      title: 'Item 1',
      description: 'item 1 description',
    },
    {
      title: 'Item 2',
      description: 'item 2 description',
    },
    {
      title: 'Item 3',
      description: 'item 3 description',
    }
  ];

}
