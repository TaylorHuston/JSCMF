//JS Admin Functions
var jsdom = require("jsdom"); 
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var fs = require('fs');


//Function to create new pages
function createPage() {
	var newFile = fs.createReadStream('../skeletons/demo.html').pipe(fs.createWriteStream('../index.html'));
}

createPage();