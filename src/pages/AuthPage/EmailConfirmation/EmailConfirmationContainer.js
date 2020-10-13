import React from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import EmailConfirmation from "./EmailConfirmation";

//TODO: create component versions for following cases:
//1.Some server error, user was created, but email wasn't sent
//2.Successful registration, awaiting for email to be sent
//3.Confirmation submit through email, awaiting server response
//4. Confirmation reject through email, giving options either reject or submit (=>3)
//5. Reject awaiting confirmation from the server
//6. Successful reject, user profile was deleted
//7. Notify that confirmation wasn't passed, ask for options (reject => 5 or submit => 2) [при переходе из Логина]

//TODO: wrap container with connect function

const EmailConfirmationContainer = (props) => {

    const hash = props.match.query.hash;

    return (
        <EmailConfirmation initial={props.initial} option={props.option}/>
    );
}


export default compose(withRouter)(EmailConfirmationContainer);