import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { MainHeroComponent } from './Components/main-hero/main-hero.component';
import { CardGridComponent } from './Components/card-grid/card-grid.component';
import { CardGalleryComponent } from './Components/card-gallery/card-gallery.component';
import { DividerComponent } from './Components/divider/divider.component';
import { NewsletterSignupComponent } from './Components/newsletter-signup/newsletter-signup.component';
import { BrandsComponentComponent } from './Components/brands-component/brands-component.component';
import { ServiceHeroComponent } from './Components/service-hero/service-hero.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { PromarckeFeatureComponent } from './Components/promarcke-feature/promarcke-feature.component';
import { GridLinksComponent } from './Components/grid-links/grid-links.component';
import { ResourcePageComponent } from './Pages/resource-page/resource-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ContactGridComponent } from './Components/contact-grid/contact-grid.component';
import { LunchScheduleComponent } from './Components/lunch-schedule/lunch-schedule.component';
import { LunchPageComponent } from './Pages/lunch-page/lunch-page.component';
import { ResourceFormPageComponent } from './Pages/resource-form-page/resource-form-page.component';
import { SpecialsPageComponent } from './Pages/specials-page/specials-page.component';
import { BrPageComponent } from './Pages/br-page/br-page.component';
import { PromarckePageComponent } from './Pages/promarcke-page/promarcke-page.component';
import { StorePageComponent } from './Components/store-page/store-page.component';
import { EventsComponent } from './Components/events/events.component';
import { EventPageComponent } from './Pages/event-page/event-page.component';
import { AfterhoursPageComponent } from './Pages/afterhours-page/afterhours-page.component';
import { SalesContactPageComponent } from './Pages/sales-contact-page/sales-contact-page.component';
import { SalesContactComponent } from './Components/sales-contact/sales-contact.component';
import { CorpContactPageComponent } from './Pages/corp-contact-page/corp-contact-page.component';
import { CorpContactComponent } from './Components/corp-contact/corp-contact.component';
import { ServiceRequestPageComponent } from './Pages/service-request-page/service-request-page.component';
import { ServiceRequestComponent } from './Components/service-request/service-request.component';
import { BlogPageComponent } from './Pages/blog-page/blog-page.component';
import { BlogComponent } from './Components/blog/blog.component';
import { BlogPostComponent } from './Components/blog-post/blog-post.component';
import { BlogPostPageComponent } from './Pages/blog-post-page/blog-post-page.component';
import { CareerPageComponent } from './Pages/career-page/career-page.component';
import { CareersComponent } from './Components/careers/careers.component';
import { SpecialsFormComponent } from './Components/specials-form/specials-form.component';
import { AzPromosComponent } from './Pages/az-promos/az-promos.component';
import { NvPromosComponent } from './Pages/nv-promos/nv-promos.component';
import { TxPromosComponent } from './Pages/tx-promos/tx-promos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainHeroComponent,
    CardGridComponent,
    CardGalleryComponent,
    DividerComponent,
    NewsletterSignupComponent,
    BrandsComponentComponent,
    ServiceHeroComponent,
    FooterComponent,
    HomepageComponent,
    PromarckeFeatureComponent,
    GridLinksComponent,
    ResourcePageComponent,
    HeaderComponent,
    ContactPageComponent,
    ContactGridComponent,
    LunchScheduleComponent,
    LunchPageComponent,
    ResourceFormPageComponent,
    SpecialsPageComponent,
    BrPageComponent,
    PromarckePageComponent,
    StorePageComponent,
    EventsComponent,
    EventPageComponent,
    AfterhoursPageComponent,
    SalesContactPageComponent,
    SalesContactComponent,
    CorpContactPageComponent,
    CorpContactComponent,
    ServiceRequestPageComponent,
    ServiceRequestComponent,
    BlogPageComponent,
    BlogComponent,
    BlogPostComponent,
    BlogPostPageComponent,
    CareerPageComponent,
    CareersComponent,
    AzPromosComponent,
    NvPromosComponent,
    TxPromosComponent,
    SpecialsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
