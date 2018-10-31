// import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireObject } from 'angularfire2/database';
// import { Contact } from '../classes/contactListing';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {

//   constructor(private _database: AngularFireDatabase) { }

//   addMessage(): AngularFireObject<Contact> {
//     const messageDefault = new Contact;
//     const messageKey = this._database.list('/messages').push(messageDefault);
//     return this._database.object('/messages' + messageKey);
//   }
// }
