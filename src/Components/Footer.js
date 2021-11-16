import React from "react"

function Footer() {
    return(
        <div className="footer">
            <h3 className="footer-title">Toelichting</h3>
            <ul className="footer-list">
            <li>Alle songs in deze playlist worden automatisch gegroepeerd op genre.</li>
            <li>Overige sorteeracties (op titel, artiest en rating) werken via de buttons.</li>
            <li>De gehele playlist leegmaken werkt eveneens via de button. </li>
            </ul>
        </div>
    )
}

export default Footer