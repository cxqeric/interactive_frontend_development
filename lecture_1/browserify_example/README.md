# Browserify example

To use:
```
npm install
npm install -g browserify
browserify -t [ babelify --presets [ es2015 ] ] ./main.js > ./bundle.js
open index.html // On Mac, this is valid command in terminal
```

Open the console in your browser, you should see "boop"

## Explanation
npm install installs all the package dependencies

Browserify bundles the file tree extracted from main.js into a single file - bundle.js. It has a babelify preset, which transpiles the es2015 code into standard javascript

Opening index.html shows the results. The index.html requires the generated bundle.js
