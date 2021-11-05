import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mytable!: any;
  myDate: Date;

  constructor(private router: Router) {
    this.myDate = new Date();
   }

  public headerTable = [
    { label: 'GTIN' },
    { label: 'Descrição completa' },
    { label: 'Categoria' },
    { label: 'Preço regular' },
    { label: 'Preço promocional' },
    { label: 'Data de inicio da promoção' },
    { label: 'Data final da promoção' },
    { label: 'Status da promoção' }
  ]

  public mytableMock = [
    {
      categorie: "Informática",
      description: "Hd Ssd 240Gb Kingston A400 Sata 3.0 2,5” Leitura 500MB/s e Gravação 450MB/s",
      gtin: "Ssd 240Gb",
      promotionalFinish: "2021-11-03",
      promotionalPrice: 225,
      promotionalStart: "2021-11-01",
      regularPrice: 230,
    },
  ]

  ngOnInit(): void {
    this.table();
    this.addNew();
  }

  table() {
    this.mytable =  JSON.parse(localStorage.getItem('Promotions') || '{}');
  }

  navigate() {
    this.router.navigateByUrl('/cadastro');
  }

  addNew(){
    this.mytable.push(
      {
        categorie: "Informática",
        description: "Hd Ssd 240Gb Kingston A400 Sata 3.0 2,5” Leitura 500MB/s e Gravação 450MB/s",
        gtin: "Ssd 240Gb",
        promotionalFinish: "2021-11-03",
        promotionalPrice: 225,
        promotionalStart: "2021-11-01",
        regularPrice: 230,
      },
    );
  }

}
