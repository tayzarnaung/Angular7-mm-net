import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-postdetail',
    template: `
        <h1>Post Detail Component</h1>
        <div id="section1" style="height:700px;width:100%;background:blue;">
            <h2>Section One</h2>
        </div>
        <div id="section2" style="height:700px;width:100%;background:red;">
            <h2>Section Two</h2>
        </div>
        <div id="section3" style="height:700px;width:100%;background:green;">
            <h2>Section Three</h2>
        </div>
    
    ` ,
    styles: [``]
})

export class PostDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}