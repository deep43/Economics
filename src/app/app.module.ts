import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage4Component } from './pages/homepage4/homepage4.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import {HeaderModule} from './components/header/header.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecuritizationTableComponent} from './components/Securitizationtable/Securitizationtable.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ModalModule} from 'ngx-bootstrap';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ClickOutsideModule} from 'ng-click-outside';
import {ClickElsewhereDirective} from './shared/click-outside.directive';
import {AccountMobileManagementComponent} from './pages/account-mobile-management/account-mobile-management.component';
import {PhoneMaskDirective} from './helpers/phone-mask-directive';
import { NewsListComponent } from './components/news-list/news-list.component';
import { EconomicsTableComponent } from './components/economics-table/economics-table.component';
import { RefMaterialComponent } from './pages/ref-material/ref-material.component';
import { ResearchTeamComponent } from './components/research-team/research-team.component';
import { MacroStrategyComponent } from './pages/macro-strategy/macro-strategy.component';
import { MacroResearchTeamComponent } from './components/macro-research-team/macro-research-team.component';
import {AgGridModule} from 'ag-grid-angular';
import { AdvanceSearchComponent } from './pages/advance-search/advance-search.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import { AnalystProfileComponent } from './pages/analyst-profile/analyst-profile.component';
import {RouterModule} from '@angular/router';
import { MyEmailAlertsComponent } from './pages/my-email-alerts/my-email-alerts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import {MatDatepickerModule, MatExpansionModule, MatNativeDateModule} from '@angular/material';
import {CalendarNewComponent} from './pages/calendar_new/calendar_new.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {HomepageComponentTwo} from './pages/homepage_2/homepage.component';
import {HomepageComponentThree} from './pages/homepage_3/homepage.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {ToastrModule} from 'ngx-toastr';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Homepage4Component,
    FooterComponent,
    BannerComponent,
    SecuritizationTableComponent,
    DisclaimerComponent,
    RegistrationComponent,
    AccountManagementComponent,
    MainLayoutComponent,
    AccountMobileManagementComponent,
    ClickElsewhereDirective,
    PhoneMaskDirective,
    NewsListComponent,
    EconomicsTableComponent,
    RefMaterialComponent,
    ResearchTeamComponent,
    MacroStrategyComponent,
    MacroResearchTeamComponent,
    AdvanceSearchComponent,
    BreadcrumbsComponent,
    AnalystProfileComponent,
    MyEmailAlertsComponent,
    CalendarComponent,
    CalendarNewComponent,
    HomepageComponentTwo,
    HomepageComponentThree,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SelectDropDownModule,
    HeaderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    ModalModule.forRoot(),
    FormsModule,
    NgbModule,
    ClickOutsideModule,
    AgGridModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AngularMultiSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPageScrollCoreModule.forRoot({duration: 300, scrollOffset: 200}),
    NgxPageScrollModule,
    FontAwesomeModule,
    ScrollToModule.forRoot(),
    NgxUiLoaderModule.forRoot({
      fgsSize: 0,
      fgsColor: 'rgba(203, 203, 203, 0.6)',
      pbThickness: 4,
      pbColor: '#8b1d41',
      overlayColor: 'rgba(203, 203, 203, 0.6)',
    }),
    ToastrModule.forRoot(), // ToastrModule added
    SwiperModule,
    MalihuScrollbarModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
