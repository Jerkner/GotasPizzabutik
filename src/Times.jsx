import React from "react"

export default function Times() {
    return (
        <div className="tider">
            <h3>Öppettider:</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Måndag - Torsdag</td>
                        <td>11.30 - 21.00</td>
                    </tr>
                    <tr>
                        <td>Fredag</td>
                        <td>11.30 - 22.00</td>
                    </tr>
                    <tr>
                        <td>Lördag</td>
                        <td>12.00 - 22.00</td>
                    </tr>
                    <tr>
                        <td>Söndag</td>
                        <td>12.00 - 21.00</td>
                    </tr>
                </tbody>
            </table>

            <p>
                LUNCH 99 kr:
                <br />
                serveras vardagar kl 11.30- 14.00
            </p>
        </div>
    )
}
