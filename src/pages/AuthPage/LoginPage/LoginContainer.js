import LoginForm from "./LoginForm";
import {withFormik} from "formik";

import validateForm from "../../../utils/validate/validate";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: values => ({email: "", password: ""}),
    validate: values => {
        const errors = {};
        validateForm({isAuth: true, errors, values});
        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(LoginForm);