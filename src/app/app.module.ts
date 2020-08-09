import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { AppRoutingModule } from './app-routing.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'

@NgModule({
    declarations: [AppComponent,
        GridComponent,
        Test1Component,
        Test2Component,
        Test3Component
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        jqxGridModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
