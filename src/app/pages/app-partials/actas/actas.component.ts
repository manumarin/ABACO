import { Component, OnInit } from '@angular/core';
import { Settings, DataTable } from 'ng-mazdik-lib';
import { getColumnsPlayers } from './columns';

@Component({
  selector: 'actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss'],
})
export class ActasComponent  implements OnInit{

  table: DataTable;
  settings: Settings = new Settings({});

  constructor() {
    const columns = getColumnsPlayers();
    columns.forEach((x, i) => (i > 0) ? x.editable = true : x.editable = false);
    this.table = new DataTable(columns, this.settings);
  }

  ngOnInit(): void {
    this.table.events.onLoading(true);
    fetch('assets/data/players.json').then(res => res.json()).then(data => {
      this.table.rows = data;
      this.table.events.onLoading(false);
    });
  }
}
