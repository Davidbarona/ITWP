import {FormattedMessage} from 'react-intl'
import ReactMarkdown from 'react-markdown'
import { Languaje } from '../atoms/Languaje'

import '../../../styles/languaje.scss'

export const Translate = () => {

return (
    <div className="container__language">
        <FormattedMessage id="selection-language" >
            { 
              message => <ReactMarkdown className="selection_languaje">
                {`${message}`}
              </ReactMarkdown>             }
          </FormattedMessage> <Languaje/>

    </div>
)


}