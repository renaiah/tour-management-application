import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CommanSection from '../shared/CommanSection';
import TourCard from '../shared/TourCard';
import { useLocation } from 'react-router-dom';
import NewsLetter from '../shared/NewsLetter';

const SearchResultsList = () => {
    const location = useLocation();
    const [data] = useState(location.state);

    return (
        <>
            <CommanSection title={"Tour Search Result"} />
            <section>
                <Container>
                    <Row>
                        {data.length === 0 ? (
                            <h4 className="text-center">No tour found</h4>
                        ) : (
                            data?.map(tour => (
                                <Col lg='3' className='mb-4' key={tour._id}>
                                    <TourCard tour={tour} />
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </section>
            <NewsLetter />
        </>
    );
};

export default SearchResultsList;
