const sharp = require('sharp');
const fs = require('fs');
const iconMaxSize = 1242;
const iconRatio = Number(process.argv[2]);
let iconSize = Math.floor(iconMaxSize * (iconRatio / 100));
if(iconSize%2 !== 0) {
  iconSize += 1;
}
let iconBuffer;

sharp('icon.png')
  .resize(iconSize, iconSize)
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
        background: '#DBB882'
      }
    })
    .overlayWith(iconBuffer, {
      top: iconSize === 1242 
      ? 0 
      : (1242 - iconSize) / 2,
      left: 1104 - iconSize / 2,
      width: iconSize,
      height: iconSize,
    })
    .toFile('output.png')
  })
  
