import React from "react";
import "./footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <div className="footer-links">
          <Row>
            <Col xs={12} sm={12} md={6} lg={3}>
              <h5>India</h5>
              <p className="address lh-base">
                308, Devarc Mall, Iscon Cross Road, Sarkhej - Gandhinagar
                Highway, Ramdev Nagar, Ahmedabad, Gujarat 380015
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className="d-lg-none d-block lets-connect-mobile-view"
            >
              <h5>Let's Connect</h5>
              <nav>
                <ul>
                  <li>sales@axiontechnolabs.com</li>
                  <li>+91 91578 24267 (Sales)</li>
                  <li>+91 73836 26803 (HR)</li>
                </ul>
              </nav>
            </Col>

            <Col xs={6} sm={12} md={6} lg={2}>
              <h5>Services</h5>
              <nav>
                <ul>
                  <li>Custom Software Development</li>
                  <li>Mobile App Development</li>
                  <li>Web Development</li>
                  <li>eCommerce Development</li>
                  <li>Data Analytics</li>
                  <li>UI/UX Design</li>
                  <li>PWA (Progressive Web Apps)</li>
                </ul>
              </nav>
            </Col>

            <Col xs={6} sm={12} md={6} lg={2}>
              <h5>Industries</h5>
              <nav>
                <ul>
                  <li>Travel & Hospitality</li>
                  <li>Entertainment</li>
                  <li>Education</li>
                  <li>Retail</li>
                  <li>Healthcare</li>
                </ul>
              </nav>
            </Col>

            <Col xs={6} sm={12} md={6} lg={2}>
              <h5>Company</h5>
              <nav>
                <ul>
                  <li>Who we are</li>
                  <li>Our Process</li>
                  <li>Leadership Team</li>
                  <li>Career</li>
                  <li>Life@Axion Technolabs</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </nav>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className="d-none d-lg-block lets-connect-desktop-view"
            >
              <h5>Let's Connect</h5>
              <nav>
                <ul>
                  <li>sales@axiontechnolabs.com</li>
                  <li>+91 91578 24267 (Sales)</li>
                  <li>+91 73836 26803 (HR)</li>
                </ul>
              </nav>
            </Col>

            <Col
              xs={6}
              sm={12}
              md={6}
              lg={3}
              className="our-solution-mobile-view"
            >
              <h5 className="d-lg-none d-block">Our Solutions</h5>
              <nav className="d-lg-none d-block">
                <ul>
                  <li>WhatsApp Business</li>
                  <li>SY Food Delivery</li>
                  <li>Toy Up</li>
                </ul>
              </nav>
            </Col>

            <Col xs={12} lg={6}>
              <h5>Technologies</h5>
              <nav>
                <ul className="tech-columns">
                  <li>React JS</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PHP</li>

                  <li>iOS</li>
                  <li>Android</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>WooCommerce</li>
                  <li>Shopify</li>
                  <li>Magento</li>
                  <li>WordPress</li>

                  <li>Strapi</li>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                  <li>Power BI</li>
                  <li>Tableau</li>
                  <li>Google Looker Studio</li>
                  <li>BigQuery</li>
                  <li>Azure Synapse</li>
                  <li>Azure Data Factory</li>
                </ul>
              </nav>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className="d-none d-lg-block our-solution-desktop-view"
            >
              <h5>Our Solutions</h5>
              <nav>
                <ul>
                  <li>WhatsApp Business</li>
                  <li>SY Food Delivery</li>
                  <li>Toy Up</li>
                </ul>
              </nav>
            </Col>
          </Row>
        </div>

        <div className="row-gap-3 d-flex flex-wrap justify-content-between mt-4">
          <div className="d-flex gap-4">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                height="40"
              />
            </div>
            <div>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                height="40"
              />
            </div>
          </div>
          <div className="d-flex gap-2">
            <i className="social-icons fa-brands fa-linkedin-in fa-lg"></i>
            <i className="social-icons fa-brands fa-instagram fa-lg"></i>
            <i className="social-icons fa-brands fa-facebook-f fa-lg"></i>
            <i className="social-icons fa-brands fa-x-twitter fa-lg"></i>
            <i className="social-icons fa-brands fa-pinterest-p fa-lg"></i>
          </div>
        </div>

        <hr />

        <Row className="footer-policy justify-content-between align-items-center">
          <Col md={4} className="d-flex align-items-center">
            <span>© 2021 Company, Inc</span>
          </Col>
          <Col md={4} as="ul" className="nav justify-content-end  d-flex gap-4">
            <li className="ms-3">Privacy Policy</li>
            <li className="ms-3">Site Map</li>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
