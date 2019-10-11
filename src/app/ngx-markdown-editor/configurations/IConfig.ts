import { ElementRef } from '@angular/core';

export interface IConfig {
    autoDownloadFontAwesome: boolean;
    autofocus: boolean;
    autosave: boolean | object;
    blockStyles: object;
    element: ElementRef;
    forceSync: boolean;
    hideIcons: string[];
    indentWithTabs: boolean;
    initialValue: string;
    insertTexts: object;
    lineWrapping: boolean;
    parsingConfig: object;
    placeholder: string;
    previewRender: () => void;
    promptURLs: boolean;
    renderingConfig: object;
    shortcuts: object;
    showIcons: string[];
    spellChecker: boolean;
    status: any[];
    styleSelectedText: boolean;
    tabSize: number;
    toolbar: boolean;
    toolbarTips: boolean;
}

