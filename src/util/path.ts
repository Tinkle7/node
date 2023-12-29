import path from "path";
const mainModule = require.main;
const mainModuleFilename = mainModule?.filename || "";
const mainModuleDirname = path.dirname(mainModuleFilename);

export default mainModuleDirname;
