import React from 'react'
import './Below.css'

import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Button from '../button/Button';
import { IoMdMail } from "react-icons/io";



const Below = () => {
   function btn(events){
    events.preventDefault();
    console.log("Name:",events.target[0].value)
    console.log("E-Mail:",events.target[1].value)
    console.log("Text:",events.target[2].value) 
   }

   function handleClick(){
    alert("Chat to vo karti thi ;)")
   }
   function handleClick1(){
    alert("Uthata nhi mai phone aur mai karta nhi hu call back ")
   }
   function handleClick2(){
    alert("Mail hack ho gya")
   }
  return (
    <div className='frame'>
        <div >
            <div className="butt">
                <Button say={handleClick}   text="VIA SUPPORT CHAT" img={<MdOutlineMessage fontSize="24px"/>}/>
                <Button say={handleClick1} text="VIA CALL" img={<IoIosCall fontSize="24px"/>}/>
                
            </div>
            <div>
                <Button say={handleClick2}  text="VIA EMAIL FORM" img={<IoMdMail fontSize="24px"/>} style={{border:"2px solid black",color:"black" ,backgroundColor:"white",width:"492px"}}/>
            </div>

            <div className='form'>
                <form onSubmit={btn}>
                    <div className='field'>
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                    </div>
                    <div className='field'>
                    <label htmlFor="">E-Mail</label>
                    <input type="text"/>
                    </div>
                    <div className='field'>
                    <label htmlFor="">Text</label>
                    <textarea  type="text" rows={8}/>
                    </div>
                    <Button text="SUBMIT" style={{marginLeft:"250px",marginTop:"30px"}} />

                </form>

            </div>


        </div>

        <div>
            <img src="./images/symbol.jpg" alt="" className='imglady' />
        </div>


      
    </div>
  )
}

export default Below
