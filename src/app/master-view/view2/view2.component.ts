import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { Pet } from '../../models/petstore-open-apitags/pet';
import { PetstoreOpenAPITagsService } from '../../services/petstore-open-apitags.service';

@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public adsf: Pet[] = [];
  public adsf$: Subject<void> = new Subject<void>();

  private _dsfg?: string;
  public get dsfg(): string | undefined {
    return this._dsfg;
  }
  public set dsfg(value: string | undefined) {
    this._dsfg = value;
    this.adsf$.next();
  }
  public petstoreOpenAPITagsPet: Pet[] = [];

  constructor(private petstoreOpenAPITagsService: PetstoreOpenAPITagsService) { }

  ngOnInit() {
    this.petstoreOpenAPITagsService.getPetList(this.dsfg as any).pipe(takeUntil(this.destroy$)).subscribe(data => this.adsf = data);
    this.adsf$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.petstoreOpenAPITagsService.getPetList(this.dsfg as any).pipe(take(1)).subscribe(data => this.adsf = data);
    });
    this.petstoreOpenAPITagsService.getPetList(undefined).pipe(takeUntil(this.destroy$)).subscribe(data => this.petstoreOpenAPITagsPet = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.adsf$.complete();
    this.destroy$.complete();
  }
}
