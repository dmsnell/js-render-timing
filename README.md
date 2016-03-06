# js-render-timing
Measuring the speed at which a browser reflows/repaints

Run in your browser locally or via your favorite local web server.

```
http-server . -p 4001
```

The script ought to load and repaint a few times. The timing information will appear in the console wherein every pair of timings represents the moment preceeding and following a reflow/repaint triggered by the DOM update.

```js
Array [ 45.609985, 48.545, 62.556944, 65.76, 78.89185, 79.9, 96.44806, 97.315 ]
```

Here we can see that the second update provided a lag of about three milliseconds between the timing before and after the repaint.

```
65.76ms - 62.56ms = 3.20ms
```

This number should provide a hard limit on the precision for timing events that follow screen-changes. Certain DOM updates will take significantly more time, such as when loading an image. However, for the minimal case, we can use this script to judge the "best-case" precision.
