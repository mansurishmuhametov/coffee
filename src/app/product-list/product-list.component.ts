import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import * as _ from 'lodash';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    pageTitleInfo = this.pageTitle;
    products: IProduct[] = [
        {
            id: 1,
            name: 'Elleonora',
            code: 'gt-17',
            rating: 2,
            url: 'https://cdn.prognozist.ru/posts/2015-02/1423423120_dpjf.png'
        },
        {
            id: 2,
            name: 'Patricia',
            code: 'gt-st-21',
            rating: 5,
            url: 'https://cdn.prognozist.ru/posts/2015-02/1423423120_dpjf.png'
        }
    ];
    filteredProducts = this.products;
    name = 'Kristina';
    isShowImage = true;

    _filter: string;
    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        this.refreshProducts();
    }

    constructor() {}

    ngOnInit(): void {
        console.log('In OnInit');
    }

    showImage(): void {
        this.isShowImage = !this.isShowImage;
    }

    refreshProducts(): void {
        const filter = this.filter;

        if (!filter) {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = _.filter(this.products, item => {
                return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            });
        }
    }

    onRatingClicked(message: string): void {
        this.pageTitleInfo = `${this.pageTitle}: ${message}`;
    }
}
