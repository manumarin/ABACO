import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  currentElement = new Subject();
  public prueba: boolean = false;
}
