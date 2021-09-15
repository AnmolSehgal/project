import InputComponent from "../InputComponent";
import { formType } from "../../utils/constants/appConstant";
import signin from "../../icons/auth/signin.svg";
import signup from "../../icons/auth/signup.svg";
import ButtonLoaderComponent from "../ButtonLoaderComponent";

interface InputComponentProps {
  type: string;
  name?: string;
  changeName?: (val: string) => void;
  email: string;
  changeEmail: (val: string) => void;
  password: string;
  changePassword: (val: string) => void;
  confirmPassword?: string;
  changeConfirmPassword?: (val: string) => void;
  onClick?: () => void;
  disabled: boolean;
}

const FormComponent = ({
  type,
  changeEmail,
  changeConfirmPassword,
  changePassword,
  changeName,
  name,
  email,
  password,
  confirmPassword,
  onClick,
  disabled,
}: InputComponentProps) => {
  return (
    <div className="flex flex-row justify-center items-center my-6 ">
      <div className="flex flex-row w-2/3 justify-center">
        <div className=" md:flex md:w-2/3 md:justify-center md:items-center hidden p-3">
          <img
            src={type === formType.signIn ? signin : signup}
            alt="Sign in"
            className="h-96 m-2"
          />
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="flex flex-col py-3 px-5 w-11/12 md:w-96 border rounded-xl shadow-md bg-white"
        >
          <div className="flex flex-row justify-center text-3xl mb-3 border-b py-1 w-full min-h-16">
            <span className="text-gray-700">
              {type === formType.signIn ? "SignIn" : "Sign Up"}
            </span>
          </div>
          {type === formType.signUp && changeName ? (
            <InputComponent
              label="Full Name"
              onChange={changeName}
              inputVal={name as string}
            />
          ) : (
            ""
          )}
          <InputComponent
            label="Email"
            onChange={changeEmail}
            inputVal={email}
          />
          <InputComponent
            label="Password"
            inputType="password"
            onChange={changePassword}
            inputVal={password}
          />
          {type === formType.signUp && changeConfirmPassword ? (
            <InputComponent
              label="Confirm Password"
              inputType="password"
              onChange={changeConfirmPassword}
              inputVal={confirmPassword as string}
            />
          ) : (
            ""
          )}
          <div className="flex flex-row justify-center">
            <ButtonLoaderComponent
              disabled={disabled}
              btnLabel="Submit"
              className=" border text-froly border-froly rounded-xl m-2 text-lg px-2 hover:bg-froly hover:text-white my-3 w-32 h-10 "
              handleOnClick={
                onClick
                  ? () => {
                      onClick();
                    }
                  : () => {}
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
