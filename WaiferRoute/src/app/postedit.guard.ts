import { CanDeactivate } from '@angular/router'
import { Observable } from 'rxjs';

export interface ComponentCanDeactivae{
    canDeactive: () => boolean | Observable<boolean> 
}

export class PostEditGuard implements CanDeactivate<ComponentCanDeactivae>{

    canDeactivate(component: ComponentCanDeactivae) : Observable<boolean> | boolean{
        return component.canDeactive ? component.canDeactive() : true;
    }
}
