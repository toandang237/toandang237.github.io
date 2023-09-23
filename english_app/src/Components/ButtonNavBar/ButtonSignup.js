/** @format */
import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import {
  HiddenSignup,
  ShowLogin,
  ShowSignup,
} from "../../Creators/LoginSignUpCreator";
import { useDispatch, useSelector } from "react-redux";
import { IsLoading } from "../../Creators/LoadingCreator";

export default function ButtonSignup() {
  const [visible, setVisible] = React.useState(true);
  const IsShow = useSelector((state) => state.showSignup.show);
  const dispatch = useDispatch();

  const sDay = [];
  const sMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "September",
  ];
  const sYear = [];

  // Year
  for (var i = new Date().getFullYear(); i >= 1849; i--) {
    sYear.push(i);
  }

  // Day
  for (var i = 1; i <= 31; i++) {
    sDay.push(i);
  }

  const [day, setDay] = React.useState("-1");
  const [month, setMonth] = React.useState("-1");
  const [year, setyear] = React.useState("-1");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (IsShow) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [IsShow]);
  const changeLogin = () => {
    dispatch(HiddenSignup());
    dispatch(ShowLogin());
  };
  const toggleDialog = () => {
    setVisible(!visible);
    if (visible) {
      dispatch(HiddenSignup());
    } else {
      dispatch(ShowSignup());
    }
  };
  const signUp = async () => {
    dispatch(IsLoading());
    // var day_of_birth =
    var form = new FormData();
    form.append();
  };
  return (
    <div className="RightNavigationItem">
      <button
        className="AssemblyButtonBase AssemblyPrimaryButton--upgrade AssemblyButtonBase--medium AssemblyButtonBase--padding"
        onClick={toggleDialog}
      >
        <span>Sign up</span>
      </button>
      {visible && (
        <Dialog
          title={"--"}
          onClose={toggleDialog}
          width={"100%"}
          height={"100%"}
          className="ReactModal__Content ReactModal__Content--after-open mnlifen oxppdgq l6ngt95 f1clqjtf"
        >
          <section className="cvsxyiq">
            <div className="s39xzt5">
              <h1
                className="i1dxxsrk h134kyhk"
                style={{
                  "--i1dxxsrk-1": "18.75rem;",
                  "--i1dxxsrk-3": "15.625rem;",
                }}
              >
                Smash sets in your sweats.
              </h1>
              <div className="s1oaxobu">
                <div className="SiteLogo">
                  <svg
                    data-testid="FullLogo"
                    fill="currentColor"
                    viewBox="0 0 86 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M33.6222 6.16613H30.1458C30.0757 6.16613 30.0088 6.19385 29.9592 6.24402C29.9096 6.29352 29.8818 6.36085 29.8818 6.43148V13.777C29.8818 15.6035 28.7446 16.2431 27.4255 16.2431C26.1064 16.2431 24.9693 15.5586 24.9693 13.777V6.43082C24.9693 6.36085 24.9415 6.29286 24.8919 6.24336C24.8422 6.19385 24.7754 6.16547 24.7053 6.16547H21.2289C21.1588 6.16547 21.092 6.19319 21.0424 6.24336C20.9927 6.29286 20.965 6.36019 20.965 6.43082V14.1024C20.965 18.0287 24.0133 19.8545 27.4222 19.8545C30.8311 19.8545 33.8795 18.028 33.8795 14.1024V6.43082C33.8795 6.36151 33.8524 6.29484 33.8041 6.24534C33.7565 6.19583 33.691 6.16745 33.6222 6.16613Z"></path>
                    <path d="M60.7795 1.42407H57.3495C57.2039 1.42407 57.0862 1.54289 57.0862 1.68877V19.1456C57.0862 19.2921 57.2039 19.4103 57.3495 19.4103H60.7795C60.9251 19.4103 61.0428 19.2915 61.0428 19.1456V1.68943C61.0428 1.54289 60.9251 1.42407 60.7795 1.42407Z"></path>
                    <path d="M55.1723 6.16595H43.1165C43.0463 6.16595 42.9795 6.19368 42.9299 6.24384C42.8803 6.29335 42.8525 6.36068 42.8525 6.43131V9.34496C42.8525 9.41493 42.8803 9.48292 42.9299 9.53243C42.9795 9.58193 43.0463 9.61032 43.1165 9.61032H48.9545L41.8648 18.9817C41.8351 19.0206 41.8172 19.0675 41.8126 19.117C41.8079 19.1658 41.8172 19.2153 41.839 19.2596C41.8609 19.3038 41.8946 19.3407 41.9363 19.3672C41.9779 19.3936 42.0262 19.4068 42.0752 19.4068H54.7145C54.7847 19.4068 54.8515 19.379 54.9011 19.3295C54.9507 19.28 54.9785 19.2127 54.9785 19.1421V16.2284C54.9785 16.1584 54.9507 16.0911 54.9011 16.0409C54.8515 15.9914 54.7847 15.9631 54.7145 15.9631H48.4127L55.3827 6.58841C55.4118 6.54881 55.429 6.5026 55.4336 6.45375C55.4376 6.40491 55.4283 6.35606 55.4065 6.31249C55.3847 6.26893 55.3509 6.23196 55.3099 6.20622C55.2689 6.17981 55.2206 6.16595 55.1723 6.16595Z"></path>
                    <path d="M85.7401 6.20447H83.7926V1.68943C83.7926 1.61946 83.7648 1.55147 83.7152 1.50196C83.6655 1.45246 83.5987 1.42407 83.5286 1.42407H80.1025C80.0324 1.42407 79.9656 1.4518 79.9159 1.50196C79.8663 1.55147 79.8385 1.6188 79.8385 1.68943V6.20447H77.9042C77.8341 6.20447 77.7673 6.23219 77.7177 6.28236C77.668 6.33187 77.6403 6.3992 77.6403 6.46983V9.38348C77.6403 9.45345 77.668 9.52078 77.7177 9.57094C77.7673 9.62045 77.8341 9.64817 77.9042 9.64817H79.8346V19.1436C79.8346 19.2136 79.8624 19.2809 79.912 19.3311C79.9616 19.3806 80.0284 19.409 80.0985 19.409H83.5246C83.5948 19.409 83.6616 19.3812 83.7112 19.3311C83.7608 19.2816 83.7886 19.2142 83.7886 19.1436V9.65081H85.7362C85.8063 9.65081 85.8731 9.62309 85.9227 9.57358C85.9723 9.52408 86.0001 9.45675 86.0001 9.38612V6.47181C86.0008 6.40184 85.9736 6.33451 85.9254 6.28434C85.8764 6.23417 85.8102 6.20579 85.7401 6.20447Z"></path>
                    <path d="M39.9663 6.16595H36.5614C36.4158 6.16595 36.2981 6.28477 36.2981 6.43065V19.146C36.2981 19.2926 36.4158 19.4107 36.5614 19.4107H39.9663C40.1119 19.4107 40.2296 19.2919 40.2296 19.146V6.43065C40.2296 6.28477 40.1119 6.16595 39.9663 6.16595Z"></path>
                    <path d="M38.2634 0.000134583C37.8123 0.00607542 37.3723 0.146015 36.9992 0.402131C36.6261 0.658247 36.337 1.01932 36.1677 1.4398C35.9983 1.86028 35.9553 2.32168 36.046 2.76658C36.1359 3.21149 36.3549 3.61942 36.6744 3.93957C36.9939 4.25972 37.4008 4.47821 37.844 4.56732C38.2866 4.65643 38.7457 4.6122 39.1638 4.43992C39.5819 4.26764 39.9398 3.97587 40.1931 3.60028C40.4465 3.22469 40.5841 2.78243 40.5887 2.32828C40.5914 2.02134 40.5325 1.71638 40.4167 1.43254C40.301 1.1487 40.1296 0.8906 39.9133 0.673429C39.697 0.456919 39.4396 0.285295 39.1565 0.169778C38.872 0.0542622 38.5691 -0.00316588 38.2634 0.000134583Z"></path>
                    <path d="M10.0515 0.887961C8.59746 0.792248 7.14142 1.03648 5.79651 1.60152C4.45227 2.16656 3.25621 3.03656 2.30293 4.1442C1.34966 5.25184 0.662983 6.56542 0.299137 7.9833C-0.0647083 9.40118 -0.0971237 10.8851 0.204537 12.3175C0.506198 13.7505 1.13466 15.0932 2.03898 16.2411C2.94396 17.389 4.10033 18.3111 5.41944 18.9342C6.73788 19.558 8.18202 19.8656 9.63872 19.8346C11.0954 19.8029 12.525 19.4333 13.8163 18.7534C13.8573 18.7323 13.9037 18.7224 13.95 18.725C13.9963 18.7276 14.0413 18.7422 14.0796 18.7679C14.3535 18.9514 14.6393 19.1158 14.935 19.2603C15.9597 19.7587 17.085 20.0115 18.2228 19.9996C18.293 19.9996 18.3598 19.9719 18.4094 19.9224C18.459 19.8729 18.4868 19.8056 18.4868 19.7349V16.5163C18.4874 16.453 18.4663 16.3922 18.4259 16.3434C18.3856 16.2945 18.33 16.2622 18.2678 16.2516C17.9648 16.2034 17.6685 16.1183 17.386 15.9975C17.3509 15.9816 17.3198 15.9592 17.2947 15.9302C17.2696 15.9011 17.251 15.8675 17.2404 15.8305C17.2299 15.7935 17.2272 15.7552 17.2325 15.717C17.2378 15.6793 17.2517 15.643 17.2722 15.6107C18.1924 14.2265 18.7342 12.6231 18.842 10.9623C18.9505 9.30151 18.6211 7.64071 17.8881 6.14758C17.1551 4.65445 16.0444 3.38245 14.6664 2.45766C13.2891 1.53353 11.6935 0.989616 10.0409 0.88202L10.0515 0.887961ZM3.7259 10.353C3.72458 9.21702 4.05865 8.10542 4.68579 7.16016C5.31293 6.21491 6.20534 5.47759 7.24925 5.04193C8.29316 4.60626 9.44291 4.49207 10.5516 4.7132C11.6604 4.93433 12.6791 5.48155 13.4789 6.28422C14.2787 7.08755 14.8232 8.11136 15.0435 9.2256C15.2644 10.3398 15.1507 11.495 14.718 12.5452C14.2854 13.5948 13.5524 14.4918 12.6117 15.1229C11.6716 15.7539 10.5662 16.0899 9.43563 16.0892C7.92137 16.0892 6.46863 15.4853 5.39761 14.4093C4.32658 13.3334 3.72326 11.8745 3.72193 10.3524L3.7259 10.353Z"></path>
                    <path d="M69.4721 5.62565C68.3078 5.71476 67.1832 6.09102 66.1988 6.72207C65.2145 7.35311 64.4001 8.21916 63.8285 9.2423C63.257 10.2661 62.946 11.4153 62.9236 12.589C62.9011 13.7626 63.167 14.9231 63.6982 15.968C64.2294 17.0129 65.01 17.91 65.9693 18.5787C66.9292 19.2473 68.0379 19.6678 69.1982 19.8018C70.3586 19.9358 71.5335 19.78 72.619 19.3477C73.7046 18.9153 74.6672 18.2202 75.4207 17.3232C75.4438 17.2961 75.4617 17.2651 75.4729 17.2307C75.4842 17.1971 75.4881 17.1608 75.4848 17.1251C75.4815 17.0895 75.4716 17.0545 75.4551 17.0235C75.4385 16.9918 75.4154 16.9641 75.3876 16.9416L73.3302 15.2808C73.2773 15.2386 73.2098 15.2181 73.1423 15.2241C73.0748 15.23 73.012 15.2623 72.9677 15.3138C72.5231 15.8287 71.9535 16.2188 71.3145 16.4459C70.6755 16.673 69.9881 16.7291 69.3206 16.6089C68.6531 16.4888 68.028 16.1964 67.5067 15.7601C66.9854 15.3237 66.5858 14.7594 66.347 14.121H76.7457C76.8079 14.1224 76.8688 14.1006 76.9171 14.061C76.9654 14.0214 76.9978 13.9653 77.009 13.9039C77.0745 13.5164 77.1069 13.1236 77.1063 12.7302C77.1063 11.748 76.9038 10.777 76.5129 9.87731C76.1219 8.9776 75.5497 8.16899 74.8326 7.50164C74.1154 6.83428 73.2693 6.32337 72.3465 6.00058C71.425 5.67846 70.4459 5.5504 69.4721 5.62565ZM66.347 11.3355C66.6275 10.5856 67.1296 9.93936 67.7852 9.48323C68.4408 9.02711 69.2194 8.78288 70.0166 8.78288C70.8137 8.78288 71.5923 9.02711 72.2479 9.48323C72.9035 9.93936 73.405 10.5856 73.6861 11.3355H66.347Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="a1731mpn">
              <div className="axxq1d5">
                <div className="anha6ew">
                  <h3
                    className="amx96bn h9lvpq"
                    style={{ "--amx96bn-0": "#2E3856" }}
                  >
                    Sign up
                  </h3>
                  <h3
                    className="amx96bn h9lvpq"
                    style={{ "--amx96bn-0": "#939BB4" }}
                    onClick={changeLogin}
                  >
                    Login
                  </h3>
                </div>
                <div className="b1r6bd1m">
                  <div className="bq40tjb">
                    <div className="hideAbove--s">
                      <a
                        href="#"
                        className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--large AssemblyButtonBase--padding AssemblyButtonBase--fullWidth"
                      >
                        <span className="k-icon k-i-google AssemblyIcon AssemblyIcon--medium"></span>
                        <span>Continue with Google</span>
                      </a>
                    </div>
                    <div className="hideBelow--s">
                      <a
                        href="#"
                        className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--large AssemblyButtonBase--padding AssemblyButtonBase--fullWidth"
                      >
                        <span className="k-icon k-i-google AssemblyIcon AssemblyIcon--medium"></span>
                        <span>Continue with Google</span>
                      </a>
                    </div>
                  </div>
                  <div className="bq40tjb">
                    <div className="hideAbove--s">
                      <a
                        className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--large AssemblyButtonBase--padding AssemblyButtonBase--fullWidth"
                        href="#"
                      >
                        <span className="k-icon k-i-facebook AssemblyIcon AssemblyIcon--medium"></span>
                        <span>Continue with Facebook</span>
                      </a>
                    </div>
                    <div className="hideBelow--s">
                      <a
                        className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--large AssemblyButtonBase--padding AssemblyButtonBase--fullWidth"
                        href="#"
                      >
                        <span className="k-icon k-i-facebook AssemblyIcon AssemblyIcon--medium"></span>
                        <span>Continue with Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="UIDivider">
                  <div className="UIDivider-separator">
                    <hr className="UIDivider-separatorLine" />
                  </div>
                  <div className="UIDivider-label">OR EMAIL</div>
                  <div className="UIDivider-separator">
                    <hr className="UIDivider-separatorLine" />
                  </div>
                </div>
                <form className="fuq5sud ">
                  <div
                    className="b19yogmb"
                    style={{ "--b19yogmb-0": "1.5rem" }}
                  >
                    <div className="UIDiv BirthDateDropdownGroup">
                      <div className="UIFieldset notranslate UIFieldset--turnLegendIntoLabel">
                        <legend className="UIFieldset-legend">Birthday</legend>
                        <div className="UIFieldset-fields">
                          <div className="UIDropdown UIDropdown--boxed">
                            <select
                              aria-label="birth_day"
                              className="UIDropdown-select"
                              name="birth_day"
                              value={day}
                              onChange={(e) => setDay(e.target.value)}
                            >
                              <option value="-1">Day</option>
                              {sDay.map((e, idx) => {
                                return (
                                  <option value={e} key={`d-${idx}`}>
                                    {e}
                                  </option>
                                );
                              })}
                            </select>
                            <span className="k-icon k-i-arrow-chevron-down UIIcon UIIcon--caret-down UIDropdown-icon down-icon"></span>
                          </div>
                          <div className="UIDropdown UIDropdown--boxed">
                            <select
                              aria-label="birth_month"
                              className="UIDropdown-select"
                              name="birth_month"
                              value={month}
                              onChange={(e) => setMonth(e.target.value)}
                            >
                              <option value="-1">Month</option>
                              {sMonth.map((e, idx) => {
                                return (
                                  <option value={e} key={`m-${idx}`}>
                                    {e}
                                  </option>
                                );
                              })}
                            </select>
                            <span className="k-icon k-i-arrow-chevron-down UIIcon UIIcon--caret-down UIDropdown-icon down-icon"></span>
                          </div>
                          <div className="UIDropdown UIDropdown--boxed">
                            <select
                              aria-label="birth_year"
                              className="UIDropdown-select"
                              name="birth_year"
                              value={year}
                              onChange={(e) => setyear(e.target.value)}
                            >
                              <option value="-1">Year</option>
                              {sYear.map((e, idx) => {
                                return (
                                  <option value={e} key={`y-${idx}`}>
                                    {e}
                                  </option>
                                );
                              })}
                            </select>
                            <span className="k-icon k-i-arrow-chevron-down UIIcon UIIcon--caret-down UIDropdown-icon down-icon"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UIDiv">
                    <label className="UIInput UIInput--boxed" htmlFor="email">
                      <span className="UIInput-label notranslate">Email</span>
                      <div className="UIInput-content">
                        <input
                          id="email"
                          name="email"
                          placeholder="user@quizlet.com"
                          role="textbox"
                          className="UIInput-input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="UIInput-border"></span>
                      </div>
                    </label>
                  </div>
                  <div className="UsernameField">
                    <div className="UIDiv UsernameField">
                      <label
                        className="UIInput UIInput--boxed"
                        htmlFor="username"
                      >
                        <span className="UIInput-label notranslate">
                          Username
                        </span>
                        <div className="UIInput-content">
                          <input
                            id="username"
                            name="username"
                            placeholder="andrew123"
                            autoComplete="username"
                            className="UIInput-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <span className="UIInput-border"></span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="UIDiv PasswordField">
                    <label
                      className="UIInput UIInput--boxed"
                      htmlFor="password1"
                    >
                      <span className="UIInput-label notranslate">
                        Password
                      </span>
                      <div className="UIInput-content">
                        <input
                          id="password1"
                          name="password1"
                          placeholder="●●●●●●●●"
                          role="textbox"
                          autoComplete="new-password"
                          className="UIInput-input"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="UIInput-border"></span>
                      </div>
                    </label>
                  </div>
                  <button className="UIButton UIButton--fill" type="submit">
                    <span className="UIButton-wrapper">
                      <div className="UILoadingButton">
                        <span>Sign up</span>
                      </div>
                    </span>
                  </button>
                  <div className="bpceo8d">
                    <div className="a1cs70vk">
                      <span className="lghzn8f">
                        <span>
                          Already have an account?{" "}
                          <button
                            className="UILink"
                            type="button"
                            onClick={changeLogin}
                          >
                            Log in
                          </button>
                        </span>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Dialog>
      )}
    </div>
  );
}
