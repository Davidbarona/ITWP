import { headerSpanish } from "./es/template/header";
import { headerEnglish } from "./en/template/header";
import { firsSeccion} from "./es/template/firstSeccion"
import { secondSeccion} from "./es/template/secondSeccion"
import { thirdSeccion} from "./es/template/thirdSeccion"
import { fourthSeccion} from "./es/template/fourthSeccion"
import { firsSeccionEn} from "./en/template/firstSeccion"
import { secondSeccionEn} from "./en/template/secondSeccion"
import { thirdSeccionEn} from "./en/template/thirdSeccion"
import { fourthSeccionEn} from "./en/template/fourthSeccion"

export const allmessages = {
    'es': {
        ...headerSpanish,
        //First section spanish 
        ...firsSeccion,
        //second section spanish
        ...secondSeccion,
        //third section spanish
        ...thirdSeccion,
        //fourth section spanish
        ...fourthSeccion
    },
    "en":{
        ...headerEnglish,
        //First section english
        ...firsSeccionEn,       
        //second section english
        ...secondSeccionEn,
         //third section english
        ...thirdSeccionEn,
        //fourth section 
        ...fourthSeccionEn
    }
}