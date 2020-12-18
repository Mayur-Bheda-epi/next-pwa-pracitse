import React from "react";

export default function about() {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title-black">
              <h2>ABOUT</h2>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="about-paragraph">
                <p>
                  “DAP” is a pan India, collaborative initiative to create
                  Financial Entrepreneurs for the mutual fund industry. Indian
                  Mutual Fund industry is amongst the fastest growing sectors of
                  Banking, Financial Services & Insurance (BFSI), with Assets
                  Under Management (AUM) of over INR 27 lakh crores as of 30th
                  Sep 2020 (more than 3.5X increase in 10 years). There is
                  enormous opportunity for potential entrepreneurs to
                  participate in the growth story of the Industry.
                </p>
                <p>
                  To enable this, the top Mutual Fund Companies; ICICI
                  Prudential Mutual Fund, L&T Mutual Fund, SBI Mutual Fund, Axis
                  Mutual Fund, Aditya Birla Mutual Fund, UTI Mutual Fund,
                  Sundaram Mutual Fund and Nippon India Mutual Fund have
                  collaborated with CIEL (Centre for Investment Education and
                  Learning) to create a unique 360 degree MF ready platform to
                  provide end to end services of on boarding, training and
                  scaling up the business of potential new to industry financial
                  entrepreneurs.
                </p>
                <p>
                  CIEL is a leading skilling and capacity building organization
                  with more than 300,000 learners across its certifications,
                  executive development programs, investor awareness and
                  capacity building initiatives
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div data-aos="flip-right">
                {" "}
                <img
                  src="images/HomePage/AboutDap.png"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits section-padding" id="benefits">
        <div className="container">
          <div className="row">
            <div className="section-title-black">
              <h2>BENEFITS</h2>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="benefits-box">
                <div className="benefits-icon">
                  <img
                    src="images/HomePage/benefitIcon1.png"
                    className="img-responsive"
                  />
                </div>
                <h2 className="benefits-title">SCOPE IN MF DISTRIBUTION</h2>
              </div>
              <div className="benefits-box">
                <div className="benefits-icon">
                  <img
                    src="images/HomePage/benefitIcon2.png"
                    className="img-responsive"
                  />
                </div>
                <h2 className="benefits-title">FLEXIBLE WORK ENVIRNOMENT</h2>
              </div>
              <div className="benefits-box">
                <div className="benefits-icon">
                  <img
                    src="images/HomePage/benefitIcon3.png"
                    className="img-responsive"
                  />
                </div>
                <h2 className="benefits-title">SUPPORT & HANDHOLDING</h2>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-xs-12">
              <div data-aos="flip-right">
                {" "}
                <img
                  src="images/HomePage/benefitsPoints.png"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="processFlow section-padding" id="processflow">
        <div className="container">
          <div className="row">
            <div className="section-title-black">
              <h2>DAP PROCESS & STEPS INVOLVED</h2>
              <p className="text-center">
                Ready to Fly??? Follow the Three Simple Steps:
              </p>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div data-aos="flip-right">
                {" "}
                <img
                  src="images/HomePage/ProcessFlowDAP.png"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="section-title-black">
              <h2>TESTIMONIALS</h2>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>

      <section className="video section-padding" id="videos">
        <div className="container">
          <div className="row">
            <div className="section-title-black">
              <h2>VIDEOS</h2>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <video
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov"
                    controls
                  ></video>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <video
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov"
                    controls
                  ></video>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <video
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov"
                    controls
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="referral section-padding" id="referralprogram">
        <div className="container">
          <div className="row">
            <div className="section-title-white">
              <h2>REFERRAL PROGRAM</h2>
            </div>

            <div className="col-md-7 col-sm-7 col-xs-12">
              <p>
                Participate and build a community of like-minded aspirational
                financial entrepreneurs. Help others in the journey towards
                financial entrepreneurship
              </p>
              <ul>
                <li>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>
                    Share registration link with the potential candidate
                  </span>
                </li>
                <li>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>Help them register for the “DAP”</span>
                </li>
                <li>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>
                    Earn referral fees when the candidate clears the NISM
                    examination
                  </span>
                </li>
              </ul>
              <div className="referral-button">
                <button type="button" className="share-btn">
                  {" "}
                  <i
                    className="fa fa-share-alt-square"
                    aria-hidden="true"
                  ></i>{" "}
                  Link to Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
