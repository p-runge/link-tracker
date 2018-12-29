import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router) { }

  public status: String = 'You will be redirected...';

  ngOnInit() {
    // get current relative path without trailing slash
    const link = this.router.url.substr(1);
    console.log(link);

    // check if link exists in database
    const dbRefLinks = firebase.database().ref().child('links');
    dbRefLinks.once('value').then(snap => {
      if (snap.hasChild(link)) {
        const dbRefLink = dbRefLinks.child(link);
        const snapLink = snap.child(link);

        // update click counter in database
        const clicks = snapLink.child('clicks').val();
        dbRefLink.update({
          clicks: clicks + 1
        });

        // redirect
        const originalUrl = snapLink.child('original').val();
        console.log(originalUrl);
        window.location.href = (
          originalUrl.startsWith('http://') ||
          originalUrl.startsWith('https://')
        ) ? originalUrl
        : 'http://' + originalUrl;
      } else {
        // link not found in database
        this.status = 'This URL has not been found in our database.';
      }
    });
  }

}
