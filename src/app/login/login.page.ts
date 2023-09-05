import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Component, ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;
  isModalOpen = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  async setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async openModal() {
    this.setOpen(true);
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    return await modal.present();
  }

  closeModal() {
    this.setOpen(false); 
    this.modalController.dismiss();
  }

  



}
