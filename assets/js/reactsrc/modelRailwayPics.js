'use strict';
const e = React.createElement;

//Based on https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp originally, then turned into a react component

class ModelRailwayPics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: pics,
            slideIndex: 1
        }
        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
    }

    showSlides(n) {
        let slideIndex = n;
        if (n > this.state.pics.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = this.state.pics.length;
        }

        this.setState({slideIndex: slideIndex});
    }

    plusSlides(n) {
        this.showSlides(this.state.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.state.slideIndex = n);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <a className="prev" onClick={() =>{this.plusSlides(-1)}}>&#10094;</a>
                    <div className="numbertext">{this.state.slideIndex} / {this.state.pics.length}</div>
                    <img src={this.state.pics[this.state.slideIndex - 1].src} alt={this.state.pics[this.state.slideIndex - 1].alt} className="mainPic app"/>

                    
                    <a className="next" onClick={()=>{this.plusSlides(1)}}>&#10095;</a>

                    <div className="caption-container">
                        <p id="caption">{this.state.pics[this.state.slideIndex - 1].alt}</p>
                    </div>

                    <div className="row">
                        {this.state.pics.map((item, index) => (
                            <div className="column" key={index} style={{width: `${100 / this.state.pics.length}%`}}>
                                <img className={"demo cursor" + ((this.state.slideIndex - 1)==index? " active" : "")} src={item.src} style={{width: "100%"}} alt={item.alt} onClick={() =>{this.currentSlide(index + 1)}}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector("#modelRailwayPics");
const root = ReactDOM.createRoot(domContainer);
root.render(e(ModelRailwayPics));