import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, Input } from '@angular/core';
import * as SimpleMDE from 'simplemde';
@Component({
  selector: 'ngx-markdown-editor',
  templateUrl: './ngx-markdown-editor.component.html',
  styleUrls: ['./ngx-markdown-editor.component.scss']
})
export class NgxMarkdownEditorComponent implements  AfterViewInit{

  simplemde:any;
  @ViewChild('editor',{static:false}) editor:ElementRef;
  @Input() config:any;

  constructor() { 
    console.log('constructor')
  }
  ngAfterViewInit(): void {
    this.simplemde = new SimpleMDE({
      element:this.editor.nativeElement,
      toolbar: [{
        name: "bold",
        action: SimpleMDE.toggleBold,
        className: "fa fa-bold",
        title: "Bold",
      },
      {
        name: "italic",
        action: SimpleMDE.toggleItalic,
        className: "fa fa-italic",
        title: "Italic",
      }
      ,
      {
        name: "table",
        action: SimpleMDE.drawTable,
        className: "fa fa-table",
        title: "Insert Table",
      },
      {
        name: "preview",
        action: SimpleMDE.togglePreview,
        className: "fa fa-eye no-disable",
        title: "Toggle Preview",
      }
    ]
    });
  }

  getValue(value:any){
    console.log(this.simplemde.value())
  }
}
