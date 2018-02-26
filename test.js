const sharp = require('sharp');
const fs = require('fs');

sharp('output.png')
  .toBuffer()
  .then((buffer) => {
    iconBuffer = buffer;
  })
  .then(()=>{
    sharp({
      create: {
        width: 2208,
        height: 2208,
        channels: 3,
        background: '#FFFFFF'
      }
    })
    .overlayWith(iconBuffer, {
      top: 0,
      left: 1104 - (1242/2)
    })
    .toFile('test.png')
  })
  
