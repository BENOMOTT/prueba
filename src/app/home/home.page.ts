import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    const nombreUsuarioParam = this.activatedRoute.snapshot.paramMap.get('nombreUsuario');
    if (nombreUsuarioParam !== null) {
      this.nombreUsuario = nombreUsuarioParam;
      console.log('Datos obtenidos:', this.nombreUsuario);
      this.cdr.detectChanges(); 
    }
  }
}

