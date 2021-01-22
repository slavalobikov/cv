import React from 'react';
import ava from './../img/img.png'

import s from './About.module.css'

const About = (props) => {


    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.mainAva}>
                    <img className={s.ava} src={ava} alt="my-ava"/>
                </div>
                <div className={s.name}>
                    <b className={s.nameB}>
                        {!!props.english && <span>{props.nameEng}</span>}
                        {!props.english && <span>{props.nameRu}</span>}
                        </b>
                    <div className={s.aboutMe}>
                        <p className={s.p}>
                            {!!props.english && <span>{props.bioEng}</span>}
                            {!props.english && <span>{props.bioRu}</span>}
                        </p></div>
                </div>

        </div>
            <div className={s.con}>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Date of Birth:</>}
                        {!props.english && <>Дата рождения:</>}
                    </span>
                    <span><b>5/2/2000</b></span>
                </div>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Place of Birth:</>}
                        {!props.english && <>Место рождения:</>}
                    </span> <span><b>
                    {!!props.english && <>Republic of Belarus</>}
                    {!props.english && <>Республика Беларусь</>}
                     </b></span>
                </div>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Nationality:</>}
                        {!props.english && <>Национальность:</>}
                        </span> <span><b>
                        {!!props.english && <>Belarus</>}
                        {!props.english && <>Беларус</>}
                     </b></span>
                </div>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Marital status:</>}
                        {!props.english && <>Семейное положение:</>}
                        </span> <span><b>
                        {!!props.english && <>not married </>}
                        {!props.english && <>не женат</>}
                    </b></span>
                </div>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Gender:</>}
                        {!props.english && <>Пол:</>}
                        </span> <span><b>
                        {!!props.english && <>male</>}
                        {!props.english && <>мужской</>}
                     </b></span>
                </div>
                <div className={s.liElement}>
                    <span className={s.li}>
                        {!!props.english && <>Millitary service:</>}
                        {!props.english && <>Служба в армии:</>}
                        </span> <span><b>
                        {!!props.english && <>unfit</>}
                        {!props.english && <>не годен</>}
                     </b></span>
                </div>
            </div>
        </div>
    );
};

export default About;