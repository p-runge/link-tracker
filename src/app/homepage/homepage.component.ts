import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public minimizedLink: String;

  public createMinimizedLink() {
    // get link
    const eLink: any = document.getElementById('link-input');
    const link = eLink.value;

    // connect to database
    const dbRefLinks = firebase.database().ref().child('links');

    // create new object for given link
    const key = dbRefLinks.push().key;
    const minimizedLink = environment.linkBase + '/' + key;
    const newLinkObject = {
      clicks: 0,
      original: link,
      minimized: minimizedLink,
    };

    // insert object into database
    dbRefLinks.child(key).set(newLinkObject, error => {
      if (error) {
        console.log(error);
      } else {
        // new object has been successfully written to database
        this.minimizedLink = minimizedLink;
      }
    });
  }
}
