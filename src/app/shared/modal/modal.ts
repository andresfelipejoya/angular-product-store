import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ModalData {
  title: string;
  content: {
    id: number;
    price: number;
    text: string;
    quantity?: number;
    image?: string;
  }[];
  actions?: {
    confirm?: string;
    close?: string;
  };
  quantity?: number;
}

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {

  @Input() isOpen: boolean = false;

  @Input() modalData: ModalData = {
    title: '',
    content: [{
      id: 0,
      price: 0,
      text: '',
      image: ''
    }],
    actions: {
      confirm: '',
      close: '',
    },
    quantity: 0
  };

  @Output() close = new EventEmitter<void>();
  @Output() deleteQuantity = new EventEmitter<number>();
  @Output() updateQuantity = new EventEmitter<number>();

  onConfirm() {
    // Logic for confirm action
  }

  onClose() {
    this.close.emit();
  }

  onRemoveItem(itemId: number) {

    this.deleteQuantity.emit(itemId);
  }

  onAddItem(itemId: number) {
    this.updateQuantity.emit(itemId);
  }
}
