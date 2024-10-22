import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people-list.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  peopleList: People[] = [];

  constructor(private peopleServices: PeopleService) {}

  ngOnInit(): void {
    this.peopleServices.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results; // con .results accedemos a la lista de la respuesta, no a la respuesta completa
    });
  }
}