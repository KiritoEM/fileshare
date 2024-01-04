const LoginConnect = () => {
  return (
    <section id="login-connect">
      <div className="btn-google">
        <button className="btn btn-1">
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          Se connecter avec Google
        </button>
      </div>
      <div className="btn-google">
        <button className="btn btn-2">
          <div className="img">
            <img src="/facebook.png" alt="" />
          </div>
          Se connecter avec Facebook
        </button>
      </div>
    </section>
  );
};

export default LoginConnect;
