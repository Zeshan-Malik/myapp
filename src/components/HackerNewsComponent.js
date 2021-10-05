import React, { useEffect } from "react";
export default function HackerNewsComponent(props) {
    // const [post, setPosts] =useState([])
    // const [loading, setLoading] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postPerPage, setPostPerPage] = useState(10)

    // if(props.data && props.data.length){
    //     setPosts(props.data)
    //     setLoading(false)
    // }
useEffect(()=>{
   return(props.hackerNewsDataHandler()) 
})

    return (<div>
        {/* {
            props.length ? <button style={{ display: "none" }}>Click Me</button> : <button onClick={() => props.hackerNewsDataHandler()}>Click Me</button>
        }
        {
            (props.data && props.data.length) ?console.log(props.data) : ""
        } */}

        { (props.data && props.data.length) ? <div>
            <table border="1px">
                <tbody>
                    <tr>
                        <td>Author Name</td>
                        <td>Score</td>
                        <td>Type</td>
                        <td>Title</td>
                        <td>Url</td>
                    </tr>
                    {
                        props.data.map(item => {
                          
                            return (
                                <tr key={item.id}>
                                    <td>{item.by}</td>
                                    <td>{item.score}</td>
                                    <td>{item.type}</td>
                                    <td>{item.title}</td>
                                    <td><a href= {item.url}>{item.url}</a></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </div> : ""
        }
    </div>)
}