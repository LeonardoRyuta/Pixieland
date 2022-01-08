const fs = require('fs');

const i = 0;
// read file and make object

for (let i = 0; i < 9992; i++) {
    let content = JSON.parse(fs.readFileSync(`metadata/${i}.json`, 'utf8'));
    // edit or add property
    content.image = `ipfs://Qmc3SHkH8jZRaJnJYELJnVHeU4SydiqG1sGUCgoXL5cLsb/${i}.gif`
    //write file
    fs.writeFileSync(`metadata/${i}.json`, JSON.stringify(content));
    console.log(i + ' files written')
}