const fs = require('fs')
const request = require('request');
const input =  process.argv.slice(2)
url = input[0]
file = input[1]


request( url , (error, response, body) => {
    fs.writeFile( file, body, err => {
      const stats = fs.statSync(file)
      const fileSizeInBytes = stats.size;
      if (err) {
        console.error(err)
      return
      } 
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${file}`)
    })
});
  

