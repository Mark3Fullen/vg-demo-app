import React from "react";

const TenzieDice = (props) => {

    const styles = {
        backgroundColor: props.isHeld? "59E391" : "white"
    }

    return (
        <div className="tenzieDice" style={styles} onClick={props.toggle}>
            <h2 className="tenzieDice-num">{props.value}</h2>
        </div>
    )
}

export default TenzieDice