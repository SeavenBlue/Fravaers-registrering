const imageUpload = document.getElementById('imageUpload')

Promise.all([
  // load the models
  faceapi.loadSsdMobilenetv1Model('/models'),
  faceapi.loadMtcnnModel('/models/'),
   faceapi.loadFaceRecognitionModel('/models/'),
   faceapi.loadFaceLandmarkModel("/models/")
]).then(startVid())




async function startVid() {
  // try to access users webcam and stream the images
  // to the video element
  const videoEl = document.getElementById('inputVideo')
  navigator.getUserMedia(
    { video: {} },
    stream => videoEl.srcObject = stream,
    err => console.error(err)
  )

}



async function onPlay(videoEl){
   
  const mtcnnForwardParams = {
    // number of scaled versions of the input image passed through the CNN
    // of the first stage, lower numbers will result in lower inference time,
    // but will also be less accurate
    maxNumScales: 10,
    // scale factor used to calculate the scale steps of the image
    // pyramid used in stage 1
    scaleFactor: 0.709,
    // the score threshold values used to filter the bounding
    // boxes of stage 1, 2 and 3
    scoreThresholds: [0.6, 0.7, 0.7],
    // mininum face size to expect, the higher the faster processing will be,
    // but smaller faces won't be detected
    minFaceSize: 50
  }


  const mtcnnResults = await faceapi.mtcnn(document.getElementById('inputVideo'), onPlay.mtcnnForwardParams)





  


const options = new faceapi.MtcnnOptions(mtcnnForwardParams)
const input = document.getElementById('inputVideo')

const fullFaceDescriptions = await faceapi.detectAllFaces(input, options).withFaceLandmarks().withFaceDescriptors()


if(fullFaceDescriptions[0] !== undefined){
frames.push(VidCapture.get(fullFaceDescriptions[0].alignedRect._box.topLeft._x,fullFaceDescriptions[0].alignedRect._box.topLeft._y,fullFaceDescriptions[0].alignedRect._box._width,fullFaceDescriptions[0].alignedRect._box._height))

}






const labels = ['Gustav', 'Thomas']

const labeledFaceDescriptors = await Promise.all(
  labels.map(async label => {
    for(let i = 1; i <= 10; i++){
    // fetch image data from urls and convert blob to HTMLImage element
   
    const img = await faceapi.fetchImage(`/labeled_images/${label}/`+i+`.jpg`)
    
    // detect the face with the highest score in the image and compute it's landmarks and face descriptor
    const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
    
    if (!fullFaceDescription) {
      throw new Error(`no faces detected for ${label}`)
    }
    
    const faceDescriptors = [fullFaceDescription.descriptor]
    return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
  }
  })
)


// 0.6 is a good distance threshold value to judge
// whether the descriptors match or not
const maxDescriptorDistance = 0.6
const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)

const results = fullFaceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor))

var canvas = document.getElementById('overlay');
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

results.forEach((bestMatch, i) => {
  const box = fullFaceDescriptions[i].detection.box
  const text = bestMatch.toString()
  const drawBox = new faceapi.draw.DrawBox(box, { label: text })
  drawBox.draw("overlay")
})
setTimeout(() => onPlay(videoEl)) 
  }

 

