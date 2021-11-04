import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mytable!: any;

  constructor(private router: Router) { }

  public headerTable = [
    { label: 'GTIN' },
    { label: 'Descrição completa' },
    { label: 'Categoria' },
    { label: 'Preço regular' },
    { label: 'Preço promocional' },
    { label: 'Data de inicio da promoção' },
    { label: 'Data final da promoção' }
  ]

  ngOnInit(): void {
    this.table();
  }

  table() {
    this.mytable =  JSON.parse(localStorage.getItem('Promotions') || '{}');
  }

  navigate() {
    this.router.navigateByUrl('/cadastro');
  }

}
