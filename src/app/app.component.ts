import { Component } from '@angular/core';

type Product = {
  name: string;
  price: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'entrega';

  products: Product[] = [
    {
      name: 'Notebook',
      price: '1000',
    },
    {
      name: 'Tablet',
      price: '500',
    },
    {
      name: 'Smartphone',
      price: '300',
    },
    {
      name: 'Television',
      price: '2000',
    },
  ];

  isDisplayed = true;

  toggleDisplay() {
    if (this.isDisplayed) {
      this.isDisplayed = false;
    } else {
      this.isDisplayed = true;
    }
  };

}
