/**
 * This requires an array called pics with the form [{src: string, alt: string}]
 */

class MySlideShow extends HTMLElement {
    
    constructor() {
        super();
        // Based on https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp originally, 
        // then turned into a react component and now a web-component

        // https://www.freecodecamp.org/news/write-components-that-work-in-any-framework/

        this.slideIndex = 1;

        const containerDiv = document.createElement('div');
        containerDiv.className = 'container-fluid';

        const innerContainer = document.createElement('div');
        innerContainer.className = 'container';

        const prevBtn = document.createElement('a');
        prevBtn.className = 'prev';
        prevBtn.textContent = '\u276E';
        prevBtn.id = 'mySlideShowPrevBtn';
        innerContainer.appendChild(prevBtn);

        const numberTextDiv = document.createElement('div');
        numberTextDiv.className = 'numbertext';
        // eslint-disable-next-line no-undef
        numberTextDiv.textContent = `${this.slideIndex} / ${pics.length}`;
        numberTextDiv.id = 'mySlideShowNumberText';
        innerContainer.appendChild(numberTextDiv);

        const imgElement = document.createElement('img');
        // eslint-disable-next-line no-undef
        imgElement.src = pics[this.slideIndex - 1].src;
        // eslint-disable-next-line no-undef
        imgElement.alt = pics[this.slideIndex - 1].alt;
        imgElement.className = "mainPic app";
        imgElement.id = 'mySlideShowPic';
        innerContainer.appendChild(imgElement);

        const nextBtn = document.createElement('a');
        nextBtn.className = 'next';
        nextBtn.textContent = '\u276F';
        innerContainer.appendChild(nextBtn);
        nextBtn.id = 'mySlideShowNextBtn';

        const captionContainer = document.createElement('div');
        captionContainer.className = 'caption-container';
        const captionElement = document.createElement('p');
        captionElement.id = 'mySlideShowCaption';
        // eslint-disable-next-line no-undef
        captionElement.textContent = pics[this.slideIndex].alt;
        captionContainer.appendChild(captionElement);
        innerContainer.appendChild(captionContainer);

        const row = document.createElement('div');
        row.className = 'row';
        // eslint-disable-next-line no-undef
        for (let i = 0; i < pics.length; i++) {
            const col = document.createElement('div');
            col.className = 'column';
            // eslint-disable-next-line no-undef
            col.style = `width: ${100 / pics.length}%`;

            const innerImg = document.createElement('img');
            innerImg.className = `demo cursor ${this.slideIndex - 1 === i? 'active' : ''}`;
            // eslint-disable-next-line no-undef
            innerImg.src = pics[i].src;
            // eslint-disable-next-line no-undef
            innerImg.alt = pics[i].alt;
            innerImg.style = 'width: 100%';
            innerImg.id = `mySlideShowTile${i}`;
            col.appendChild(innerImg);
            row.appendChild(col);
        }
        innerContainer.appendChild(row);

        containerDiv.appendChild(innerContainer);

        this.appendChild(containerDiv);

        this.nextBtn = document.querySelector('#mySlideShowNextBtn');
        this.prevBtn = document.querySelector('#mySlideShowPrevBtn');
        this.captionElement = document.querySelector('#mySlideShowCaption');
        this.picElement = document.querySelector('#mySlideShowPic');
        this.numberText = document.querySelector('#mySlideShowNumberText');
    }

    connectedCallback() {
        this.nextBtn.addEventListener('click', this.nextClick);
        this.prevBtn.addEventListener('click', this.prevClick);
    }

    disconnectedCallback() {
        this.nextBtn.removeEventListener('click', this.nextClick);
        this.prevBtn.removeEventListener('click', this.prevClick);
    }

    /**
     * Increase the slide number
     * @param {number} n 
     */
    plusSlides(n) {
        this.slideIndex += n;
        this.showSlides();
    }

    nextClick = () => {
        this.plusSlides(1);
    };

    prevClick = () => {
        this.plusSlides(-1);
    };

    /**
     * Make sure the number is in the bounds of the array
     * @param {number} n 
     */
    showSlides() {
        // eslint-disable-next-line no-undef
        if (this.slideIndex > pics.length) {
            this.slideIndex = 1;
        }
        else if (this.slideIndex < 1) {
            // eslint-disable-next-line no-undef
            this.slideIndex = pics.length;
        }

        // eslint-disable-next-line no-undef
        this.captionElement.textContent = pics[this.slideIndex - 1].alt;
        // eslint-disable-next-line no-undef
        this.picElement.src = pics[this.slideIndex - 1].src;
        // eslint-disable-next-line no-undef
        this.numberText = `${this.slideIndex} / ${pics.length}`;

        const mySlideShowNumberText = document.getElementById('mySlideShowNumberText');
        mySlideShowNumberText.textContent = this.numberText;

        // eslint-disable-next-line no-undef
        for (let i = 0; i < pics.length; i++) {
            const slideElement = document.querySelector(`#mySlideShowTile${i}`);
            if (slideElement) {
                slideElement.className = slideElement.className.replace('active', '');
                if (i === this.slideIndex - 1) {
                    slideElement.className += 'active';
                }
            }
        }
    }

    /**
     * Select the current slide
     * @param {number} n 
     */
    currentSlide(n) {
        this.slideIndex = n;
        this.showSlides();
    }
}
customElements.define('my-slideshow', MySlideShow);
