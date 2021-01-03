import React from 'react';

import {PhoneOutlined, LinkedinOutlined, GithubOutlined, MailOutlined} from '@ant-design/icons';

import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div>
            <div className={s.dima}><PhoneOutlined className={s.Icons} /> +375292951755</div>
            <div className={s.dima}><LinkedinOutlined className={s.Icons} /> <a href="https://www.linkedin.com/in/slava-lobikov-259b981b1/">linkedin</a></div>
            <div className={s.dima}><GithubOutlined className={s.Icons} /> <a href="https://github.com/slavalobikov">slavalobikov</a></div>
            <div className={s.dima}><MailOutlined /> lobikova12@mail.ru</div>
        </div>
    );
};

export default Contacts;