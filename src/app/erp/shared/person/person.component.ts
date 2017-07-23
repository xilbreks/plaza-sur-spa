import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

import { Person } from './../person';
import { PersonService } from './../person.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnChanges, OnDestroy {
  @Input('id') id: string;
  person: Person;
  personSubscription: Subscription;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.id){
      this.personSubscription = this.personService.getPerson(this.id).subscribe((person)=>{
        this.person = person;
        console.log(person);
      });
    }
  }

  ngOnDestroy() {
    //this.personSubscription.unsubscribe();
  }

}
