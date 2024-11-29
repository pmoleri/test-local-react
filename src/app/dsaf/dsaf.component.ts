import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-dsaf',
  standalone: true,
  imports: [IGX_GRID_DIRECTIVES],
  templateUrl: './dsaf.component.html',
  styleUrls: ['./dsaf.component.scss']
})
export class DsafComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindEmployees: EmployeesType[] = [];

  constructor(private northwindService: NorthwindService) { }

  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}