import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register-page',
  styleUrl: './form-register-page.css',
  imports: [ReactiveFormsModule],
  templateUrl: './form-register-page.html',
})
export class FormRegisterPage {

  registerForm = new FormGroup({

    nombre: new FormControl('',[
      Validators.required, 
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    
    apellidos: new FormControl('',[
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(50), 
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    
    telefono: new FormControl('',[
      Validators.required, 
      Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),

    email: new FormControl('',[
      Validators.required, 
      Validators.email]),

    nombreMascota: new FormControl('',[
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(20), 
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    
    especie: new FormControl('' ,
      Validators.required),

    sexo: new FormControl('', 
      Validators.required),

    raza: new FormControl('', 
      Validators.maxLength(40)),

    edadMascota: new FormControl('', [
      Validators.required, 
      Validators.min(0), 
      Validators.max(30)]),

    peso: new FormControl('',[
      Validators.required, 
      Validators.min(0.1), 
      Validators.max(90)]),

    numeroMicrochip: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^\d{15}$/)]),

    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(10), 
      Validators.maxLength(24), 
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    
    motivoPrimeraVisita: new FormControl('', [
      Validators.required, 
      Validators.minLength(10), 
      Validators.maxLength(300)]),

    politicaPrivacidad: new FormControl('', 
      Validators.requiredTrue ),

    recordatorioVacunas: new FormControl('')

  });



  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

}
