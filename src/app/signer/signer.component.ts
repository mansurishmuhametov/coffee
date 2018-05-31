import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-signer',
    templateUrl: './signer.component.html',
    styleUrls: ['./signer.component.scss']
})
export class SignerComponent implements OnInit {
    @Input() name;

    constructor() { }

    getName() {
        return this.name;
    }

    ngOnInit() { }
}
