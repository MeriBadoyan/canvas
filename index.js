const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const pencileBtn = document.getElementById('pencil-btn')
const eraserBtn = document.getElementById('eraser-btn')
const clearBtn = document.getElementById('clear-btn')

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(event) {
    if (!isDrawing) return

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()

    lastX = event.offsetX
    lastY = event.offsetY

    // [lastX, lastY] = [event.offsetX, event.offsetY]
}

function startDrawing(event) {
    isDrawing = true
    lastX = event.offsetX
    lastY = event.offsetY

    // [lastX, lastY] = [event.offsetX, event.offsetY]
}

function stopDrawing(event) {
    isDrawing = false
}

function activatePencil() {
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2
    pencileBtn.classList.add('active')
    eraserBtn.classList.remove('active')
}

function activateEraser() {
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 2
    eraserBtn.classList.add('active')
    pencileBtn.classList.remove('active')
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', stopDrawing)
canvas.addEventListener('mouseout', stopDrawing)

pencileBtn.addEventListener('click', activatePencil)
eraserBtn.addEventListener('click', activateEraser)
clearBtn.addEventListener('click', clearCanvas)