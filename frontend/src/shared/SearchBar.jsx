import React, { useRef } from 'react';
import './SearchBar.css';
import { Col, FormGroup } from 'react-bootstrap';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineGroups2 } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async (e) => {
        e.preventDefault();

        const location = locationRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || maxGroupSize === "") {
            return alert("All fields are required!");
        }

        try {
            const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}`);
            if (!res.ok) throw new Error("Something went wrong");

            const result = await res.json();

            navigate(`/tours/search?city=${location}&maxGroupSize=${maxGroupSize}`, { state: result.data });

            } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <form className="d-flex align-items-center gap-5 ms-5" onSubmit={searchHandler}>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><CiLocationOn /></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last gap-5">
                        <span><MdOutlineGroups2 /></span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <button className="search__icon" type='submit'>
                        <CiSearch />
                    </button>
                </form>
            </div>
        </Col>
    );
}

export default SearchBar;
