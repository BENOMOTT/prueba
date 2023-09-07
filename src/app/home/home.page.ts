import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string = '';

  @ViewChild('card', { read: ElementRef }) card!: ElementRef;

  private animation!: Animation;

  
  constructor(private animationCtrl: AnimationController,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef) {}


    ngOnInit() {
      const nombreUsuarioParam = this.activatedRoute.snapshot.paramMap.get('nombreUsuario');
      if (nombreUsuarioParam !== null) {
        this.nombreUsuario = nombreUsuarioParam;
        console.log('Datos obtenidos:', this.nombreUsuario);
        this.cdr.detectChanges(); 
      }
    }
  ngAfterViewInit() {
    if (this.card) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(3000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, width: '80px' },
          { offset: 0.72, width: 'var(--width)' },
          { offset: 1, width: '240px' },
        ]);
    }
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }
}


