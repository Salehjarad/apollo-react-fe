const electron = require("electron");
const app = electron.app;
const { spawn, spawnSync } = require("child_process");
const os = require("os");
const fs = require("fs");
const streamToBlob = require("stream-to-blob");

const BrowserWindow = electron.BrowserWindow;
const ipcm = electron.ipcMain;
const path = require("path");
const isDev = require("electron-is-dev");
const { fstat } = require("fs");
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 650,
    // frame: false,
    // transparent: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcm.on("close-window", () => app.quit());
ipcm.on("scanner", (event, args) => {
  const files = spawnSync("cmd", ["dir", "%temp%"]);
  console.log(files.output, files.stdout.toString(), files.stderr.toString());
});

// handel scanning anc coverting to blob fro, electron
ipcm.on("scan-docs", async (event, args) => {
  const filepath = `${os.tmpdir()}\\${Date.now()}.pdf`;
  const scanDocument = spawn(`naps2.console`, [
    "-o",
    filepath,
    "--ocrlang",
    "ara",
    "-v",
  ]);

  scanDocument.stdout.on("data", (data) => {
    event.sender.send("scan-dcos", {
      state: data.toString(),
      buffers: [],
    });
  });

  scanDocument.stderr.on("error", (data) => {
    console.log("Error-->", data.toString());
  });

  scanDocument.on("close", async () => {
    const stream = await fs.createReadStream(filepath);
    const chunks = [];

    stream
      .on("data", (chunk) => chunks.push(chunk))
      .on("end", () => {
        event.sender.send("scan-dcos", {
          state: "done",
          buffers: chunks,
        });
      });
  });
  scanDocument.on("exit", () => console.log("error exit"));
});

// ipcm.on("test-scan-two", async (event, args) => {
//   const filepath = `${os.tmpdir()}\\1604399073159.pdf`;
//   const stream = await fs.createReadStream(filepath);
//   const chunks = [];

//   stream
//     .on("data", (chunk) => chunks.push(chunk))
//     .on("end", () => {
//       event.sender.send("test-scan-two", {
//         state: "done",
//         buffers: chunks,
//       });
//     });
// });

// const exec = async function exec(cmd, args = []) {
//   const child = spawn(cmd, args, { shell: true });
//   redirectOutputFor(child);
//   await waitFor(child);
// };

// const redirectOutputFor = (child) => {
//   const printStdout = (data) => {
//     process.stdout.write(data.toString());
//   };
//   const printStderr = (data) => {
//     process.stderr.write(data.toString());
//   };
//   child.stdout.on("data", printStdout);
//   child.stderr.on("data", printStderr);

//   child.once("close", () => {
//     child.stdout.off("data", printStdout);
//     child.stderr.off("data", printStderr);
//   });
// };

// const waitFor = async function (child) {
//   return new Promise((resolve) => {
//     child.once("close", () => resolve());
//   });
// };
