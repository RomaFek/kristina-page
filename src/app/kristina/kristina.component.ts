import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kristina',
  templateUrl: './kristina.component.html',
  styleUrls: ['./kristina.component.scss']
})
export class KristinaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  message = '';
  selectedFact: string | null = null;

  facts = [
    { label: 'Факт 1', text: 'Кристина любит путешествия.' },
    { label: 'Факт 2', text: 'Кристиночка обожает уютные вечера с M&Ms и интересным сериалом.' },
    { label: 'Факт 3', text: 'Её улыбка способна поднимать настроение не только мне, но и всем вокруг.' },
    { label: 'Факт 4', text: 'Малышка знает, как создать атмосферу в доме, и всегда украшает его с любовью.' },
    { label: 'Факт 5', text: 'Она всегда поддержит и даст дельный совет в любой ситуации, благодаря этому я добился успехов.' },
    { label: 'Факт 6', text: 'Её чувство стиля - это что-то особенное. Она всегда выглядит великолепно!' },
    { label: 'Факт 7', text: 'У неё есть любимые шоколадки kinder, которые помогают сделать ее счастливее.' },
    { label: 'Факт 8', text: 'Её любимый цвет - розовый, именно поэтому страничка в таких цветах.' },
    { label: 'Факт 9', text: 'Она не боится быть искренней.' },
    { label: 'Факт 10', text: 'Кристиночка обожает прогулки, и сделает все чтобы у нее за день были 20 000 шагов, а если за день не успее то будет дома добиваться поставленной цели' },
    { label: 'Факт 11', text: 'Она не боится пробовать новое.' },
    { label: 'Факт 12', text: 'Для меня каждый день рядом с ней — это маленький праздник' },
  ];

  showMessage() {
    this.message = 'Милая, это всего лишь набросок на скорую руку. Если тебе понравится идея, обещаю сделать для тебя сайт, который затмит любой сайт в мире! 💖😄'
  }

  // showFact(fact: { label: string; text: string }) {
  //   this.selectedFact = fact.text;
  // }
  isModalOpen = false;
  // selectedFact: string | null = null;

  // facts = [
  //   { label: 'Факт 1', text: 'Kristina любит путешествия.' },
  //   { label: 'Факт 2', text: 'Kristina обожает природу.' },
  //   { label: 'Факт 3', text: 'Kristina всегда позитивна.' }
  // ];

  openModal(fact: { label: string; text: string }) {
    this.selectedFact = fact.text;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedFact = null;
  }
}
