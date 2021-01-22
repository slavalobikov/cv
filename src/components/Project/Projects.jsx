import React from 'react';
import {ShoppingCartOutlined, OrderedListOutlined, GlobalOutlined, GithubOutlined} from '@ant-design/icons';


import s from './Projects.module.css';
import forecast from './2667017.svg';


const Projects = (props) => {
    return (
        <div>
            <div className={s.title}>
                <h1>Проекты</h1>
            </div>
            <div>
                <div className={s.flex}>
                    <div><a href="https://github.com/slavalobikov/weather">
                        {!!props.english && <span>Weather</span>}
                        {!props.english && <span>Погода</span>}
                    </a></div>
                    <div><a href="https://slavalobikov.github.io/weather/">
                        deploy: <img className={s.imgLogo} src={forecast} alt="forecast"/>
                    </a></div>
                </div>
                <hr/>
                <div className={s.flex}>
                    <div><a href="https://github.com/slavalobikov/aleg">
                        {!!props.english && <span>Shop</span>}
                        {!props.english && <span>Магазин</span>}
                    </a></div>
                    <div ><a className={s.deploy} href="https://slavalobikov.github.io/aleg/#/">
                        <div className={s.right}>deploy:</div>
                        <div><ShoppingCartOutlined className={s.logo} /></div>
                    </a></div>
                </div>
                <hr/>
                <div className={s.flex}>
                    <div><a href="https://github.com/slavalobikov/to-do">
                        {!!props.english && <span>Тo-do</span>}
                        {!props.english && <span>Список дел</span>}
                    </a></div>
                    <div ><a className={s.deploy} href="https://slavalobikov.github.io/to-do/">
                        <div className={s.right}>deploy:</div>
                        <div>
                            <OrderedListOutlined className={s.logo} />
                            </div>
                    </a></div>
                </div>
                <hr/>
                <div className={s.flex}>
                    <div><a href="https://github.com/slavalobikov/socialweb">
                        {!!props.english && <span>Social-web</span>}
                        {!props.english && <span>Социальная сеть</span>}
                    </a></div>
                    <div ><a className={s.deploy} href="https://slavalobikov.github.io/socialweb/">
                        <div className={s.right}>deploy:</div>
                        <div>
                            <GlobalOutlined className={s.logo} />
                            </div>
                    </a></div>
                </div>
                <hr/>
                <div className={s.flex}>
                    <div><a href="https://github.com/slavalobikov">
                        {!!props.english && <span>See other projekts on github</span>}
                        {!props.english && <span>Другие прокеты смотрите на github</span>}
                    </a></div>
                    <div ><a className={s.deploy} href="https://github.com/slavalobikov/">
                        <div>
                            <GithubOutlined className={s.logo} />
                        </div>
                    </a></div>
                </div>

                <hr/>
            </div>
        </div>
    );
};

export default Projects;