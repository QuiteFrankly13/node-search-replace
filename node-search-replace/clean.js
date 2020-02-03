let content = require("./json/content.json");
let media = require("./json/media.json");

// get rid of the 'body' and 'title' key-value pairs
const cleanContent = content.content.map(({body,title, ...rest}) => rest );
const cleanMedia = media.media_posts.map(({body,title, ...rest}) => rest );

let fs = require('fs');
// write to a new file named newContent.json
fs.writeFile('./clean/newContent.json', JSON.stringify(cleanContent, null, 4), (err) => {
    // error handling
    if (err) throw err;

    // success, the file was saved
    console.log('Cleaned content JSON saved');
});

// write to a new file named newMedia.json
fs.writeFile('./clean/newMedia.json', JSON.stringify(cleanMedia, null, 4), (err) => {
    // error handling
    if (err) throw err;

    // success, the file was saved
    console.log('Cleaned media JSON saved');
});
