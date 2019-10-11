import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as SimpleMDE from 'simplemde';
import { IConfig } from './configurations/IConfig';
@Component({
  selector: 'ngx-markdown-editor',
  templateUrl: './ngx-markdown-editor.component.html',
  styleUrls: ['./ngx-markdown-editor.component.scss']
})
export class NgxMarkdownEditorComponent implements AfterViewInit {

  simplemde: any;
  get simpleMDE(): any {
    return this.simplemde;
  }

  @ViewChild('editor', { static: false }) editor: ElementRef;
  @Input() config: IConfig;
  // Set the default toolbar if set to true
  @Input() default: boolean = true;

  constructor() {
  }
  ngAfterViewInit(): void {
    if (this.default) {
      this.simplemde = new SimpleMDE({ element: this.editor.nativeElement });
    } else {
      this.simplemde = null;
      console.warn('If you set the "default" property to false, then you must provide an object of type IConfig which will'
        + 'describe the editor\'s style and behaveour the the "config" property.');
    }
  }
}
