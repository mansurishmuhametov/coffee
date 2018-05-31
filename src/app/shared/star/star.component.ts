import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(this.rating);
    }
}
