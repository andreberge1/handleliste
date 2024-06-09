
import Button from '../../components/Button/Button';
import './Home.css';


export default function Home () {

  return (
    <div className='homePage'>
        <div className="homePageHeading">
            <input type="text" placeholder="Finn handleliste" className="listSearch"/>
            <Button text={"Ny handleliste"} />
        </div>
    </div>
  );
}