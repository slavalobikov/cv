import React from 'react';
import s from './Attainment.module.css'

const Attainment = (props) => {
    return (
        <div>
            <Block {...props} year={2020}
                   textru={'Публикация в репозитории БНТУ работы представленной на\n' +
                   'научной конференции по дисциплине "Электрические\n' +
                   'машины", на тему "Нейронные сети в энергетике, их\n' +
                   'реализация, концепции блокчейна, интернет вещей и больших\n' +
                   'данных"'}
                   texteng={'Publication in the BNTU repository of the work presented at the scientific conference on the discipline "Electrical\n' +
                   'machines ", on the topic" Neural networks in energy, their implementation, blockchain concepts, Internet of things and big data "'}/>

                   <span className={s.two}>
                       <Block {...props} year={2019}
                              textru={'Публикация в репозитории БНТУ работы представленной на\n' +
                              'научной конференции по дисциплине "ТОЭ", на тему "Нейронные сети в медицине"'}
                              texteng={'\n' +
                              'Publication in the BNTU repository of the work presented on \\ n \'+\n' +
                              '                   \'scientific conference on the subject "TOE", on the topic "Neural networks in medicine'}/>


                   </span>

            <span className={s.three}>
                 <Block {...props} year={2019}
                        textru={'Публикация в репозитории БНТУ работы представленной на\n' +
                        'научной конференции по дисциплине "ТОЭ", на тему\n' +
                        '"Альтернативные источники энергии и перспективы их\n' +
                        'развития в РБ"'}
                        texteng={'Publication in the BNTU repository of the work presented at\n' +
                        'scientific conference on the discipline "TOE", on the topic\n' +
                        '"Alternative energy sources and their prospects\n' +
                        'development in Belarus "'}/>
            </span>

                    <span className={s.four}>
                        <Block  {...props} year={2019}
                                textru={'Публикация в репозитории БНТУ работы представленной на\n' +
                                'научной конференции по дисциплине "Электрические\n' +
                                'машины", на тему "Глубокие нейронные сети"\n'}
                                texteng={'\n' +
                                'Publication in the BNTU repository of the work presented at\n' +
                                'scientific conference on the discipline "Electrical\n' +
                                'machines ", on the topic" Deep neural networks "'}/>
                    </span>


        </div>
    );
};

const Block = (props) => {
    return            <div className={s.block}>
        <div className={s.NameandAge}>
            <b>
                {!!props.english && <>Scientific activity</>}
                {!props.english && <>Научная деятельность</>}

            </b>
            <div><b>
                {props.year}
            </b></div>
        </div>
        <div>
            <p className={s.p}>
                {!!props.english && <>{props.texteng}</>}
                {!props.english && <>{props.textru}"
                </>}
            </p>
        </div>
    </div>

}

export default Attainment;