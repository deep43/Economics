import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Homepage4Component} from './pages/homepage4/homepage4.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {AccountManagementComponent} from './pages/account-management/account-management.component';
import {MainLayoutComponent} from './pages/main-layout/main-layout.component';
import {AccountMobileManagementComponent} from './pages/account-mobile-management/account-mobile-management.component';
import {RefMaterialComponent} from './pages/ref-material/ref-material.component';
import {MacroStrategyComponent} from './pages/macro-strategy/macro-strategy.component';
import {AdvanceSearchComponent} from './pages/advance-search/advance-search.component';
import {AnalystProfileComponent} from './pages/analyst-profile/analyst-profile.component';
import {MyEmailAlertsComponent} from './pages/my-email-alerts/my-email-alerts.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {CalendarNewComponent} from './pages/calendar_new/calendar_new.component';
import {HomepageComponentTwo} from './pages/homepage_2/homepage.component';
import {HomepageComponentThree} from './pages/homepage_3/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        data: {
          title: 'Home',
          status: true
        },
        component: HomepageComponent,
      },
      {
        path: 'home2',
        data: {
          title: 'HomeTwo',
          status: true
        },
        component: HomepageComponentTwo,
      },
      {
        path: 'home3',
        data: {
          title: 'HomeThree',
          status: true
        },
        component: HomepageComponentThree,
      },
      {
        path: 'home4',
        data: {
          title: 'HomeFour',
          status: true
        },
        component: Homepage4Component,
      },
      {
        path: '',
        data: {
          title: 'Home',
          status: true
        },
        children: [
          {
            path: 'profile',
            data: {
              title: 'Analyst Profile',
              status: true
            },
            component: AnalystProfileComponent,
          },
          {
            path: 'calendar',
            data: {
              title: 'Calendar',
              status: true
            },
            component: CalendarComponent,
          },
          {
            path: 'calendarnew',
            data: {
              title: 'Calendar New',
              status: true
            },
            component: CalendarNewComponent,
          },
          {
            path: 'emailalerts',
            data: {
              title: 'Analyst Profile',
              status: true
            },
            component: MyEmailAlertsComponent,
          },
          {
            path: 'refmeterial',
            data: {
              title: 'Reference  Material',
              status: true
            },
            component: RefMaterialComponent,
          },
          {
            path: 'macrostrategy',
            data: {
              title: 'Macro Strategy',
              status: true
            },
            component: MacroStrategyComponent,
          },
          {
            path: 'advancedsearch',
            data: {
              title: 'Advanced Search',
              status: true
            },
            component: AdvanceSearchComponent,
          },
          {
            path: 'account',
            component: AccountManagementComponent,
          },
        ]
      },

    ]
  },
  /*{
    path: 'login',
    component: LoginComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
