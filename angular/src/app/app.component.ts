import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h3>Angular app working!<h3>'
})
export class AppComponent {
    constructor() {
        console.log('AppComponent booted');
    }
}