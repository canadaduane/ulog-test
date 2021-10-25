# showcase ulog not working with rollup

This is a repro of a bug (or misunderstanding) when using ulog/anylogger in conjunction with rollup js.

## Start

```
npm install
npm run start
```

## Notes

You will probably see "hello from console.log (not anylogger)" but you will NOT see "hello from anylogger" in the debug console.

Note that `rollup.config.js` includes the setting `external: ["ulib"]` because there rollup gives a warning if this is not included. If there is a way to indicate that ulib should be externally included via some other means, this would probably solve the issue.

