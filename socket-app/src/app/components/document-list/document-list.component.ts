import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Injectable } from "@angular/core";

import { DocumentService } from "src/app/services/document.service";

import { Document } from "../../models/document";

import axios from "axios";
import { NgIf } from "@angular/common";
import { $ } from "protractor";
import { spawn } from "child_process";

@Component({
  selector: "app-document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.scss"],
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Observable<string[]>;
  document: Document;
  currentDoc: string;
  docsobj = {};
  count = 0;
  private _docSub: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    axios
      .get("http://localhost:4444/docs/")
      .then((resp) =>
        resp.data.map((doc) => ((this.docsobj[this.count] = doc), this.count++))
      );
    this.documents = this.documentService.documents;
    this._docSub = this.documentService.currentDocument.subscribe(
      (doc) => (this.currentDoc = doc.id)
    );
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  openDocs() {
    for (let i = 0; i < this.count; i++) {
      this.documentService.getDocs(this.docsobj[i]);
    }
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }

  newDoc() {
    this.documentService.newDocument();
  }
}
