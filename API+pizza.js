

function getTopicCount(topic) {
	const https = require('https');
    const query = 'https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page='
    https.get(query+topic, (resp) => {
    let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
      var text =  JSON.parse(data).parse.text
      text = text[Object.keys(text)[0]]
      var array = text.split(topic)
    console.log(array.length-1);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
    }
getTopicCount('pizza')