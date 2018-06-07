import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import * as _ from 'lodash';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    private _productService;
    pageTitle = 'Product List';
    pageTitleInfo = this.pageTitle;
    products: IProduct[] = [];
    filteredProducts = this.products;
    name = 'Kristina';
    isShowImage = true;

    constructor(productService: ProductService) {
        this._productService = productService;
    }

    _filter: string;
    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        this.refreshProducts();
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(data => {
                this.products = data;
                this.refreshProducts();
            },
            err => {
                //обработка ошибки
            });
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
