import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles';
import {PATH} from "./components/routes/routes.tsx";


export const App = () => {
    const navigate = useNavigate();
    const navigateHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <header className={styles.header}><h1>HEADER</h1></header>
            <div className={styles.HorizontalNavigation}>
                <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>mainPage(ADIDAS)</Link>
                <button className={styles.ButtonLikeLink} onClick={navigateHandler}>Шаг назад</button>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED}>ProtectedPage</NavLink></S.NavWrapper>
                </div>
                <Outlet/>
            </div>
            <footer className={styles.footer}>abibas 2023</footer>
        </div>
    );
}
