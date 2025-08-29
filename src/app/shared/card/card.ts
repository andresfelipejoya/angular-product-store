import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CardItem {
  title: string;
  description: string;
  image?: string;
  price?: number;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Output() button1emit = new EventEmitter<CardItem>();
  @Output() button2emit = new EventEmitter<CardItem>();

  @Input() item: CardItem = {
    title: '',
    description: '',
    image: ''
  };
  @Input() size: 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() textButton1: string = '';
  @Input() textButton2: string = '';

  public onButton1Click(item: CardItem): void {
    this.button1emit.emit(item);
  }

  public onButton2Click(item: CardItem): void {
    this.button2emit.emit(item);
  }
}
