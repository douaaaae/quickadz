import './Foote.css';
import logo from '../images/adz-removebg-preview.png';
export default function Footer() {
  return (
    <div className='foot'>
        <div className="container2">
        <div className="row2">
            <h4 className='h6'>Service</h4>
            <p >Legal Notice</p>
            <p >Data Protection</p>
        </div>
        <div className="row2">
        <h4 className='h6'>Newsletter</h4>
        <p >Enter email adress</p>
        <p >Sign Up</p>
        </div>
        <div className="row2">
            <img src={logo} className='img' alt="" />
        </div>
        <div className="row2"> 
           <h4 className='h6'>Connect</h4>
           <a href="">Instagram</a><br /><br />
           <a href="">FaceBook</a>      
         </div>
         <div className="row2"> 
           <h4 className='h6'>Inquiries</h4> 
           <p >douae@gmail.com</p>
           <p >hajar@gmail.com</p>      
         </div>        
        </div>
    </div>
  )
}
