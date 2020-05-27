import { Injectable } from "@angular/core";

import { Socket } from "ngx-socket-io";

import { Document } from "../models/document";

import axios from "axios";
import { ThrowStmt } from "@angular/compiler";

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

const { webkitSpeechRecognition } = window as any;

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>("document");
  documents = this.socket.fromEvent<string[]>("documents");

  constructor(private socket: Socket) {}

  saveDocument(name: string, text: string) {
    axios
      .post("https://limitless-hollows-40293.herokuapp.com/docs/add", {
        name: name,
        text: text,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  }

  deleteDocument(doc) {
    this.socket.emit("deleteDoc", doc);
    axios
      .delete("https://limitless-hollows-40293.herokuapp.com/docs/" + doc.id)
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error.message));
  }

  getDocument(id: string) {
    this.socket.emit("getDoc", id);
  }

  newDocument() {
    this.socket.emit("addDoc", { id: this.docId(), doc: "" });
  }

  getDocs(doc) {
    this.socket.emit("addDoc", { id: doc.name, doc: doc.text });
  }

  editDocument(document: Document) {
    this.socket.emit("editDoc", document);
  }

  addDoc(doc) {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "uk-UA";
      recognition.start();

      recognition.onresult = function (e) {
        doc.doc += e.results[0][0].transcript;
        recognition.stop();
      };
      recognition.onerror = function () {
        recognition.stop();
      };
    }
  }

  private docId() {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
