import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FinalComponent } from './components/final/final.component';

const routes: Routes = [
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent },
  { path: '', component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
