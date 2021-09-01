import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
      name: '',
      email: '',
      contact: '',
      message: ''
    });
  
  const formSubmit = (e) => {
    e.preventDefault();
          alert(`name: ${data.name}
    email: ${data.email}
    mobile no: ${data.contact}
    message: ${data.message}`);
  };

  const Input_Event = (event) => {
    const {name, value} = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  };

  return (<>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="your name" 
                name="name"
                value={data.name}
                onChange={Input_Event}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleFormControlInput2" 
                placeholder="your email" 
                name="email"
                value={data.email}
                onChange={Input_Event}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput3" className="form-label">Contact</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput3" 
                placeholder="your mobile number" 
                name="contact"
                value={data.contact}
                onChange={Input_Event}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="message"
                value={data.message}
                onChange={Input_Event}                
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </>);
};

export default Contact;