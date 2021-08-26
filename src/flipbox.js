'use strict';
const e = React.createElement;

function FlipBox() {
    let ret = flipboxes.map((f, idx) => {
        return (
            <div>
                <div className="flip-box" key={idx}>
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h2>{f.alt}</h2>
                        </div>
                        <div className="flip-box-back">
                            <img alt={f.alt} src={f.img} className="hundredi"/>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    });
    return <div>{ret}</div>;
}

const domContainer = document.querySelector("#flipbox");
ReactDOM.render(e(FlipBox), domContainer);
