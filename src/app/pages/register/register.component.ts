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
    { label: "Acessórios de Tecnologia" },
    { label: "Ar e Ventilação" },
    { label: "Artesanato" },
    { label: "Artigos para Festa" },
    { label: "Áudio" },
    { label: "Automotivo" },
    { label: "Bebês" },
    { label: "Beleza & Perfumaria" },
    { label: "Bem-estar Sexual" },
    { label: "Brinquedos" },
    { label: "Cama, Mesa e Banho" },
    { label: "Câmeras e Drones" },
    { label: "Casa e Construção" },
    { label: "Casa Inteligente" },
    { label: "Celular e Smartphone" },
    { label: "Colchões" },
    { label: "Comércio e Indústria" },
    { label: "Cursos" },
    { label: "Decoração" },
    { label: "Eletrodomésticos" },
    { label: "Eletroportáteis" },
    { label: "Esporte e Lazer" },
    { label: "Ferramentas" },
    { label: "Filmes e Séries" },
    { label: "Games" },
    { label: "Informática" },
    { label: "Instrumentos Musicais" },
    { label: "Livros" },
    { label: "Mercado" },
    { label: "Moda" },
    { label: "Móveis" },
    { label: "Música e Shows" },
    { label: "Natal" },
    { label: "Papelaria" },
    { label: "Pet Shop" },
    { label: "Relógios" },
    { label: "Saúde e Cuidados Pessoais" },
    { label: "Serviços" },
    { label: "Suplementos Alimentares" },
    { label: "Tablets, iPads e E-Readers" },
    { label: "Telefonia Fixa" },
    { label: "TV e Vídeo" },
    { label: "Utilidades Domésticas" }
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
