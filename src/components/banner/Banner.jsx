import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/layouts/banner.png'


function Banner(props) {
    return (
        <section className="banner">
                <div className="shape right"></div>
                <div className="container big">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    <h2 className="heading">Your Journey <br />
                                        to <span className="mb-5 s1 arlo_tm_animation_text_word" style={{ background: "linear-gradient(264.28deg, #0087e8 -38.2%, #0087e8 103.12%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Wellness</span> <br />
                                        Begins Here</h2>
                                    <p className="desc">Experience limitless well-being through our innovative Oral Dissolving Films (ODF) solutions, designed for ease and effectiveness.</p>
                                    {/* <Link className="action-btn"><span>Get Connected</span></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">

                            <div className="banner__right">
                                <div className="image">
                                    <img src={img1} alt="LimitLess" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner;