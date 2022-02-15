import { Component, Input } from "@angular/core";

@Component({
    selector: 'vrv-topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.css']
})
export class TopNavBarComponent{
    @Input() location: string;
    @Input() bgcolor: string;

    constructor(){
        this.location = "/assets/VRV-Location.png";
        this.bgcolor = "#ffdd00";
    }
}