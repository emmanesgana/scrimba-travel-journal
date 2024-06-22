import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Main(props) {
    console.log("main:", props)

    console.log("location:", props.location)
    return (
        <div className="content">
            <div className="container-image">
                <img className="content-image" src={`./images/${props.imageUrl}`} />
            </div>
            <div className="container-info">
                <div className="container-location">
                    <p className="content-location"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#F55A5A", }} /> {props.location.toUpperCase()}</p>
                    <a className="content-googlemaplink" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="content-title">{props.title}</h1>
                <p className="content-date">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="content-desc">{props.description}</p>
            </div>
        </div>

    )
}