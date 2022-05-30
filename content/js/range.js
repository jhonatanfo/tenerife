class Slider {
    constructor(rangeElement, valueElement, options) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.options = options

        // Attach a listener to "change" event
        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }

    // Initialize the slider
    init() {
        this.rangeElement.setAttribute('min', this.options.min)
        this.rangeElement.setAttribute('max', this.options.max)
        this.rangeElement.value = this.options.cur

        this.updateSlider()
    }

    // Format the money
    asMoney(value) {
        return 'R$ ' + parseFloat(value)
            .toLocaleString('pt-BR', {
                maximumFractionDigits: 2
            })
    }

    generateBackground(rangeElement) {
        if (this.rangeElement.value === this.options.min) {
            return
        }

        let percentage = (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
        return 'background: linear-gradient(to right, #f47332, #f47332, #f47332 ' + percentage + '%, #5f5f5e ' + percentage + '%, #5f5f5e 100%)'
    }

    updateSlider(newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
        this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
}
// Usage:

// First Slider
let firstSliderOptions = {
    min: 00000000,
    max: 10000000,
    cur: 5000000
}
let firstRangeElement = document.querySelector('.range__slider--first [type="range"]')
let firstValueElement = document.querySelector('.range .range__value--first span')

if (firstRangeElement) {
    let firstSlider = new Slider(
        firstRangeElement, firstValueElement, firstSliderOptions
    )
    firstSlider.init()
}

// Second slider
let secondSliderOptions = {
    min: 2000,
    max: 10000,
    cur: 3500
}

let secondRangeElement = document.querySelector('.range__slider--second [type="range"]')
let secondValueElement = document.querySelector('.range .range__value--second span')

if (secondRangeElement) {
    let secondSlider = new Slider(
        secondRangeElement, secondValueElement, secondSliderOptions
    )
    secondSlider.init()
}