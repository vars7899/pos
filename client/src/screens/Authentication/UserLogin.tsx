import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import * as Types from "../../global/types";
import * as DefaultData from "../../global/defaultData";
import * as Components from "../../components";
import * as Layout from "../../layouts";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import * as Functions from "../../functions";
import * as AuthActions from "../../redux/feature/authSlice";
import { toast } from "react-toastify";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, isError, message } = useSelector((state: any) => state.auth);
  const [formData, setFormData] = useState<Types.UserLoginData>(DefaultData.UserLoginData);

  function $updateFormData(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function $handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.dark("Missing one or more required field(s), Please try again");
      return;
    }
    if (!Functions.validateEmail(email)) {
      toast.dark("Invalid email syntax, it seems that email is not valid, Please try again");
      return;
    }
    dispatch(AuthActions.LOGIN_USER(formData));
  }

  // side effect
  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard/home");
      dispatch(AuthActions.RESET_AUTH_FLAGS());
    }
    if (isError) {
      toast(`OOPS!!!, Something went wrong, ${message}`);
      dispatch(AuthActions.CLEAR_AUTH_ERROR());
    }
  }, [navigate, dispatch, isSuccess, isError]);

  return (
    <Layout.AuthLayout type="login">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        className="px-14 bg-white backdrop-blur-3xl"
      >
        <Components.Brand.BrandLogo
          IconSize={24}
          textSize="text-2xl"
          color="text-zinc-950"
          className="flex justify-center items-center pb-6 mb-10 border-b-[1px] pt-10 w-[100%]"
        />
        <div className="mt-16 mb-12 font-beVietnam">
          <p className="mt-16 text-6xl font-semibold mb-2">Welcome Back</p>
          <p className="text-zinc-600">In order to access your dashboard, you will need to enter your credential</p>
        </div>
        <Components.Auth.LoginForm
          formData={formData}
          $updateFormData={$updateFormData}
          $handleSubmit={$handleSubmit}
        />
      </motion.div>
    </Layout.AuthLayout>
  );
};

export default UserLogin;
