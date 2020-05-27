import { Component, OnInit, OnDestroy } from "@angular/core";
import { DocumentService } from "src/app/services/document.service";
import { Subscription } from "rxjs";
import { Document } from "src/app/models/document";
import { startWith } from "rxjs/operators";
import { addListener } from "cluster";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.scss"],
})
export class DocumentComponent implements OnInit, OnDestroy {
  document: Document;
  _id: string;
  private _docSub: Subscription;
  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this._docSub = this.documentService.currentDocument
      .pipe(
        startWith({
          id: "",
          doc: "Select an existing document or create a new one to get started",
        })
      )
      .subscribe((document) => (this.document = document));
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }

  saveDoc() {
    this.documentService.saveDocument(this.document.id, this.document.doc);
  }

  deleteDoc() {
    this.documentService.deleteDocument(this.document);
  }

  startDictation() {
    this.documentService.addDoc(this.document);
  }
}
