var pdfjslib = require("pdfjs-dist/build/pdf.js");
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js";
pdfjslib.GlobalWorkerOptions.workerPort = new pdfjsWorker();
pdfjslib.getDocument("./doc.pdf").then((doc) => {
  console.log(doc._pdfInfo);
});
