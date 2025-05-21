import PropTypes from 'prop-types';
import style from "./aboutme.module.css";
import GhazalImage from '../../assets/ghazal.jpg';


const profiles = [
  { name: 'Ghazal', image: GhazalImage },
];


const Profile = ({ name, image }) => (
  <div className={style.profile}>
    <img src={image} alt={`Photo of ${name}, team member`} loading="lazy" />
    <p>{name}</p>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


function Aboutme() {
  return (
    <div>
      <section className={style.profileSection}>
        {profiles.map(({ name, image }) => (
          <Profile key={name} name={name} image={image} />
        ))}
      </section>

      <div className={style.about}>
        <p>About me: </p>
        <p>I am a passionate developer with a strong focus on building intuitive and impactful web applications. Recently, I joined forces with a talented team to create a dynamic CRUD-based platform centered around movies and films.</p>
        <p>Our goal is simple: to make managing, exploring, and organizing movie data as seamless and enjoyable as watching the films themselves. I take pride in combining clean design, efficient code, and user-friendly experiences to bring entertainment and technology closer together.</p>
    
      </div>
    </div>
  );
}

export default Aboutme;
