// src/app/header/header.component.ts

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/profile/1" routerLinkActive="active">Profile</a>
      <a routerLink="/products/list" routerLinkActive="active">Products</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
  `,
  styles: [
    `
      nav {
        background-color: #333;
        padding: 10px;
      }

      a {
        color: white;
        margin-right: 15px;
        text-decoration: none;
      }

      .active {
        font-weight: bold;
      }
    `
  ]
})
export class HeaderComponent { }
