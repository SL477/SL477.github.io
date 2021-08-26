'use strict';

var e = React.createElement;

function FlipBox() {
    var ret = flipboxes.map(function (f, idx) {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "flip-box", key: idx },
                React.createElement(
                    "div",
                    { className: "flip-box-inner" },
                    React.createElement(
                        "div",
                        { className: "flip-box-front" },
                        React.createElement(
                            "h2",
                            null,
                            f.alt
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "flip-box-back" },
                        React.createElement("img", { alt: f.alt, src: f.img, className: "hundredi" })
                    )
                )
            ),
            React.createElement("br", null)
        );
    });
    return React.createElement(
        "div",
        null,
        ret
    );
}

var domContainer = document.querySelector("#flipbox");
ReactDOM.render(e(FlipBox), domContainer);