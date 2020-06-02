
import React from 'react';

const Register = () => {
    return (
        <div >
                <div className="row centered-form">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Fill the form below to Register!</h4> <br />
                        <div><h5> Important!</h5></div>
                        <h6><a href="termsAndConditions.php">Read Our Terms and Conditions here!</a></h6>
                    </div>
                    </div>
                    <div className="panel-body">
                    <form role="form">
                            <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                <input type="text" required name="first_name" id="first_name" className="form-control input-sm"
                                    placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                <input type="text" required name="last_name" id="last_name" className="form-control input-sm"
                                    placeholder="Last Name" />
                                </div>
                            </div>
                            </div>

                            <div className="form-group">
                            <input type="Number" required name="phone " className="form-control input-sm" placeholder="Phone Number" />
                            </div>

                            <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
                            </div>

                            <div className="form-group">
                                Gender: 
                                <input type="radio" name="Gender" id="Gender" value="Male" />  Male 
                                <br />
                                <input type="radio"name="Gender" value="Female" /> Female
                                
                            </div>

                            <div className="form-group">
                            What is your level of education: 
                            <input type="radio" name="qualification" className="qualification" value="O Level" />
                            O-Level
                            <input type="radio" name="qualification" className="qualification" value="Undergraduate" /> Under-Graduate  
                            <input type="radio" name="qualification" className="qualification" value="Post Graduate" /> Post-Graduate 

                            </div>

                            <div className="form-group">
                            <input type="text" required name="Occupation" id="occupation" className="form-control input-sm"
                                placeholder="Occupation" />
                            </div>

                            <div className="form-group">
                            <input type="text" required name="address" id="address" className="form-control input-sm"
                                placeholder="Address" />
                            </div>

                            <strong>(To be Completed by Students Only).</strong>
                            <hr />

                            <div className="form-group">
                            <input type="text" name="Name of Institution" className="form-control input-sm"
                                placeholder="Name of Institution" />
                            </div>
                            <div className="form-group">
                            <input type="text" name="Course of Study" className="form-control input-sm" placeholder="Course of Study" />
                            </div>
                            <div className="form-group">
                            <input type="text" name="Faculty/Department" className="form-control input-sm"
                                placeholder="Faculty/Department" />
                            </div>
                            <div className="form-group">
                            <input type="text" name="School Registration Number" className="form-control input-sm"
                                placeholder="School Reg. No" />
                            </div>
                            <div className="form-group">
                            <input type="text" name="Year of Study" className="form-control input-sm" placeholder="Year of Study" />
                            </div>
                            <div className="form-group">
                            <input type="text" name="Possible Year of Graduation" className="form-control input-sm"
                                placeholder="Possible year of Graduation" />
                            </div>

                            <hr />

                            <input type="checkbox" required> The information above is truly mine. </input>
                            <br />
                            <input type="checkbox" required> I have read and understood the terms and conditions guiding the
                                use of Alexander Bernhardt Library as highlighted in the user guide. </input>
                            <br />
                            <input type="checkbox" required> I have agreed to adhere strictly by them. </input>
                            <br />
                            <input type="submit" value="Register" className="btn btn-info btn-block" />
                 </form> 
                    <br /> 
                    <a href="../index.php">Return Home</a>
                    <br /> <br />
                </div>
                </div>
                </div>
            </div>
        

    )
}

export default Register;