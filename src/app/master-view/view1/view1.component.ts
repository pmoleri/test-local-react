import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../../models/northwind-apiig/customer-dto';
import { NorthwindAPIIGService } from '../../services/northwind-apiig.service';

@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [FormsModule, FormsModule, IGX_INPUT_GROUP_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES],
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIIGCustomerDto: CustomerDto[] = [];
  public value: string = 'ALFKI';

  constructor(private northwindAPIIGService: NorthwindAPIIGService) { }

  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindAPIIGCustomerDto = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
