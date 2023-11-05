import React, {useState} from "react";



function HogList({hogs}){
    const[showDetails , setShowDetails] = useState(false)
	const[filterGreased , setFilterGreased]= useState(false)
	const[sortOrder , setSortOrder] = useState("sort by")
	const[showHogs, setShowHogs] =useState(true)
	function handleShowHogs(){
		setShowHogs((showHogs) => !showHogs)
	}
	function handleshowDetails(){
     setShowDetails((showDetails) => !showDetails)
	}
	function handleGreased(){
		setFilterGreased(filterGreased => !filterGreased)
	}
	const greasedFilteration = filterGreased ? hogs.filter(hog => hog.greased ===true ) : hogs;

	if(sortOrder === "Name"){
	greasedFilteration.sort((a, b) => a.name.localeCompare(b.name));
	}else if(sortOrder === "Weight"){
	greasedFilteration.sort((a,b)=> a.weight - b.weight )
	}
	function handleSortGreased(e){
		setSortOrder(e.target.value)
	}

   return <div>
       	<div><input type="checkbox"  checked={filterGreased} onChange={handleGreased} />
			<label>show greasesd</label></div>
			<div><label>sort by</label>
			<select value={sortOrder} onChange={handleSortGreased}>
			<option value={sortOrder}>{sortOrder}</option>
				<option value="Name">Name</option>
				<option value="Weight">Weight</option>
			</select></div>
			<button onClick={handleShowHogs}>{showHogs ? "Hide Hogs" : "Show Hogs"}</button>
			{showHogs? (greasedFilteration.map((hog, index) => 
				<div style={{background: "#D3D3D3" , borderRadius: "50px" , width:"30%" , margin:"30px auto" ,padding:"10px" }} key={index}
				 onClick={handleshowDetails}><h3>Name: {hog.name} </h3>
				<img src={hog.image} style={{width: "200px"} } alt=""/>
				{showDetails ? (<div>
					<p>specialty: {hog.specialty}</p>
					<p>greased:{filterGreased ? "greased" : "not greased" } </p>
					<p>weight: {hog.weight}</p>
				               </div>)  :    (<div />)} 
				</div>)) : (<div/>)}
         </div>

}
export default HogList