import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AddressModel } from '../model';
import { NgForm } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  faTrashAlt = faTrashAlt;

  @Input() address: AddressModel;
  @Input() index: number;

  @Output() removed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeAddress(index: number) {
    console.log("Removed: ", index);
    this.removed.next(index);
  }
}
