import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive( {
  selector: '[appTesting]'
})

export class TestingDirective {
  constructor(private tempRef : TemplateRef<any> , private vcRef: ViewContainerRef){}

  @Input() set appTesting(con : boolean){
    if(!con)  this.vcRef.createEmbeddedView(this.tempRef);
    else      this.vcRef.clear();
  }
}