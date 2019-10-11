import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMarkdownEditorComponent } from './ngx-markdown-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[NgxMarkdownEditorComponent],
  declarations: [NgxMarkdownEditorComponent]
})
export class NgxMarkdownEditorModule { }
