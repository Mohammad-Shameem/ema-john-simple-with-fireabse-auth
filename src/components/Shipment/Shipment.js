import React, { useState } from 'react';
import './Shipment.css'

const Shipment = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleCityBlur = event => {
        setCity(event.target.value)
    }
    const handleCreateUser = (event) => {
        event.preventDefault()

    }

    return (
        <div onSubmit={handleCreateUser} className='signup-form'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'> Shipping Information</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="Name">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Name">phone Number</label>
                            <input onBlur={handlePhoneBlur} type="number" name="number" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Name">Your Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" name="Address" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="ctiy">city,Road No</label>
                            <input onBlur={handleCityBlur} type="text" name="city" id="" required />
                        </div>
                        <input className='shipping-submit' type="submit" value="Add Shipping" />
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Shipment;