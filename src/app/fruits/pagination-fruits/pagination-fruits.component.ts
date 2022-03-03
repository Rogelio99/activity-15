import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitServiceService } from 'src/app/services/fruit-service.service';

@Component({
  selector: 'app-pagination-fruits',
  templateUrl: './pagination-fruits.component.html',
  styleUrls: ['./pagination-fruits.component.css']
})
export class PaginationFruitsComponent implements OnInit {
  fruits: any = [];
  actualFruits: any = [];
  totalPages: number = 0;
  page: number = 0;
  error: string = '';

  formCheckout = this.formBuilder.group({
    search : '',
    filter : ''
  });

  constructor(
    private fruitService: FruitServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFruits();
  }

  previousPage() {
    this.page--;
    this.actualFruits = this.fruits.slice(this.page * 10, (this.page + 1) * 10);

  }

  nextPage() {
    this.page++;
    this.actualFruits = this.fruits.slice(this.page * 10, (this.page + 1) * 10);
  }

  detail(fruit: any){
    this.router.navigate(['/fruits/detail/', [JSON.stringify(fruit)]]);
  }


  onSubmit(): void {
    this.error= '';
    const values = this.formCheckout.value;
    for (const key in values) {
      if(values[key] == "") {
        this.error = "Todos los campos son obligatorios";
        return;
      }
    }
    this.fruitService.getFruitByFilter
      (this.formCheckout.value['filter'], this.formCheckout.value['search'])
      .subscribe(data => {
        this.setFruits(data);
      })

  }

  onReset(): void {
    this.formCheckout.reset();

    this.getFruits();
  }


  setFruits(fruits: any) {
    this.page = 0;
    this.fruits = fruits;
    this.totalPages = Math.ceil(this.fruits.length / 10);
    this.actualFruits = this.fruits.slice(0, 10);
  }

  getFruits(){
    this.fruitService.getFruits().subscribe(data => {
      this.setFruits(data);
    })
  }

}
