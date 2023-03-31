import {useState} from "react";
export default function BMICalculator(){
  const [person,setPerson]=useState({name:"",ht:0,wt:0})
  const [bmi,setBMI]=useState(0)
  const [category,setCategory]=useState("")
  const check=()=>{
    const b=person.wt/(person.ht*person.ht);
    setBMI(b);
    setCategory((b<16)?"Severe Thinness":
    (b<17)?"Moderate Thinness":
    (b<18.5)?"Mild Thinness":
    (b<25)?"Normal":
    (b<30)?"over weight":
    (b<35)?"Obese Class I":
    (b<40)?"Obese class II":
    "Obese class III"
    )
  }
  return(
    <div>
      <h5>Enter Your Name:</h5>
      <input type="text" value={person.name} onChange={(e)=>{setPerson({...person,name:e.target.value})}}/>
      <h5>Enter Your Height (in Meters)</h5> 
      <input type="text" value={person.ht} onChange={(e)=>{setPerson({...person,ht:e.target.value})}}/>
      <h5>Enter Your Weight (in kgs)</h5>
      <input type="text" value={person.wt} onChange={(e)=>{setPerson({...person,wt:e.target.value})}}/>
      <div>
      <button onClick={check}>Check</button>
      </div>
      <h1>Hello..Mr./Mrs.{person.name} is with bmi {bmi} and is {category}</h1>
    </div>
  )
}