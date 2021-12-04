import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Type } from '@angular/core';
import { fadeAnimation } from '@xyz/core';
import { DialogRef } from '../../models/dialog-ref.model';

@Component({
  selector: 'xyz-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class OverlayComponent implements OnInit {
  public contentType!: 'template' | 'string' | 'component';
  public content!: any;//string | TemplateRef<any> | Type<any>;
  public context!: any;

  constructor(
    private ref: DialogRef
  ) {}

  ngOnInit() {
    this.content = this.ref.content;

    if (typeof this.content === 'string') {
      this.contentType = 'string';
    } else if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.contentType = 'component';
    }
  }

  public close(): void {
    console.log("closing");
    this.ref.close(null);
  }
}
