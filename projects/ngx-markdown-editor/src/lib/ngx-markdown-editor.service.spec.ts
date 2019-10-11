import { TestBed } from '@angular/core/testing';

import { NgxMarkdownEditorService } from './ngx-markdown-editor.service';

describe('NgxMarkdownEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMarkdownEditorService = TestBed.get(NgxMarkdownEditorService);
    expect(service).toBeTruthy();
  });
});
