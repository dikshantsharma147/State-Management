import React from "react";
import './contact.css';
export default function COntact(){
    return(
        <div className="whole">
            <div className="header font-bold text-[30px]">Contact us</div>
            <div className="form py-1">
                <div className="full-name">
                    <div className="name">FULL NAME</div>
                    <div className="input-1"><input type="text" placeholder="Enter your name" required/></div>
                </div>
                <div className="phone-email">
                    <div className="phone pr-10">
                        <div className="number">PHONE</div>
                        <div className="input-2"><input type="number" required pattern="{0-9}{10}"/></div>
                    </div>
                    <div className="email">
                        <div className="email-1">EMAIL</div>
                        <div className="input-3"><input type="email" placeholder="Enter your Email" /></div>
                    </div>
                </div>
                <div className="subject">
                    <div className="subject-1">SUBJECT OF THE CONTENT</div>
                    <div><input type="text" placeholder="Subject of the content" /></div>
                </div>
                <div className="address">ADDRESS</div>
                <input type="text" placeholder="Address" required />


                <div className="CC">
                    <div className="count pr-10">
                        <div className="country">Country</div>
                        <input type="text" placeholder="Country Name" required />
                    </div>
                    <div className="city-1">
                        <div className="city">CITY</div>
                        <input type="text" placeholder="Enter Your City" required/>
                    </div>
                </div>
                <div className="PP flex">
                    <div className="ps pr-10">
                        <div className="Province pr-10">PROVINCE</div>
                        <input type="text" placeholder="Enter Province" required/>
                    </div>
                    <div className="city-1">
                        <div className="state">STATE/UT</div>
                        <input type="text" placeholder="Enter your State/UT" required />
                    </div>
                </div>
                <div className="pc">
                    <div className="pci pr-10">
                        <div className="pincode pr-24">PINCODE</div>
                        <input type="text" placeholder="Enter Pincode" required/>
                    </div>
                    <div className="coi">
                        <div  className="ci">CORPORATIVE IDENTITY</div>
                        <input type="text" placeholder="" />
                    </div>
                </div>
                <div className="com">
                <div className="Company">COMPANY</div>
                <input type="text" placeholder="Enter Company" required/>
                </div>
                <div className="design-1">
                <div className="design">DESIGNATION</div>
                <input type="text" placeholder="Enter Designation" required />
                </div>
                <div className="mess">
                <div className="message">WRITE YOUR MESSAGE</div>
                <input type="text" placeholder="Write Message Here...." />
                </div>
            </div>
            <div className="button-1 py-3"><button className="button">Submit</button></div>
        </div>
    );
}