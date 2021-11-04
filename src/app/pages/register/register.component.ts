import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  promotion: any = {};

  constructor(private router: Router) { }

  public formAtribute: FormGroup = new FormGroup({
    'gtin': new FormControl(null),
    'description': new FormControl(null),
    'regularPrice': new FormControl(null),
    'promotionalPrice': new FormControl(null),
    'promotionalStart': new FormControl(null),
    'promotionalFinish': new FormControl(null),
    'categorie': new FormControl('Selecione a categoria'),
  })

  public categorieList = [
    {value: 'Selecione a categoria', type: 'Selecione a categoria'},
    {value: 'Telefonia', type: 'Telefonia'},
    {value: 'Informática', type: 'Informática'},
    {value: 'Eletrodomésticos', type: 'Eletrodomésticos'},
    {value: 'Eletroportáteis', type: 'Eletroportáteis'},
    {value: 'Móveis', type: 'Móveis'},
    {value: 'Automotivos', type: 'Automotivos'},
    {value: 'Bebidas', type: 'Bebidas'},
    {value: 'Cereais', type: 'Cereais'},
  ]

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.formAtribute.status === 'VALID') {
      this.promotion = Object.assign(this.promotion, this.formAtribute.value);
      this.addPromotion(this.promotion);
      this.router.navigateByUrl('/'); 
    }
  }

  addPromotion(promotion: any){
    let promotions = [];
    if(localStorage.getItem('Promotions')){
      promotions = JSON.parse(localStorage.getItem('Promotions') || '{}');
      promotions = [promotion, ...promotions];
    }
    else
    {
      promotions = [promotion];
    }
    localStorage.setItem('Promotions',JSON.stringify(promotions));
  }

  navigate() {
    this.router.navigateByUrl('/');
  }
}
