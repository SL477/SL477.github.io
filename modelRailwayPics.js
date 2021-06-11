'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

//Based on https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp originally, then turned into a react component

var ModelRailwayPics = function (_React$Component) {
    _inherits(ModelRailwayPics, _React$Component);

    function ModelRailwayPics(props) {
        _classCallCheck(this, ModelRailwayPics);

        var _this = _possibleConstructorReturn(this, (ModelRailwayPics.__proto__ || Object.getPrototypeOf(ModelRailwayPics)).call(this, props));

        _this.state = {
            pics: pics,
            slideIndex: 1
        };
        _this.showSlides = _this.showSlides.bind(_this);
        _this.plusSlides = _this.plusSlides.bind(_this);
        _this.currentSlide = _this.currentSlide.bind(_this);
        return _this;
    }

    _createClass(ModelRailwayPics, [{
        key: "showSlides",
        value: function showSlides(n) {
            var slideIndex = n;
            if (n > this.state.pics.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = this.state.pics.length;
            }

            this.setState({ slideIndex: slideIndex });
        }
    }, {
        key: "plusSlides",
        value: function plusSlides(n) {
            this.showSlides(this.state.slideIndex += n);
        }
    }, {
        key: "currentSlide",
        value: function currentSlide(n) {
            this.showSlides(this.state.slideIndex = n);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "a",
                        { className: "prev", onClick: function onClick() {
                                _this2.plusSlides(-1);
                            } },
                        "\u276E"
                    ),
                    React.createElement(
                        "div",
                        { className: "numbertext" },
                        this.state.slideIndex,
                        " / ",
                        this.state.pics.length
                    ),
                    React.createElement("img", { src: this.state.pics[this.state.slideIndex - 1].src, alt: this.state.pics[this.state.slideIndex - 1].alt, className: "mainPic app" }),
                    React.createElement(
                        "a",
                        { className: "next", onClick: function onClick() {
                                _this2.plusSlides(1);
                            } },
                        "\u276F"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption-container" },
                        React.createElement(
                            "p",
                            { id: "caption" },
                            this.state.pics[this.state.slideIndex - 1].alt
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        this.state.pics.map(function (item, index) {
                            return React.createElement(
                                "div",
                                { className: "column", key: index, style: { width: 100 / _this2.state.pics.length + "%" } },
                                React.createElement("img", { className: "demo cursor" + (_this2.state.slideIndex - 1 == index ? " active" : ""), src: item.src, style: { width: "100%" }, alt: item.alt, onClick: function onClick() {
                                        _this2.currentSlide(index + 1);
                                    } })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ModelRailwayPics;
}(React.Component);

var domContainer = document.querySelector("#modelRailwayPics");
ReactDOM.render(e(ModelRailwayPics), domContainer);