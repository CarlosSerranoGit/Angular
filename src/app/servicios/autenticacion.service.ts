import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute) { }
  registroUsuario (userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email,
   userdata.password)
    .catch(error => {
      console.log(error);
      }
      )
    }

    inicioSesion (userdata) {
      firebase.auth().signInWithEmailAndPassword(userdata.email,
            userdata.password)
            .then(response => {
            console.log(response);
          this.router.navigate(['/']);
          })
          .catch(
          error => {
          console.log(error);
          }
          )
    }
    isAuthenticated() {
        const user = firebase.auth().currentUser;

        if (user) {
        return true;
        } else {
        return false;
        }
      }
      getUserName(){
        console.log(firebase.auth().currentUser);
        return (firebase.auth().currentUser).email;
      }
      
logout() {
  firebase.auth().signOut();
  } 
}
