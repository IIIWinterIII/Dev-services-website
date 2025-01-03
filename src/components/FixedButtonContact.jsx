import "../styles/components/FixedButtonContact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FixedButtonContact() {
  return (
    <a className="fixed-contact-button" href="#form">
      <div className="icon-container">
        <FontAwesomeIcon icon={faEnvelope} className="icon-fixed-button" />
      </div>
    </a>
  );
}

export default FixedButtonContact;
