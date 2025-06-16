import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterComponent} from './features/auth/register/register';
import {Footer} from './shared/components/footer/footer';
import {Header} from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'DeliveryMatch-FrontEnd';
}
