// import React, {  useState } from 'react';
// import axios  from 'axios';
// import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// import CryptoJS  from "crypto-js";
// import './AddBooks.css'
// // const schema = yup.object().shape({
// //   firstName: yup.string().required("First Name should be required please"),
// //   lastName: yup.string().required(),
// //   email: yup.string().email().required(),
// //   age: yup.number().positive().integer().required(),
// //   password: yup.string().min(4).max(15).required(),
// //   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// // });
// // resolver: yupResolver(schema)

// const AddBooks = () => {
//   const [page, setPage] = useState(0);
 
//   const pageTitles=["Book ", "Author ", "Successfully save in db","Others"]
//   const { register, handleSubmit ,watch,reset,formState: { errors,isValid } } = useForm({mode:"all", });

// const station = ['', '東京','横浜','名古屋','名古屋'];
//   //testingselector
//   const fruits = register("fruits");
//   const myValue = watch("fruits", "default");


//   const onSubmit = data =>{
//     console.log(data);
//     const bookencrypText = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString();

//     localStorage.setItem("localStrogeBook",JSON.stringify(bookencrypText))
 
//   //REACT_APP_SERVER=http://localhost:8080/api/addBookInfo
//   //  axios.post(process.env.REACT_APP_SERVER,data)
//   //  .then(res=>{
//   //    if(res.data){
//   //      alert("Inserted Book Succeassfully and will from Clear localStorage");
//   //      localStorage.removeItem("localStrogeBook");
//   //      reset()
//   //    }
//   //  })
//   //  formSubmit()
  
//   };
//   const onChange=(e)=>{
//     alert("hello")
//   }
//   // for next page
//   const formSubmit=()=>{
//      setPage(current=>current+1)
//      return <div>Loading......</div>
//   }
//   // for previous page
//   const PrevousButton=()=>{
//     setPage(current=>current-1)
//     return <div>Loading......</div>
//   }
//   ///Render Button
//   const renderButton = ()=>{
//     if(page > 10){
//       return undefined;
//     }
//     else if(page==1){
//       return (
//        <div>
//         <button className='bg-primary' type='button'
       
//        onClick={PrevousButton}
//        >Prevous Page</button>   <br/>
//          <button className='bg-primary' type='button'   disabled={!isValid}
       
//        onClick={formSubmit}
//        >Next Page</button>
    
     
//        </div>
//       )
//     }
//     else if(page==2){
//       return (
//         <div>
//          <button className='bg-primary' type='button'
        
//         onClick={PrevousButton}
//         >Prevous Page</button>   <br/>
//           <button className='bg-primary' type='button'   disabled={!isValid}
        
//         onClick={formSubmit}
//         >Next Page</button>
     
      
//         </div>
//        )
//     }
//     else if(page==3){
//       return (
//         <div>
//          <button className='bg-primary' type='button'
        
//         onClick={PrevousButton}
//         >Prevous Page</button>   <br/>
//           <button className='bg-primary' type='button'   disabled={!isValid}
        
//         onClick={formSubmit}
//         >Next Page</button>
     
      
//         </div>
//        )
//     }
//     else if(page==4){
//       return (
//         <div>
//          <button className='bg-primary' type='button'
        
//         onClick={PrevousButton}
//         >Prevous Page</button>   <br/>
//           <button className='bg-primary' type='button'   disabled={!isValid}
        
//         onClick={formSubmit}
//         >Next Page</button>
     
      
//         </div>
//        )
//     }
//     else if(page==5){
//       return (
//         <div>
//          <button className='bg-primary' type='button'
        
//         onClick={PrevousButton}
//         >Prevous Page</button>   <br/>
//          <input   type="submit"/>
     
      
//         </div>
//        )
//     }
//     else{
//       return (
//       <div>
//           <button className='bg-primary' type='button'
//         disabled={!isValid}
//         onClick={formSubmit}
//         >Next Page</button>
       
//       </div>
//       )
//     }
//   }
//   return (
//     <div className='add-book '>
//       <h2 >Add Information {pageTitles[page]}</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//        {
//         page===0 && <section>
//            <label >Name</label>
//            <input type="text" name='name' onChange={onChange} {...register("name",{ required: true })}   placeholder="Title"/>
//            {errors.title && <span className=''>This field is required</span>}
//            <div className="form-check">
//           <label htmlFor="burger">
//            Male <input
//               {...register('gender', { required: true })}
//               type="radio"
//               name="gender"
//               value="male"
//               className="form-check-input"
//               id="male"
//             />{' '}
            
//           </label>
//         </div>
//         <div className="form-check">
//           <label htmlFor="fries">
//            female <input
//               {...register('gender', { required: true })}
//               type="radio"
//               name="gender"
//               value="female"
//               className="form-check-input"
//               id="female"
//             />
          
//           </label>
//         </div>
//         </section>
//        }
//        {
//         page==1 && <section>
//           <label >From</label>
//           {/* <select className='select' {...register("Form", { required: true })}>
//           <option value=""></option>
//           <option value="東京">東京</option>
//         <option value="	横浜">横浜</option>
//         <option value="	名古屋">名古屋	</option>
//         <option value="大阪	">大阪	</option>
       
//       </select> */}
//       <select className='select'    name="numberOfTickets" {...register("Form", { required: true })} >
//                                 {station.map(i =>
//                                     <option key={station[i]} value={i}>{i}</option>
//                                 )}
//                             </select>
//       <label >To</label>
//       <select className='select'    name="To" {...register("To", { required: true })} >
//                                 {station.map(i =>
//                                     <option key={station[i]} value={i}>{i}</option>
//                                 )}
//                             </select>
//         </section>
//        }
//        {
//         page==2 && <section>
//    <input type="date"  {...register('date', { required: true })} ></input>
//    <input type="time" {...register('time', { required: true })} ></input>
//         </section>
//        }
//         {
//         page==3 && <section>
//               <label >Amount (BDT)	</label>
//           <input type="number" required {...register("price",{ required: true })}  placeholder="price"/>
//            {errors.price && <span className=''>This field is required</span>}
//         </section>
//        }
//         {
//         page==4 && <section>
//               {/* <label >Amount (BDT)	</label> */}
             
//               {/* <textarea type="text" name='area' defaultValue={`",'"" ./\=?!:;
//                         "",""a"",""b""
//                         ヲンヰヱヴーヾ・
//                         ｧｰｭｿﾏﾞﾟ
//                         ㌶Ⅲ⑳㏾☎㈱髙﨑
//                         ¢£¬‖−〜―
//                         <script>alert('Bug!!!');</script>
//                         &lt;&copy;&amp;
//                         జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
//                         జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
//                         §¦ЙЁКД§∪§¦ЙЁКД§
//                         t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"							
//                                 `}>
                              

// 							</textarea> */}
//                <select
//         onChange={(e) => {
//           fruits.onChange(e); // react hook form onChange
//           console.log(e.target.value); // my onChange
//         }}
//         onBlur={fruits.onBlur}
//         ref={fruits.ref}
//       >
//         <option value="Banana">Banana</option>
//         <option value="Kiwi">Kiwi</option>
//         <option value="Mango">Mango</option>
//       </select>
//         </section>
//        }
      
//         {
//           renderButton()
//         }
      
      
//       </form>
//     </div>
//   );
// };

// export default AddBooks;