import React from "react";
import { Link } from "react-router-dom";

function Min() {
    return (
        <div className="man">
            <div>
                <p className="p">
                    The full form of UPSC is 
                    <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer">
                        Union Public Service Commission
                    </a>.
                    One of the most competitive and prestigious exams, civil services, is conducted by the UPSC, India’s major regulating body.
                </p>

                <h2>History</h2>
                <p className="p">
                    The British East India Company introduced the concept of a Civil Service exam in 1854...
                </p>

                <h1>What are the Functions of UPSC?</h1>
                <h2>The functions of the UPSC under Article 320 of the Constitution include the following:</h2>

                <ul className="p">
                    <li>Framing and amendment of the Recruitment Rules for services and posts under the Government.</li>
                    <li>Managing disciplinary cases related to different Civil Services or officers.</li>
                    <li>Conducting recruitment examinations for appointment to the services of the Union.</li>
                    <li>Direct recruitment of aspirants by selection through interviews.</li>
                    <li>Appointment of officers in the cadre on promotion/deputation/absorption.</li>
                    <li>Advising the Government on any matter assigned to the Commission by the President of India.</li>
                </ul>

                <h2>Examinations Conducted by UPSC</h2>
                <ul className="p">
                    <li>National Defence Academy and Naval Academy Examination (NDA)</li>
                    <li>Indian Statistical Service Examination (ISS)</li>
                    <li>Indian Economic Service Examination (IES)</li>
                    <li>Indian Forest Service Examination (IFS)</li>
                    <li>Indian Civil Services Examination (ICSE) for recruitment to IAS, IPS, IRS, etc.</li>
                </ul>
            </div>
        </div>
    );
}

export default Min;