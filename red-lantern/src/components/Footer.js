import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="text-center text-lg-start bg-light text-muted">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                   Hungry Hub
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Restaurants</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Delivery</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Buy Gift Cards</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Promotions</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">About Hungry Hub</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fa fa-home me-3"></i> San Diego, California</p>
                                <p>
                                    <i class="fa fa-envelope me-3"></i>
                                    info@hungryhub.com
                                </p>
                                <p><i class="fa fa-phone me-3"></i> CALL (619) 123-4567</p>
                                <p><i class="fa fa-print me-3"></i> FAX  (619) 123-5555</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-4" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">HUNGRYHUB.COM</a>
                </div>
            </footer>

        </>
    )
};

export default Footer;

