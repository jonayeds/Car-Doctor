import About from "../componenets/About";
import Banner from "../componenets/Banner";
import ChooseUs from "../componenets/ChooseUs";
import Info from "../componenets/Info";
import Products from "../componenets/Products";
import Services from "../componenets/Services";
import Team from "../componenets/Team";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Info></Info>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;