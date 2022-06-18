import React, {  useState } from 'react';
import axios  from 'axios';
import { useForm } from "react-hook-form";
import CryptoJS  from "crypto-js";
import './AddBooks.css'
const AddBooks = () => {
  const [page, setPage] = useState(0);
 
  const pageTitles=["Book ", "Author ", "Successfully save in db"]
  const { register, handleSubmit ,reset,formState: { errors,isValid } } = useForm({mode:"all"});


  
  const onSubmit = data =>{
    
    const bookencrypText = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString();

    localStorage.setItem("localStrogeBook",JSON.stringify(bookencrypText))
 
  //REACT_APP_SERVER=http://localhost:8080/api/addBookInfo
   axios.post(process.env.REACT_APP_SERVER,data)
   .then(res=>{
     if(res.data){
       alert("Inserted Book Succeassfully and will from Clear localStorage");
       localStorage.removeItem("localStrogeBook");
       reset()
     }
   })
   formSubmit()
  
  };
  // for next page
  const formSubmit=()=>{
     setPage(current=>current+1)
  }
  // for previous page
  const PrevousButton=()=>{
    setPage(current=>current-1)
  }
  ///Render Button
  const renderButton = ()=>{
    if(page > 1){
      return undefined;
    }
    else if(page==1){
      return (
       <div>
         <button className='bg-primary' type='button'
       
       onClick={PrevousButton}
       >Prevous Page</button>
       <br/>
       <input disabled={!isValid}  type="submit"/>
       </div>
      )
    }
    else{
      return (
        <button className='bg-primary' type='button'
        disabled={!isValid}
        onClick={formSubmit}
        >Next Page</button>
      )
    }
  }
  return (
    <div className='add-book text-center'>
      <h2 >Add Information {pageTitles[page]}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
       {
        page===0 && <section>
           <input type="text" name='title' {...register("title",{ required: true })}  placeholder="Title"/>
           {errors.title && <span className=''>This field is required</span>}
           <input type="number" required {...register("price",{ required: true })}  placeholder="price"/>
           {errors.price && <span className=''>This field is required</span>}
        </section>
       }
       {
        page==1 && <section>
           <input type="text" required {...register("author",{ required: true })}  placeholder="Author"/>
           {errors.author && <span className=''>This field is required</span>}
          <textarea type="text" required {...register("description",{ required: true })} placeholder="description" />
          {errors.description && <span className=''>This field is required</span>}
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