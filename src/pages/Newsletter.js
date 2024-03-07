import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://course-api.com/react-tours-project"; //Api error

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await axios.get(newsletterUrl, data); // to fake the success state cuz the newsletter api is on error
        toast.success("Login successfully, check your email");
        return redirect("/");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

function Newsletter() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    console.log(navigation);

    return (
        <Form className="form" method="POST">
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
                Our newsletter
            </h4>
            {/* Last name */}
            <div className="form-row">
                <label htmlFor="lastName" className="form-label">
                    Last name
                </label>
                <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                />
            </div>

            {/* First name */}
            <div className="form-row">
                <label htmlFor="firstName" className="form-label">
                    First name
                </label>
                <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                />
            </div>

            {/* Email */}
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="test@test.com"
                />
            </div>
            <button disabled={isSubmitting} className="btn btn-block">
                {isSubmitting ? "submitting" : "submit"}
            </button>
        </Form>
    );
}

export default Newsletter;
