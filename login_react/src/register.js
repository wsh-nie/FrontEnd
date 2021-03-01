import React from 'react';
import './index.css';

class Register extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email:"",
            phoneNumber:"",
            password:"",
        }
    }

    handleSubmit = (event) => {
        console.log(event);
    }

    nameChange = (event) => {

    }

    emailChange = (event) =>{
        this.setState({
            email:event.target.value,
        })
    }

    passwordChange = (event) => {
        this.setState({
            password:event.target.value,
        })
    }

    confirmPassword = (event) => {

    }

    handleClick = (event) => {
        alert("Email : "+this.state.email + " Password: " + this.state.password);
    }

    render(){
        return (
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Join Us.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={this.handleSubmit}>
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Name</label>
                                <input type="text"  placeholder="John Smith" onChange={this.nameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                </input>
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Email</label>
                                <input type="email" placeholder="your@email.com"onChange={this.emailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                </input>
                            </div>
            
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Password</label>
                                <input type="password"  placeholder="Password" onChange={this.passwordChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                </input>
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Confirm Password</label>
                                <input type="password" placeholder="Password" onChange={this.confirmPassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                </input>
                            </div>
            
                            <input type="submit" value="Register" onClick = {this.handleClick} className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account? <a href="#" className="underline font-semibold">Log in here.</a></p>
                        </div>
                    </div>

                </div>

                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt = "a img"></img>
                </div>
            </div>
            
        )
    }
}

export default Register;
