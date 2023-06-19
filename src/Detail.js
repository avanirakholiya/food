import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const EmpDetail = () => {
    const { id } = useParams();
    const [foodData, setFoodData] = useState({});

    const getData = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            setFoodData(resp.meals[0]);
        }).catch((err) => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div style={{margin:"50px"}}>
        <div style={{ border: "1px", boxShadow: "0px 0px 9px red", paddingTop: "15px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4" ><img src={foodData.strMealThumb}  style={{width:"100%",height:"350px"}}/></div>
                    <div className="col-sm-8">                                               
                           <b>Meal: </b>{foodData.strMeal}<br />
                            <b>Area: </b>{foodData.strArea}<br/>
                            <b>strCategory:</b>{foodData.strCategory}<br/>
                            <b>strInstructions:</b> {foodData.strInstructions}
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-4 mt-2 mb-2"><Link className="btn btn-danger" to="/">Back to Listing</Link></div>
                    </div>
            </div>
            
            </div>
        </div >
    );
}

export default EmpDetail;