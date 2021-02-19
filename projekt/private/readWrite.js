const fs = require("fs");
const xml2js = require('xml2js');


exports.read = function (file, res) {
  fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            throw err;
        }
  console.log(data);
        // convert XML data to JSON object
  xml2js.parseString(data, (err, result) => {
      if (err) {
          throw err;

      }

      res.write(JSON.stringify(result, null, 4));
      res.end();
    });
  });
}


exports.write = function (file, obj) {
  console.log(file)
  fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
          throw err;
      }

      xml2js.parseString(data, (err, result) => {
          if (err) {
              throw err;
          }

          result.catalog.cd.push(obj);

          const builder = new xml2js.Builder();
          const xml = builder.buildObject(result);

          fs.writeFile(file, xml, (err) => {
              if (err) {
                  throw err;
              }

              console.log(`Updated XML is written to a new file.`);
          });

      });
  });

}


exports.update = function (file, data) {


      console.log(JSON.stringify(JSON.parse(data)))



      // convert SJON objec to XML
      const builder = new xml2js.Builder();
      const xml = builder.buildObject(data);


      // write updated XML string to a file
      fs.writeFile(file, xml, (err) => {
          if (err) {
              throw err;
          }

          console.log(`Updated XML is written to a new file.`);
      });

  }


























/*
exports.read = function (file, res) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    // convert XML data to JSON object
    xml2js.parseString(data, (err, result) => {
        if (err) {
            throw err;
        }

        res.write(JSON.stringify(result, null, 4));
        res.end();

      }
    }
  };
}


  /*
        // add a new database to list
        const postgres = {
            title: '1',
            artist: '2',
            country: '3',
            company: '4',
            price: '5',
            year: '6'
        };
*/
/*
exports.write = function (file, res) {
  // convert SJON objec to XML
      const builder = new xml2js.Builder();
      const xml = builder.buildObject(result);

      // write updated XML string to a file
      fs.writeFile('databases.xml', xml, (err) => {
           if (err) {
              throw err;
           }

           console.log(`Updated XML is written to a new file.`);
      });
















        //result.catalog.cd.push(postgres);



















/*function saveData(file, data) {

  //Gets Date
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  data.date = date + ' ' + time;


  let arr = [];

  //Reads JSON
  let jsonData = fs.readFileSync(file, 'utf8')
  if (jsonData.length > 0) {
    arr = JSON.parse(jsonData);
  }

  //Adds the data to the array
  arr.push(data);

  //Saves the data to the JSON file
  fs.writeFile(file, JSON.stringify(arr), (err) => {
      if (err) {
          throw err;
      }
      console.log("The data has been saved");
  });
}
*/
