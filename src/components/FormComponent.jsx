import { React,useState } from "react";
import axios from 'axios';
import classes from  '../style/Loading.module.css';
import congratulation from '../assets/congratulation.gif';
import sad from '../assets/sad.gif';
const FormComponent = () => {
  const [ loading,setLoading ]=useState(false); 
  const [ semester,setSemester] = useState(null);
  const[roll,SetRoll]= useState(null);
  const [ result,setResult ] =useState(null);
  const [check,setcheck]=useState(null);
  const handleSubmit=async (e)=>{
      e.preventDefault();
      if(roll == null || '' || undefined){
        alert('enter roll number');
      }else if(semester == null || '' || undefined){
        alert('select semester');
      }else{
        setLoading(true);
         await axios.get(`https://result.almadanimadrasha.com/tshirt/${roll}/${semester}`)
      .then(res => {
        checkInt(res.data.result);
        setResult(res.data.result);
        console.log(result.data);
        // setLoading(false);
      }).catch((err)=>{
        console.log(err.message);
        setLoading(false);
      })
      }  
  }
  function checkInt(x){
    let ser=x.match(`.`);
    if(parseInt(ser)>0){
      setcheck(true);
    }else{
      setcheck(false);
    }
  }
    return ( 
      <div className="w-full md:w-full lg:w-6/12 mx-auto md:mx-0">
       <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
         { !result ? <>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
            Diploma Result 2022 {result}
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div id="input" className="flex flex-col w-full my-5">
              <label for="username" className="text-gray-500 text-left mb-2">Select semester</label>
                <select 
                value={semester}
                onChange={(e)=>setSemester(e.target.value)}
                className="appearance-none border-2 border-gray-100 rounded-lg text-black px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00d8ff] focus:shadow-lg">
                  <option >select your semester</option>
                  <option value="4">4th</option>
                  <option value="6">6th</option>
                  {/* <option value="8">8th</option> */}
                </select>
                
            </div>
            <div id="input" className="flex flex-col w-full my-5">
              <label for="password" className="text-left text-gray-500 mb-2"
                >Enter Board Roll</label
              >
              <input
                type="number"
                id="number"
                value={roll}
                onChange={(e)=>SetRoll(e.target.value)}
                placeholder="Please insert your board roll"
                className="appearance-none border-2 text-black border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00d8ff] focus:shadow-lg"
              />
            
            </div>
            <div id="button" className="flex flex-col w-full my-5">
              <button
                type="submit"
                className="w-full py-4 bg-[#00d8ff] rounded-lg text-green-100"
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold">Search</div>
                </div>
              </button>
            </div>
          </form>
          { loading && <div className={classes.loading}></div>}
          </> : 
          <div className="">
            <h1 className="text-yellow-400 text-3xl">{ check ? `Congratulations !!` : 'Try your best in Next Time!'}</h1>
             <img className="w-100 h-80" src={check ? congratulation : sad} alt="" />
             <h1 className="text-black"> { check ? `CGPA - ${result}` : 'Fail' }</h1>

          </div>}
        </div>
        
      </div>
     );
}
 
export default FormComponent;