import { Component, OnInit } from '@angular/core';
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
  constructor(private fruitService: FruitServiceService) { }

  async ngOnInit(): Promise<void> {
    this.fruits = await this.fruitService.getFruits();
    this.totalPages = Math.ceil(this.fruits.length / 10);
    this.actualFruits = this.fruits.slice(0, 10);
  }

  previousPage() {
    this.page--;
    this.actualFruits = this.fruits.slice(this.page * 10, (this.page + 1) * 10);

  }

  nextPage() {
    this.page++;
    this.actualFruits = this.fruits.slice(this.page * 10, (this.page + 1) * 10);
  }

}
