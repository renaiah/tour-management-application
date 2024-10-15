import React from 'react';
import './Tours.css';
import { useState, useEffect } from 'react';
import CommanSection from '../shared/CommanSection';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import NewsLetter from '../shared/NewsLetter';
import { Container, Row, Col } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommanSection title="All Tours" />
      <section>
        <div className="container">
          <div className="row">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="pt-0">
        <Container>
          {loading && (
            <div className="loading-spinner">
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
          {error && <h4 className="text-center text-danger fs-5 pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" md="6" sm="6" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
}

export default Tours;



