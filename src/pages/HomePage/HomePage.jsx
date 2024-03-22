import Header from "../../components/Header/Header";
import "../HomePage/HomePage.scss";

function HomePage() {
    return(
        <main className="home">
           <Header/>
           <div className="home__hero">
           <h1 className="home__title">New Products</h1>
           </div>
           <div className="home__shower">
           <h1 className="home__title">Shower Products</h1>
           </div>
            
        </main>
    );
}

export default HomePage;