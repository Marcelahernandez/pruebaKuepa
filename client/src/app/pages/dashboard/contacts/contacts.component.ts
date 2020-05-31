import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnDestroy {

  private alive = true;

  contacts: any[];
  recent: any[];

  constructor(private userService: UserData) {
    this.contacts = [];
    this.recent = [];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
