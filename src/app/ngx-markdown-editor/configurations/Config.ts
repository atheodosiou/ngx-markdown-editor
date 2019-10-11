import { ElementRef } from '@angular/core';

export class Config {
    autoDownloadFontAwesome: boolean = true;
    autofocus: boolean = false;
    autosave: boolean | object;
    blockStyles: object;
    element: ElementRef;
    forceSync: boolean = false;
    hideIcons: string[];
    indentWithTabs: boolean = true;
    initialValue: string;
    insertTexts: object;
    lineWrapping: boolean = true;
    parsingConfig: object;
    placeholder: string;
    previewRender: Function;
    promptURLs: boolean = false;
    renderingConfig: object;
    shortcuts: object;
    showIcons: string[];
    spellChecker: boolean = true;
    status: any[];
    styleSelectedText: boolean = true;
    tabSize: number = 2;
    toolbar: boolean;
    toolbarTips: boolean = true;
}

