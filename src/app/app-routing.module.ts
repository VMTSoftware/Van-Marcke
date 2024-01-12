import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ServicePageComponent } from './Pages/service-page/service-page.component';
import { ResourcePageComponent } from './Pages/resource-page/resource-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { LunchPageComponent } from './Pages/lunch-page/lunch-page.component';
import { ResourceFormPageComponent } from './Pages/resource-form-page/resource-form-page.component';
import { SpecialsPageComponent } from './Pages/specials-page/specials-page.component';
import { BrPageComponent } from './Pages/br-page/br-page.component';
import { PromarckePageComponent } from './Pages/promarcke-page/promarcke-page.component';
import { StorePageComponent } from './Components/store-page/store-page.component';
import { EventPageComponent } from './Pages/event-page/event-page.component';
import { AfterhoursPageComponent } from './Pages/afterhours-page/afterhours-page.component';
import { SalesContactPageComponent } from './Pages/sales-contact-page/sales-contact-page.component';
import { CorpContactPageComponent } from './Pages/corp-contact-page/corp-contact-page.component';
import { ServiceRequestPageComponent } from './Pages/service-request-page/service-request-page.component';
import { BlogPageComponent } from './Pages/blog-page/blog-page.component';
import { BlogPostPageComponent } from './Pages/blog-post-page/blog-post-page.component';
import { CareerPageComponent } from './Pages/career-page/career-page.component';
import { AzPromosComponent } from './Pages/az-promos/az-promos.component';
import { NvPromosComponent } from './Pages/nv-promos/nv-promos.component';
import { TxPromosComponent } from './Pages/tx-promos/tx-promos.component';


const routes: Routes = [
  //Change Paths//
  { path: '', component: HomepageComponent },
  { path: 'services', component: ServicePageComponent },
  { path: 'resources', component: ResourcePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'lunch', component: LunchPageComponent },
  { path: 'resource-forms', component: ResourceFormPageComponent },
  { path: 'specials', component: SpecialsPageComponent },
  { path: 'rewards', component: BrPageComponent },
  { path: 'promarcke', component: PromarckePageComponent},
  { path: 'store', component: StorePageComponent},
  { path: 'events', component: EventPageComponent},
  { path: 'afterhours', component: AfterhoursPageComponent},
  { path: 'sales-contact', component: SalesContactPageComponent},
  { path: 'corp-contact', component: CorpContactPageComponent},
  { path: 'service-request', component: ServiceRequestPageComponent},
  { path: 'blog', component: BlogPageComponent},
  { path: 'blog-post', component: BlogPostPageComponent},
  { path: 'careers', component: CareerPageComponent},
  { path: 'az-promos', component: AzPromosComponent},
  { path: 'nv-promos', component: NvPromosComponent},
  { path: 'tx-promos', component: TxPromosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
