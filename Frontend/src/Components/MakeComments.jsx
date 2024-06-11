import { useState, useRef, useEffect } from "react";
import Action from "./Action";


const MakeComments = () => {
  return (

    <div className="comment-box">
      <p>
        To leave a comment on our plant blog.
        <br></br>
        <br></br>You'll find a comment section where you can share your thoughts, ask questions, or provide additional insights.
        <br></br>Just enter your name, email address, and type your comment in the provided field.
        <br></br>When you're ready, click the "Submit" button to post your comment.
        <br></br>We look forward to hearing from you and engaging in a lively discussion about our shared love for plants!
      </p>
           <label>
     <input name="myInput" className="comment"/>
      </label>
      <br></br> <button className="comment-btn">Submit</button>
          
        </div>
    )
}

export default MakeComments
 


