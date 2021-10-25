import "ulib";
import anylogger from "anylogger";

const log = anylogger("App");

console.log('hello from console.log (not anylogger)');
log("hello from anylogger");