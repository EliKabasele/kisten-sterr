import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beab-holz',
  templateUrl: './beab-holz.component.html',
  styleUrls: ['./beab-holz.component.scss']
})
export class BeabHolzComponent implements OnInit {

  image_cards = [
    {
      imgSrc: '../../../../assets/images/kantkolz.jpeg',
      imgTitle: 'Kanthölzer',
      detailLink: '/produkte/holzhandlung/kantholz'
    },
    {
      imgSrc: '../../../../assets/images/bretter.jpg',
      imgTitle: 'Bretter',
      detailLink: '/produkte/holzhandlung/bretter'
    },
    {
      imgSrc: '../../../../assets/images/gartenholz.jpg',
      imgTitle: 'Gartenhölzer',
      detailLink: '/produkte/holzhandlung/gartenholz'
    },
    {
      imgSrc: '../../../../assets/images/blockware.jpg',
      imgTitle: 'Blockware',
      detailLink: '/produkte/holzhandlung/blockware'
    },
    {
      imgSrc: '../../../../assets/images/holzhandlung1.jpg',
      imgTitle: 'Holzwerkstoffe',
      detailLink: '/produkte/holzhandlung/holzwerkstoff'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
