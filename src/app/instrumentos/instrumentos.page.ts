import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.page.html',
  styleUrls: ['./instrumentos.page.scss'],
})
export class InstrumentosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reproducirSonido(rutaSonido: string) {
    const audio = new Audio(rutaSonido);
    audio.play();
  }


}
