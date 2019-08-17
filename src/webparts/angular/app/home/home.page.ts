import { Component } from '@angular/core';
import { SharePointContextService } from '../providers/sharepoint.context.service';

@Component({
    selector: 'app-home',
    templateUrl: '/src/webparts/angular/app/home/home.page.html'
    //template: `Helllo worlddd`
})
export class HomePage {


    constructor(public contextService: SharePointContextService) {

    }

    openMenu() {

    }
}