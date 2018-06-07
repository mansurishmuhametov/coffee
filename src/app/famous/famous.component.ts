import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-famous',
    templateUrl: './famous.component.html',
    styleUrls: ['./famous.component.scss']
})
export class FamousComponent implements OnInit {
    creation: 'not created';
    name: '';
    isMessage: false;
    names: string[] = ['Jasmine Thompson', 'Elleonora Ladichenko', 'Patricia Atom'];

    constructor() { }

    ngOnInit() { }

    onAddSigner() {
        this.names.push(this.name);
        this.name = '';
    }

    getColor() {
        return this.isMessage ? 'red' : 'yellow';
    }
}
