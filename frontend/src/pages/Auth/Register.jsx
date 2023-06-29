import "./Auth.scss";
import RegisterInfo from "../../components/RegisterInfo/RegisterInfo";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  function showUniqueIdInfo() {
    alert(
      "It Should Be Unique, This Id Will Use For Other Users To Message You. So Make Sure That It Is Not Easily Accesible Thanks!! 💖"
    );
  }

  return (
    <section className="auth_container">
      <div className="auth_content">
        <RegisterInfo />
        <div className="brand_auth">
          <RegisterForm brandInfo={showUniqueIdInfo} />
        </div>
      </div>
    </section>
  );
};

export default Register;
