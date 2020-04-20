import { MatTable } from "@angular/material/table";
import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<Product>;

  products: Product[];
  displayedColumns = ["id", "name", "price"];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .productList()
      .subscribe((products) => (this.products = products));
  }
}
