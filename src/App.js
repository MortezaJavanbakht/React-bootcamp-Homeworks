import { useForm } from "react-hook-form";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/reducers/persons/personsReducer";

function App() {
  const dispatch = useDispatch();
  const personList = useSelector((state) => state.person);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(add({ ...data, file: data.file[0].name }));
    console.log(personList);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputContainer">
          <div className="inputBox">
            <label htmlFor="name">نام*</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: true,
                minLength: 4,
                pattern: /^([a-z\u0600-\u06FF]*)$/,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="error">نام بایستی وارد شود</p>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <p className="error">
                نام بایستی فقط شامل حروف انگلیسی و یا فارسی باشد
              </p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p className="error">نام بایستی بیشتر از ۳ حرف داشته باشد</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="email">ایمیل*</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">ایمیل بایستی وارد شود</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error">ایمیل وارد شده معتبر نیست</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="position">موقعیت همکاری*</label>
            <input
              type="text"
              id="position"
              name="position"
              {...register("position", {
                required: true,
              })}
            />
            {errors.position && (
              <p className="error">موقعیت همکاری بایستی وارد شود</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="mobile">شماره تماس*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              {...register("mobile", {
                required: true,
                pattern: /^(\+98|0)?9\d{9}$/,
              })}
            />
            {errors.mobile && errors.mobile.type === "required" && (
              <p className="error">شماره تماس بایستی وارد شود</p>
            )}
            {errors.mobile && errors.mobile.type === "pattern" && (
              <p className="error">شماره تماس وارد شده معتبر نیست</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="file">
              فایل رزومه (با فرمت‌های png، jpg یا pdf)*
            </label>
            <input
              type="file"
              id="file"
              name="file"
              {...register("file", {
                required: true,
                validate: {
                  fileFormat: (value) =>
                    /^.*\.(pdf|png|jpg|jpeg)$/.test(value[0].name),
                },
              })}
            />
            {errors.file && errors.file.type === "required" && (
              <p className="error">فایل بایستی وارد شود</p>
            )}
            {errors.file && errors.file.type === "fileFormat" && (
              <p className="error">فایل وارد شده معتبر نیست</p>
            )}
          </div>
        </div>
        <button type="submit">ارسال درخواست</button>
      </form>
    </div>
  );
}

export default App;
