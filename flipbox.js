'use strict';

var e = React.createElement;

function FlipBox() {
    var ret = flipboxes.map(function (f, idx) {
        return React.createElement(
            "span",
            { key: idx },
            React.createElement(
                "span",
                { className: "flip-box", key: idx },
                React.createElement(
                    "span",
                    { className: "flip-box-inner" },
                    React.createElement(
                        "span",
                        { className: "flip-box-front" },
                        React.createElement(
                            "h2",
                            null,
                            f.alt
                        )
                    ),
                    React.createElement(
                        "span",
                        { className: "flip-box-back" },
                        React.createElement("img", { alt: f.alt, src: f.img, className: "hundredi" })
                    )
                )
            )
        );
    });
    return React.createElement(
        "div",
        { className: "center" },
        ret
    );
}

var domContainer = document.querySelector("#flipbox");
ReactDOM.render(e(FlipBox), domContainer);