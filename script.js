var canvas = document.getElementById("web2d")
var ctx = canvas.getContext("2d")

var WIDTH = canvas.width
var HEIGHT = canvas.height

var stability = "Stable"
var chaotic = "False"
var spiralType = "Prime"

function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

class TextSpiral {
  constructor(_size, _stepSize) {
    this.size = _size
    this.x = WIDTH / 2 - 17
    this.y = HEIGHT / 2 + 16
    this.px = this.x
    this.py = this.y
    this.ppx = this.x
    this.ppy = this.y
    this.step = 1
    this.state = 0
    this.numSteps = 1
    this.turnCounter = 1
    this.stepSize = _stepSize
    this.cols = 50
    this.rows = 50
    this.totalSteps = this.cols * this.rows
  }

  draw(_x) {
    //CAPTURE PREVIEW
    // console.log(isFxpreview)
    if(this.step > this.totalSteps) {
      if(!isFxpreview) {
        fxpreview()
        isFxpreview = true
      }
    }
    else {
    
    // seed[3] = "o"
    console.log(convertToDecimal(seed[5]))

    //DRAW THE SPIRAL
    if(Number.isNaN(parseInt(seed[2]))) {
      if(isPrime(this.step)) {
        ctx.fillStyle = "hsl(" + Math.ceil(convertToDecimal(seed[4]) + (this.step / convertToDecimal(seed[5]))) + ", 100%, 50%)"
        ctx.font = "900 " + this.size.toString() + "px Courier New";
        ctx.fillText(_x, this.x, this.y)
      }
      else {
        ctx.fillStyle = "#999"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.x, this.y)
      }
    }
    else {
      if(this.step % parseInt(seed[2]) == 0) {
        ctx.fillStyle = "#FFF"
        ctx.font = "900 " + this.size.toString() + "px Courier New";
        ctx.fillText(_x, this.x, this.y)
      } 
      else {
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.x, this.y)
      }
    }

    // console.log(convertToDecimal(seed[4]), seed[3])

    //ADDITINAL EFFECTS 
    switch(seed[3]) {
      case "a":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.py, this.py, this.size, this.size)
        break
      case "b":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.px, this.size, this.size)
        break
      case "c":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.py, this.size, this.size)
        break
      case "d":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.py, this.px, this.size, this.size)
        break
      case "e":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.py, this.size, this.size)
        ctx.fillRect(this.py, this.px, this.size, this.size)
        break
      case "f":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.py, this.py, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.x, this.y)
        break
      case "g":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.px, this.size, this.size)
        ctx.fillRect(this.px, this.py, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.px, this.py)
        break
      case "h":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.py, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.x, this.y)
        break
      case "i":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.py, this.px, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText(this.step % 10, this.x, this.y)
        break
      case "j":      
        ctx.strokeStyle = "#666";
        ctx.beginPath()
        ctx.moveTo(this.px, this.py)
        ctx.lineTo(this.x, this.y)
        ctx.stroke()
        break
      case "k":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.py, this.py, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText("_", this.x, this.y)
        break
      case "m":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px, this.px, this.size, this.size)
        ctx.fillRect(this.px, this.py, this.size, this.size)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText("_", this.px, this.py)
        break
      case "n":
        ctx.fillStyle = "#000"
        ctx.fillRect(this.px - 0.4, this.py - 0.25, this.size + 0.4, this.size + 0.25)
        ctx.fillStyle = "#666"
        ctx.font = this.size.toString() + "px Courier New";
        ctx.fillText("|", this.x, this.y)
        break

    }

    this.px = this.x
    this.py = this.y
      
    if(seed[6] == "A") {
      switch(this.state) {
          case 0:
            this.x += this.stepSize
            this.y -= this.stepSize / 10
            break
          case 1:
            this.y -= this.stepSize
            this.x += this.stepSize / 10
            break
          case 2:
            this.x -= this.stepSize
            this.y += this.stepSize / 10
            break
          case 3:
            this.y += this.stepSize
            this.x -= this.stepSize / 10
            break
      }
    }
    else if(seed[6] == "B") {
      switch(this.state) {
        case 0:
          this.x += this.stepSize
          this.y += this.stepSize / 10
          break
        case 1:
          this.y -= this.stepSize
          this.x += this.stepSize / 10
          break
        case 2:
          this.x -= this.stepSize
          this.y -= this.stepSize / 10
          break
        case 3:
          this.y += this.stepSize
          break
      }
    }
    else if(seed[6] == "C") {
      switch(this.state) {
        case 0:
          this.x += this.stepSize
          this.y += this.stepSize
          break
        case 1:
          this.y -= this.stepSize
          this.x += this.stepSize 
          break
        case 2:
          this.x -= this.stepSize
          this.y -= this.stepSize 
          break
        case 3:
          this.y += this.stepSize
          this.x -= this.stepSize 
          break
      }
    }
    else if(seed[6] == "D") {
      switch(this.state) {
        case 0:
          this.x += this.stepSize / 3
          break
        case 1:
          this.y += this.stepSize
          break
        case 2:
          this.x -= this.stepSize / 3
          break
        case 3:
          this.y -= this.stepSize
          break
      }
    }
    else if(seed[6] == "E") {
      switch(this.state) {
        case 0:
          this.x += this.stepSize
          break
        case 1:
          this.y += this.stepSize / 4
          break
        case 2:
          this.x -= this.stepSize
          break
        case 3:
          this.y -= this.stepSize / 4
          break
      }
    }
    else if(seed[6] == "F") {
      switch(this.state) {
        case 0:
          this.x += this.stepSize
          this.y += this.stepSize / convertToDecimal(seed[7])
          break
        case 1:
          this.y -= this.stepSize
          this.x += this.stepSize / convertToDecimal(seed[8])
          break
        case 2:
          this.x -= this.stepSize
          this.y -= this.stepSize / convertToDecimal(seed[9])
          break
        case 3:
          this.y += this.stepSize
          break
      }
    }
    else {
      switch(this.state) {
        case 0:
          this.x += this.stepSize
          break
        case 1:
          this.y -= this.stepSize
          break
        case 2:
          this.x -= this.stepSize
          break
        case 3:
          this.y += this.stepSize
          break
      }
    }

    if (this.step % this.numSteps == 0) {
      this.state = (this.state + 1) % 4;
      this.turnCounter++;
      if (this.turnCounter % 2 == 0) {
        this.numSteps++;
      }
    }
    this.step++;
  }
  }
}

var spiral = new TextSpiral(20, 20)

var loopCount = 0



function loop() {
  if(seed[10] == "A") {
    ctx.globalAlpha = 0.008
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.globalAlpha = 1
  }
  else if(seed[10] == "B" && loopCount % 15 == 0) {
    ctx.globalAlpha = 0.003
    ctx.fillStyle = "hsl(" + convertToDecimal(seed[11]) * 6.25 + ", 100%, 50%)"
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.globalAlpha = 1
  }
  
  spiral.draw(seed[loopCount])

  loopCount++
  if(loopCount >= seed.length) {
    loopCount = 0
  }

  requestAnimationFrame(loop)
}

function convertToDecimal(x) {
  switch(x) {
      case "1":
        return 1
      case "2":
        return 2
      case "3":
        return 3
      case "4":
        return 4
      case "5":
        return 5
      case "6":
        return 6
      case "7":
        return 7
      case "8":
        return 8
      case "9":
        return 9
      case "A":
        return 10
      case "B":
        return 11
      case "C":
        return 12
      case "D":
        return 13
      case "E":
        return 14
      case "F":
        return 15
      case "G":
        return 16
      case "H":
        return 17
      case "J":
        return 18
      case "K":
        return 19
      case "L":
        return 20
      case "M":
        return 21
      case "N":
        return 22
      case "P":
        return 23
      case "Q":
        return 24
      case "R":
        return 25
      case "S":
        return 26
      case "T":
        return 27
      case "U":
        return 28
      case "V":
        return 29
      case "W":
        return 30
      case "X":
        return 31
      case "Y":
        return 32
      case "Z":
        return 33
      case "a":
        return 34
      case "b":
        return 35
      case "c":
        return 36
      case "d":
        return 37
      case "e":
        return 38
      case "f":
        return 39
      case "g":
        return 40
      case "h":
        return 41
      case "i":
        return 42
      case "j":
        return 43
      case "k":
        return 44
      case "m":
        return 45
      case "n":
        return 46
      case "o":
        return 47
      case "p":
        return 48
      case "q":
        return 49
      case "r":
        return 50
      case "s":
        return 51
      case "t":
        return 52
      case "u":
        return 53
      case "v":
        return 54
      case "w":
        return 55
      case "x":
        return 56
      case "y":
        return 57
      case "z":
        return 58
      
      
  }
}

var seed = fxhash.split("")
var converted = []
for(let i = 0; i < seed.length; i++) {
  converted.push(convertToDecimal(seed[i]))
}
                    
function init() {
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  console.log(seed)
  console.log(fxhash)

  if(seed[6] == "A" || seed[6] == "B" || seed[6] == "C" || seed[6] == "D") {
    stability = "Unstable"
  }
  else if(seed[6] == "E") {
    stability = "Collapsing"
  }
  else if(seed[6] == "F") {
    stability = "Total Collapse"
  }

  if(seed[10] == "A" || seed[10] == "B") {
    stability = "Complete Shutdown"
  }
  
  if(seed[3] == "a" || seed[3] == "b" || seed[3] == "c" || seed[3] == "d" || seed[3] == "e" || seed[3] == "f" || seed[3] == "g" || seed[3] == "h" || seed[3] == "i" || seed[3] == "j" || seed[3] == "k" || seed[3] == "m" || seed[3] == "n") {
    chaotic = "True"
  }
  
  if(Number.isNaN(parseInt(seed[2]))) {
    spiralType = "Prime"
  }
  else {
    spiralType = seed[2]
  }

  
  window.$fxhashFeatures = {
    "Size": converted.reduce((partialSum, a) => partialSum + a, 0),
    "Stability": stability,
    "Chaotic": chaotic,
    "Spiral": spiralType,
    "Super": fxrand()
  }

  console.log(window.$fxhashFeatures)
  
  loop()
}

window.onload = init()