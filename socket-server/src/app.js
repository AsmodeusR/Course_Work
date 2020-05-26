const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const io = require("socket.io")(http);
const express = require("express");
const cors = require("cors");
let Document = require("../models/document.model");
//const PORT = process.env.PORT || 80;

const documents = {};
var idarr = [];
var count = 1;
app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  let previousId;
  const safeJoin = (currentId) => {
    socket.leave(previousId);
    socket.join(
      currentId,
      console.log(`Socket ${socket.id} joined room ${currentId}`)
    );
    idarr[count] = currentId;
    count++;
    previousId = currentId;
  };

  const safeLeave = (currentId) => {
    const index = idarr.findIndex((n) => n == currentId);
    if (index !== -1) {
      idarr.splice(index, 1);
      count--;
    }
    if ((index == 1) & (count != 2)) {
      for (let i = index; i < count; i++) {
        if (documents[idarr[i]] != null) {
          previousId = idarr[i];
          break;
        }
      }
    } else
      for (let i = index - 1; i > 0; i--) {
        if (documents[idarr[i]] != null) {
          previousId = idarr[i];
          break;
        }
      }
    socket.join(
      previousId,
      console.log(`Socket ${socket.id} joined room ${previousId}`)
    );
  };

  socket.on("getDoc", (docId) => {
    safeJoin(docId);
    socket.emit("document", documents[docId]);
  });

  socket.on("addDoc", (doc) => {
    documents[doc.id] = doc;
    safeJoin(doc.id);
    io.emit("documents", Object.keys(documents));
    socket.emit("document", doc);
  });

  socket.on("editDoc", (doc) => {
    documents[doc.id] = doc;
    socket.to(doc.id).emit("document", doc);
  });

  socket.on("deleteDoc", (doc) => {
    if (idarr.length == 2) console.log("nope");
    else {
      delete documents[doc.id];
      io.emit("documents", Object.keys(documents));
      safeLeave(doc.id);
      socket.emit("document", documents[previousId]);
    }
  });

  io.emit("documents", Object.keys(documents));

  console.log(`Socket ${socket.id} has connected`);
});

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://gomunkul:gomunkul@documents-tqsnb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    throw err;
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const docsRouter = require("../routes/docs");
app.use("/docs", docsRouter);

http.listen(4444, () => {
  console.log("Listening on port 4444");
});
