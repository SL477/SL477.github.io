'use strict';
const e = React.createElement;

function FlipBox() {
    let ret = flipboxes.map((f, idx) => {
        return (
            <span key={idx}>
                <span className="flip-box" key={idx}>
                    <span className="flip-box-inner">
                        <span className="flip-box-front">
                            <h2>{f.alt}</h2>
                        </span>
                        <span className="flip-box-back">
                            <img alt={f.alt} src={f.img} className="hundredi"/>
                        </span>
                    </span>
                </span>
            </span>
        );
    });
    return <div className="center">{ret}</div>;
}

const domContainer = document.querySelector("#flipbox");
ReactDOM.render(e(FlipBox), domContainer);
