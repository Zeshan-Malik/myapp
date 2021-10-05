import React from "react";
export default function ApiComponent(props) {
    return (
        <div>
            {
              (props.data&&  props.data.length) ? <button style={{ display: "none" }}>Click Me</button> : <button onClick={() => props.apiDataHandler()}>Click Me</button>
            }
            {
                 (props.data&&  props.data.length)  ? <div>
                    <table border="1px">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Body</td>
                            </tr>

                            {
                                props.data[0].data.map(item => {
                                    return (<tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>)

                                })
                            }
                        </tbody>
                    </table>
                </div> : ""
            }

        </div>
    )
}