import { Observable } from 'rxjs';
import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: ['one', 'two', 'three'],
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  subscriptionTypes: Observable<string[]>;
  postError = false;
  postErrorMessage = '';
  singleModel = 'On';
  startDate: Date;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log(`error: ${errorResponse}`);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log(`In onSubmit: ${form.value}`);

    // tslint:disable-next-line: max-line-length
    // if (form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(result => console.log(`Here is the result:`, result),
    // error => this.onHttpError(error));
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }
  }

  onBlur(field: NgModel) {
    console.log(`In onBlur: ${field.valid}`);
  }

}
