import {useEffect } from "react"
import SingleImage from "./SingleImage"



export default function Images(props) {
    useEffect(()=>{
        props.showImages()
  }, [])
    return (<div className="container" style={{ display: "flex" }}>
        <div className="row">{
            (props.data.data && props.data.data.length) ? props.data.data.map((item, index) => {
                return (
                    <div className="col-4" key={index}>
                    <SingleImage  item={item} id={index}  alternative="No content" removeImage={props.deleteImageHandler} />
                    </div>
                )

            }) : ""
        }
        </div>
    </div>)
}

