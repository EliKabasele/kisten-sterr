import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produkt-kisten',
  templateUrl: './produkt-kisten.component.html',
  styleUrls: ['./produkt-kisten.component.scss']
})
export class ProduktKistenComponent implements OnInit {

  image_cards = [
    {
      imgSrc: '../../../../assets/images/gutKiste.jpg',
      imgTitle: 'Exportkisten',
      detailLink: '/produkte/kisten/exportkiste'
    },
    {
      imgSrc: '../../../../assets/images/longKist.jpg',
      imgTitle: 'Transportkisten',
      detailLink: '/produkte/kisten/transportkiste'
    },
    {
      imgSrc: '../../../../assets/images/kiste3.jpg',
      imgTitle: 'Obstkisten',
      detailLink: '/produkte/kisten/obstkiste'
    },
    {
      imgSrc: '../../../../assets/images/transportpalette.jpg',
      imgTitle: 'Transportpaletten',
      detailLink: '/produkte/kisten/transportpalette'
    },
    {
      imgSrc: '../../../../assets/images/gutKiste.jpg',
      imgTitle: 'Prismen',
      detailLink: '/produkte/kisten/prisme'
    },
    {
      imgSrc: '../../../../assets/images/verschlag.jpg',
      imgTitle: 'Verschläge',
      detailLink: '/produkte/kisten/verschlag'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
