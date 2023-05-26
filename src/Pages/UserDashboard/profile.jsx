import {useState,useEffect} from "react";
import DashboardLayout from "../Dashboard/dashboardlayout";
import ProfileForm from "../../Components/User Dashboard/profile/profileForm";
import { useSelector,useDispatch } from "react-redux";
import {toast} from "react-toastify"
import { UpdateProfile } from "../Auth/auth";
const Profile = () => {
  const {loggedIn}=useSelector((state)=>({...state}));
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Conpassword, setConPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const dispatch=useDispatch();
  useEffect(() => {
    const storedAddress = JSON.parse(localStorage.getItem("location"));
      setaddress(storedAddress.mapAddress);
  }, [location]);
  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setEmail(loggedIn.user.email);
      setName(loggedIn.user.name);
      setWhatsapp(loggedIn.user.whatsapp);
    }
  }, [loggedIn && loggedIn.token]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!name) {
        return toast.error("Please Enter Your Name");
      }
      if (passwordError) {
        return toast.error("Please Enter valid Password");
      }
      if (whatsappError) {
        return toast.error("Please Enter valid Contact Number");
      }
      if (password !== Conpassword) {
        return toast.error("Password Does't match");
      }
      setloading(true);
      UpdateProfile(name, email, password, whatsapp, address).then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          //update in local Storage
          let auth = JSON.parse(window.localStorage.getItem("auth"));
          auth.user = res.user;
          window.localStorage.setItem("auth", JSON.stringify(auth));
          //update in state
          dispatch({
            type:"LOGGED_IN_USER",
            payload:{
              ...loggedIn,
              user:auth.user,
            }
          })
          setloading(false);
          toast.success("User Updated");
        }
      });
    } catch (error) {
      toast.error(error);
      setloading(false);
    }
  };
  return (
    <DashboardLayout className="flex w-full max-w-[1920] flex-col items-start bg-gray-100  lg:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <div className="flex flex-col my-2 w-full items-center justify-center">
        <ProfileForm 
        address={address}
        name={name}
        email={email}
        whatsapp={whatsapp}
        loading={loading}
        password={password}
        Conpassword={Conpassword}
        setName={setName}
        setEmail={setEmail}
        setWhatsapp={setWhatsapp}
        setloading={setloading}
        setPassword={setPassword}
        setConPassword={setConPassword}
        setaddress={setaddress}
        handleSubmit={handleSubmit}
        passwordError={passwordError}
        whatsappError={whatsappError}
        setPasswordError={setPasswordError}
        setWhatsappError={setWhatsappError}
        />
      </div>
    </DashboardLayout>
  );
};
export default Profile;
