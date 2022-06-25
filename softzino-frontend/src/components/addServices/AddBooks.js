import React, {  useState,useEffect } from 'react';
import axios  from 'axios';
import { useForm } from "react-hook-form";
import CryptoJS  from "crypto-js";
import './AddBooks.css'


const AddBooks = () => {
  const [page, setPage] = useState(0);
  const [bookingInfo,setBookingInfo] = useState()
 const [userName, setUserName] = useState("");
 const [userGender,setUserGender] = useState("");
 const [locationForm, setLocationForm] =useState("");
 const [locationTo, setLocationTo] =useState("");
 const [selectDate, setSelectDate] =useState("");
 const [selectTime, setSelectTime] =useState("");
 const [tickectPrice, setTickectPrice] =useState();

  const pageTitles=["Book ", "Author ", "Successfully save in db","Others"]
  const { register, handleSubmit ,watch,reset,formState: { errors,isValid } } = useForm({mode:"all", });

const station = ['', 'Tokyo','Yokohama','Nagoya','Nagoya'];
  //testingselector

  const name = register("name",{ required: true });
  const gender= register('gender', { required: true });
  const form= register('form', { required: true });
  const to= register('to', { required: true });
  const date= register('date', { required: true });
  const time= register('time', { required: true });
  const price= register('price', { required: true ,min:0});
  // const titleValue= watch("title");

let bookingObg={userName,userGender,locationForm,locationTo,selectDate,selectTime,tickectPrice}



  const onSubmit = data =>{
    console.log(bookingInfo);
 

    // localStorage.setItem("localStrogeBook",JSON.stringify(bookencrypText))
  //   process.env.REACT_APP_SERVER
  // REACT_APP_SERVER=http://localhost:8080/api/addBookInfo
   axios.post( process.env.REACT_APP_SERVER,bookingInfo)
   .then(res=>{
     if(res.data){
       alert("Inserted Book Succeassfully and will from Clear localStorage");
    
       setPage(0)
       localStorage.removeItem("localStrogeBook");
       setBookingInfo({})
       reset()
     }
     else{
    alert("Name field wiil be unique ")
     }
   })
   formSubmit()
  
  };

  // for next page
  const formSubmit=()=>{
    if(userName === "" || userGender === "")
    {
        console.log(errors);
    }else{
      setPage(current=>current+1)
    }
     const bookencrypText = CryptoJS.AES.encrypt(JSON.stringify(bookingObg), process.env.REACT_APP_SECRET_KEY).toString();
      localStorage.setItem("localStrogeBook",bookencrypText.toString())
     return <div>Loading......</div>
  }
  // for previous page
  const PrevousButton=()=>{
    setPage(current=>current-1)
    return <div>Loading......</div>
  }
  ///Render Button
  const renderButton = ()=>{
    if(page > 4){
      return undefined;
    }
    else if(page===1){
      return (
       <div>
        <button className='bg-primary' type='button'
       
       onClick={PrevousButton}
       >Prevous Page</button>   <br/>
         <button className='bg-primary' type='button'  
       
       onClick={formSubmit}
       >Next Page</button>
    
     
       </div>
      )
    }
    else if(page===2){
      return (
        <div>
         <button className='bg-primary' type='button'
        
        onClick={PrevousButton}
        >Prevous Page</button>   <br/>
          <button className='bg-primary' type='button'  
        
        onClick={formSubmit}
        >Next Page</button>
     
      
        </div>
       )
    }
    else if(page===3){
      return (
        <div>
         <button className='bg-primary' type='button'
        
        onClick={PrevousButton}
        >Prevous Page</button>   <br/>
          <button className='bg-primary' type='button' 
        
        onClick={formSubmit}
        >Next Page</button>
     
      
        </div>
       )
    }
    else if(page===4){
      return (
        <div>
         <button className='bg-primary' type='button'
        
        onClick={PrevousButton}
        >Prevous Page</button>   <br/>
       <input onClick={onSubmit}   type="submit"/>
     
      
        </div>
       )
    }
  
    else{
      return (
      <div>
          <button className='bg-primary' type='button'
       
        onClick={formSubmit}
        >Next Page</button>
       
      </div>
      )
    }
  }



  //grt from local
  useEffect(() => {

  
if(localStorage.getItem('localStrogeBook')){
  var bytes  = CryptoJS.AES.decrypt(localStorage.getItem('localStrogeBook'),  process.env.REACT_APP_SECRET_KEY);
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  const info = JSON.parse(decryptedData);
  if(info)
  {
  
const {userName, userGender, locationForm, locationTo,selectDate,selectTime,tickectPrice} = info;
setBookingInfo({userName,userGender,locationForm,locationTo,selectDate,selectTime,tickectPrice })
    setUserName(userName)
    setUserGender(userGender)
    setLocationForm(locationForm)
    setLocationTo(locationTo)
    setSelectDate(selectDate)
    setSelectTime(selectTime)
    setTickectPrice(tickectPrice )
  }
}
     
  }, []);
// console.log(bookingInfo);
  return (
    <div className='add-book '>
      <h2 >	Train Ticket Reservation System</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
       {
        //Name input field
        page===0 && <section>
           <label >Name</label>
           <input type="text" name='name' value={bookingInfo?.userName}  onChange={(e) => {
          name.onChange(e); 
         setUserName(e.target.value)
        }}
        ref={name.ref}  placeholder="Title" />
           {errors.userName && <span className=''>This field is required</span>}
           <div className="form-check">
           {/* Gender input field */}
      <label>Gender</label><br/>
           Male <input
             ref={gender.ref}
             onChange={(e) => {
              name.onChange(e); 
             setUserGender(e.target.value)
            }}
              type="radio"
              name="gender"
              value="male"
              className="form-check-input"
              id="male"
              checked={userGender === "male" && true}
            />
        </div>
        <div className="form-check">
          <label htmlFor="fries">
           female <input
              ref={gender.ref}
              onChange={(e) => {
               name.onChange(e); 
              setUserGender(e.target.value)
             }}
               type="radio"
               name="gender"
               value="female"
               className="form-check-input"
               id="female"
               checked={userGender === "female" && true}
            />
          </label>
        </div>
        </section>
       }
       {
        page===1 && <section>
          <label >From</label>
          <select className='select' value={locationForm} onChange={(e) => {
          form.onChange(e); 
          setLocationForm(e.target.value); 
        }}
        ref={form.ref} >
             {station.map(i => <option key={station[i]} value={i}>{i}</option>
                                )}
          </select>
      <label >To</label>
      <select className='select' value={locationTo} onChange={(e) => {
          form.onChange(e); // react hook form onChange
          setLocationTo(e.target.value); // my onChange
        }} ref={to.ref}  >
          {station.filter(i =>i!==locationForm).map(i=><option key={station[i]} value={i}>{i}</option> )}
      </select>
    </section>
       }
       {
        page===2 && <section>
   <input type="date"   value={selectDate} onChange={(e) => {
          date.onChange(e); 
          setSelectDate(e.target.value); 
        }}ref={date.ref}  >
    </input>
   <input type="time"  value={selectTime} onChange={(e) => {
          time.onChange(e); 
          setSelectTime(e.target.value); 
        }}ref={time.ref}  >
    </input>
  </section>
       }
        {
        page===3 && <section>
        <label >Amount (BDT)	</label>
          <input type="number" required value={tickectPrice} onChange={(e) => {
          price.onChange(e); 
          setTickectPrice((e.target.value));
        }}
      
        ref={price.ref}  placeholder="price"/>
           {errors.price && <span className=''>This field is required</span>}
        </section>
       }
        {
        page===4 && <section>
              {/* <label >Amount (BDT)	</label> */}
             
              {/* <textarea type="text" name='area' defaultValue={`",'"" ./\=?!:;
                        "",""a"",""b""
                        ヲンヰヱヴーヾ・
                        ｧｰｭｿﾏﾞﾟ
                        ㌶Ⅲ⑳㏾☎㈱髙﨑
                        ¢£¬‖−〜―
                        <script>alert('Bug!!!');</script>
                        &lt;&copy;&amp;
                        జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
                        జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
                        §¦ЙЁКД§∪§¦ЙЁКД§
                        t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"							
                                `}>
                              

							</textarea> */}
             <p> Name: {userName}</p>
             <p> Gender: {userGender}</p>
             <p> From: {locationForm}</p>
             <p> To: {locationTo}</p>
             <p> Date: {selectDate}</p>
             <p> Time: {selectTime}</p>
             <p> Amount: (JPY) ￥ 	{(Math.floor(parseInt((tickectPrice* 1.47)))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </section>
       }
      
        {
          renderButton()
        }
      
      
      </form>
    </div>
  );
};

export default AddBooks;