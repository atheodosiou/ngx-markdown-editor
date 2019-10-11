import { Component } from '@angular/core';
import * as simpleMDE from 'simplemde';
import { IConfig } from './ngx-markdown-editor/configurations/IConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-simple-mde';
  simplemdeConfig: IConfig;
  //  = {
  //   autofocus: true,

  //   insertTexts: {
  //     table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
  //   },

  //   placeholder: "Type here...",

  //   toolbar: true,
  //   toolbarTips: false,
  // }
}
