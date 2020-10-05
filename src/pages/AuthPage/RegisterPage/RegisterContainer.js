import RegisterForm from "./RegisterForm";
import {withFormik} from "formik";

import validateForm from "../../../utils/validate/validate";

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: values => ({
        email: "",
        name: "",
        password: "",
        passwordRepeat: ""
    }),
    validate: values => {
        const errors = {};
        validateForm({isAuth: false, errors, values});
        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(RegisterForm);
