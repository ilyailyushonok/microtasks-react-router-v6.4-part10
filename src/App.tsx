import styles from "./components/Site.module.css";
import {NavLink, Outlet} from 'react-router-dom';
import {S} from './components/pages/_styles';
import {PATH} from "./components/routes/routes.tsx";


export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
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
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
