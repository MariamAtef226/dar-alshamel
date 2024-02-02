import { useParams, useSearchParams } from "react-router-dom"

export default function Card(props){
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"))
    let {id} = useParams()
    return (
    <div className="card bg-dark text-light w-25 mt-4">
        <div className="card-body">
            <h4 className="card-title">{props.name}{id}</h4>
            <div className="card-text text-start">
                <ul>
                    <li>Height: {props.height}</li>
                    <li>Mass: {props.mass}</li>
                    <li>Birth year: {props.birth_year}</li>
                </ul>
            </div>
        </div>
        <button className="btn-success btn" onClick={props.switchColor}>
            Switch color mode
        </button>
    </div>
    )
    
}