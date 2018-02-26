const sharp = require('sharp');
const fs = require('fs');
const iconMaxSize = 1024;
const iconRatio = Number(process.argv[2]);
let iconSize = Math.floor(iconMaxSize * (iconRatio / 100));
if(iconSize%2 !== 0) {
  iconSize += 1;
}
let iconBuffer;
console.log(iconSize);
sharp('icon.png')
  .resize(iconSize)
  .toBuffer()
  .then((buffer) => {
    iconBuffer = buffer;
  })
  .then(()=>{
    sharp('splash.png')
    .overlayWith(iconBuffer, {
      top: iconSize === 1024 
      ? 0 
      // : (1024 - iconSize) / 2,
      // 512
      : (1024 - iconSize) / 2,
      left: 1104 - (iconSize / 2),
      width: iconSize,
      height: iconSize,
    })
    .toFile('output.png')
  })
  
