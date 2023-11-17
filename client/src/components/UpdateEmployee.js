import React, { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const UpdateEmployee = () => {
  //Getting ID from url
  const { id } = useParams();

  const navigate = useNavigate();
  //Getting Value of form fields
  //   const [name, setName] = useState();
  //   const [dob, setDob] = useState();
  //   const [gender, setGender] = useState();
  //   const [email, setEmail] = useState();
  //   const [phone, setPhone] = useState();
  //   const [industry, setIndustry] = useState();
  //   const [workingHours, setWorkingHours] = useState();
  //   const [country, setCountry] = useState();
  //   const [isAgree, setIsAgree] = useState();

  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    industry: "",
    workingHours: "",
    country: "",
    isAgree: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employee/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  // Form Updation
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/api/employee/${id}`, data)
      .then((res) => {
        alert("Update successful");
        console.log(res.data);
        navigate("/employee");
      })
      .catch((err) => console.log(err.message));
  };
  //Changing the Date formate
  const formateDate = (Dt) => {
    const originalDate = new Date(Dt);
    const formattedDate = moment(originalDate).format("YYYY-MM-DD");
    return formattedDate;
  };

  return (
    <div className="update">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Employee Data
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleUpdate}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter full name"
                          value={data.name || ""}
                          onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>D.O.B</Form.Label>
                        <Form.Control
                          type="date"
                          value={formateDate(data.dob) || ""}
                          onChange={(e) =>
                            setData({ ...data, dob: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect2"
                      >
                        <Form.Label>Gender</Form.Label>
                        <div className="d-flex gap-5">
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="Male"
                            checked={data.gender === "Male"}
                            onChange={(e) =>
                              setData({ ...data, gender: e.target.value })
                            }
                          />
                          <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="Female"
                            checked={data.gender === "Female"}
                            onChange={(e) =>
                              setData({ ...data, gender: e.target.value })
                            }
                          />
                          <Form.Check
                            type="radio"
                            label="Others"
                            name="gender"
                            value="Others"
                            checked={data.gender === "Others"}
                            onChange={(e) =>
                              setData({ ...data, gender: e.target.value })
                            }
                          />
                        </div>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          value={data.email || ""}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Mobile Number"
                          value={data.phone || ""}
                          onChange={(e) =>
                            setData({ ...data, phone: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect1"
                      >
                        <Form.Label>Industry</Form.Label>
                        <Form.Control
                          as="select"
                          value={data.industry || ""}
                          onChange={(e) =>
                            setData({ ...data, industry: e.target.value })
                          }
                        >
                          <option value="">Select industry</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Banking">Banking</option>
                          <option value="Biotechnology">Biotechnology</option>
                          <option value="Chemical">Chemical</option>
                          <option value="Construction">Construction</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Education">Education</option>
                          <option value="Energy">Energy</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Finance">Finance</option>
                          <option value="Food and Beverage">
                            Food and Beverage
                          </option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Insurance">Insurance</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Media">Media</option>
                          <option value="Mining">Mining</option>
                          <option value="Non-profit">Non-profit</option>
                          <option value="Pharmaceutical">Pharmaceutical</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Retail">Retail</option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Transportation">Transportation</option>
                          <option value="Travel">Travel</option>
                          <option value="Utilities">Utilities</option>
                          <option value="Other">Other</option>
                          <option value="Aerospace">Aerospace</option>
                          <option value="Telecommunications">
                            Telecommunications
                          </option>
                          <option value="Electronics">Electronics</option>
                          <option value="Pharmaceuticals">
                            Pharmaceuticals
                          </option>
                          <option value="Software">Software</option>
                          <option value="Hardware">Hardware</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Education">Education</option>
                          <option value="Research and Development">
                            Research and Development
                          </option>
                          <option value="Textiles">Textiles</option>
                          <option value="Automobile">Automobile</option>
                          <option value="Chemicals">Chemicals</option>
                          <option value="Textiles">Textiles</option>
                          <option value="Utilities">Utilities</option>
                          <option value="Wholesale">Wholesale</option>
                          <option value="Other">Other</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Working Hours</Form.Label>
                        <Form.Control
                          type="time"
                          value={data.workingHours || ""}
                          onChange={(e) =>
                            setData({ ...data, workingHours: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect1"
                      >
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          as="select"
                          value={data.country || ""}
                          onChange={(e) =>
                            setData({ ...data, country: e.target.value })
                          }
                        >
                          <option value="">Select country</option>

                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Antigua and Barbuda">
                            Antigua and Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bosnia and Herzegovina">
                            Bosnia and Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cabo Verde">Cabo Verde</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo (Congo-Brazzaville)">
                            Congo (Congo-Brazzaville)
                          </option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czechia (Czech Republic)">
                            Czechia (Czech Republic)
                          </option>
                          <option value="Democratic Republic of the Congo">
                            Democratic Republic of the Congo
                          </option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor (Timor-Leste)">
                            East Timor (Timor-Leste)
                          </option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>

                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Greece">Greece</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Holy See">Holy See</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Ivory Coast">Ivory Coast</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Kosovo">Kosovo</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Micronesia">Micronesia</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montenegro">Montenegro</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar (formerly Burma)">
                            Myanmar (formerly Burma)
                          </option>
                          <option value="Namibia">Namibia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="North Korea">North Korea</option>
                          <option value="North Macedonia (formerly Macedonia)">
                            North Macedonia (formerly Macedonia)
                          </option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau">Palau</option>
                          <option value="Palestine State">
                            Palestine State
                          </option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Saint Kitts and Nevis">
                            Saint Kitts and Nevis
                          </option>
                          <option value="Saint Lucia">Saint Lucia</option>
                          <option value="Saint Vincent and the Grenadines">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="Samoa">Samoa</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome and Principe">
                            Sao Tome and Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Serbia">Serbia</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Korea">South Korea</option>
                          <option value="South Sudan">South Sudan</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Timor-Leste">Timor-Leste</option>
                          <option value="Togo">Togo</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad and Tobago">
                            Trinidad and Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States of America">
                            United States of America
                          </option>
                          <option value="Uruguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="profilePicture">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type="file" accept="image/*" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlCheckbox1"
                      >
                        <Form.Check
                          type="checkbox"
                          label="I agree to the terms and conditions"
                          checked={Boolean(data.isAgree) === true || ""}
                          onChange={(e) =>
                            setData({ ...data, isAgree: e.target.value })
                          }
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          className="mb-3"
                          variant="primary"
                          type="submit"
                        >
                          Update
                        </Button>
                        <Button variant="danger">Clear</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateEmployee;
