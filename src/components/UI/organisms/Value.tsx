import "../../../styles/value.scss";

import { ValueTitle } from "../atoms/ValueTitle";
import { Button } from "../atoms/Button";
import { FormattedMessage } from "react-intl";

import ecommerce from "../../../assets/img/Imagen_Home.png";
import ReactMarkdown from "react-markdown";

export const Value = () => {
  return (
    <div className="value-proposal">
      <div className="container value-proposal__container">
        <div className="value-proposal__copy">
          <ValueTitle />
          <FormattedMessage id="value-partner">
            {(message) => (
              <ReactMarkdown className="value-proposal__paragraph">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <div className="value-proposal__button-group">
            <FormattedMessage id="value-button-know">
              {(message: any) => (
                <Button
                  text={message}
                  href="https://api.whatsapp.com/send?phone=573208856037&amp;text=Quiero%20conocer%20m%C3%A1s%20sobre%20ITGlobers"
                  light={false}
                ></Button>
              )}
            </FormattedMessage>

            <FormattedMessage id="value-button-talk">
              {(message: any) => (
                <Button
                  text={message}
                  href="https://api.whatsapp.com/send?phone=573208856037&amp;text=Me%20interesa%20charlar%20sobre%20sus%20servicios."
                  light={true}
                ></Button>
              )}
            </FormattedMessage>
          </div>
        </div>
      </div>
      <div className="value-proposal__picture">
        <img
          src={ecommerce}
          alt="Ilustración que muestra los servicios de ITGlobers como B2C, B2B, marketplaces, integraciones, evolutivos y capacitaciones"
          width="960"
          height="690"
          loading="lazy"
        />
      </div>
    </div>
  );
};
