import React from "react"
import GoogleMap from "./GoogleMap"
import Phone from "./Phone"
import Times from "./Times"
import Logo from "./Logo"

export default function About() {
    return (
        <section className="om-oss">
            <div className="info-container">
                <h2>Götas Pizzabutik</h2>
                <div className="info">
                    <div className="left-col">
                        <Phone />
                        <img src="/image1.jpg" />
                    </div>

                    <div className="right-col">
                        <div className="address">
                            <h3>
                                Älvsborgsgatan 39,
                                <br />
                                414 71 Göteborg
                            </h3>
                            <GoogleMap />
                        </div>
                    </div>
                </div>
                <div className="tider-och-smaklig">
                    <Times />
                    <div className="smaklig">
                        <Logo />
                        <h4>Smaklig måltid!</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
