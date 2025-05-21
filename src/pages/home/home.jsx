import style from "./home.module.css";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
         <Helmet>
                <meta name="description" content="Home page" />
                <title>Home Movie Manager</title>
         </Helmet>
        <main>
            <section className={cn("relative z-20")}>
                {/* Link to add new movie page with aria-label for better accessibility */}
                <Link 
                    className={style.LinkButtom} 
                    to="/add" 
                    tabIndex="0" 
                    aria-label="Add a new movie"
                >
                    Add New Movie
                </Link>
            </section>
        </main>
        </>
    );
}

export default Home;
