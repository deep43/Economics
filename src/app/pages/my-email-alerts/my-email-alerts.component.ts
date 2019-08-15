import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../helpers/must-match.validator';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-my-email-alerts',
  templateUrl: './my-email-alerts.component.html',
  styleUrls: ['./my-email-alerts.component.scss']
})
export class MyEmailAlertsComponent implements OnInit {
  itemList = [];
  selectedItems = [];
  settings = {};
  itemList2 = [];
  selectedItems2 = [];
  settings2 = {};

  config = {
    displayKey: 'name',
    search: false,
    height: 'auto',
    placeholder: 'Please Select',
  };
  client;
  clientDropdownOptions = [
    {id: 1, name: 'CIBC Capital Markets'},
  ];

  company;
  mediaMember = [

  ];

  country;
  countryDropdownOptions = [

  ];
  countryConfig = {...this.config, placeholder: 'Select a Country'};

  myProfileForm: FormGroup;
  submittedMyProfile = false;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.myProfileForm = this.formBuilder.group({
      company: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: [''],
      captcha: [''],
      title: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      retypeEmail: ['', [Validators.required, Validators.email]],
    }, {
      validator: MustMatch('email', 'retypeEmail')
    });

    this.itemList = [
      {id: 1, itemName: 'Select'},
    ];

    this.settings = {
      singleSelection: true,
      showCheckbox: false,
      text: 'Select Date Span',
      searchAutofocus: false,
      selectAllText: 'All',
      unSelectAllText: 'UnSelect All',
      classes: 'app-multi-select',
      enableSearchFilter: true,
      badgeShowLimit: 2
    };

    this.countryDropdownOptions = [
      {id: 1, itemName: 'Canada'},
      {id: 2, itemName: 'England'},
      {id: 3, itemName: 'India'},
      {id: 4, itemName: 'Australia'},
    ];

    this.settings2 = {
      singleSelection: true,
      showCheckbox: false,
      text: 'Select Date Span',
      searchAutofocus: false,
      selectAllText: 'All',
      unSelectAllText: 'UnSelect All',
      classes: 'app-multi-select',
      enableSearchFilter: true,
      badgeShowLimit: 2
    };
  }

  // convenience getter for easy access to form fields
  get fmp() { return this.myProfileForm.controls; }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelectDateSpan(item: any) {
    // this.showDates = item.id === 5;
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

  onSubmitMyProfile() {
    this.submittedMyProfile = true;

    // stop here if form is invalid
    if (this.myProfileForm.invalid) {
      return;
    }

    this.toastr.success('<span>' +
      '<i class="icofont icofont-check-circled pr-2"></i>' +
      'An Email has been sent to your mailbox' +
      '</span>', '',
      {
        closeButton: true,
        enableHtml: true
      }
    );

    return true;
  }
}
