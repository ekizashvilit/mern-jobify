import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            illo. Dolorem incidunt dicta quo dignissimos voluptas deserunt
            officia possimus fuga ut. Natus, quidem. Ullam voluptas autem non
            saepe fugiat minima nobis voluptate, perspiciatis eius ipsam
            repudiandae, ratione asperiores rerum quaerat!
          </p>
          <button className="btn btn-hero">Login / Register</button>
        </div>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </main>
  );
};
export default Landing;
