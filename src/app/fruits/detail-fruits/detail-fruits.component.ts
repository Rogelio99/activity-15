import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-fruits',
  templateUrl: './detail-fruits.component.html',
  styleUrls: ['./detail-fruits.component.css']
})
export class DetailFruitsComponent implements OnInit {
  @Input() fruit: any;
  //@Input() nutritions: any;

  name: string = '';

  formCheckout = this.formBuilder.group({
    "genus": "",
    "name": "",
    "id": 0,
    "family": "",
    "order": "",
    "nutritions": ""
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      let data = JSON.parse(params['0']);
      this.name = data.name;
      data.nutritions = this.getNutritions(data.nutritions);
      this.formCheckout.setValue(data);
    });
  }

  getNutritions(nutritions: any){
    let result = '';
    Object.keys(nutritions).reduce((acc, key) => {
      result += `${key}: ${nutritions[key]}, `;
      return result;
    });
    return result;
  }


}
