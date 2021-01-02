import React, {useState} from 'react';
import {connect} from "react-redux";

import App from "../App";

const Language = (props) => {


    const [engish, isEnglish] = useState(true)

    return (
        <App english={engish} isEnglish={isEnglish} {...props} />
    );
};

let mapStateToProps = (state) => ( {
    bioEng: state.LangReducer.bioEng,
    bioRu: state.LangReducer.bioRu,
    nameEng: state.LangReducer.nameEng,
    nameRu: state.LangReducer.nameRu,
});

export default connect(mapStateToProps)(Language);