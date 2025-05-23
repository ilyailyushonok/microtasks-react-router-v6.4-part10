import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
  PAGE1: '/adidas',
  PAGE2: '/puma',
  PAGE3: '/abibas',
  PRICES: '/prices',
} as const

export const App = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.PAGE1}>Page1</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE2}>Page2</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PAGE3}>Page3</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

            <Route path={PATH.PAGE1} element={<Adidas/>}/>
            <Route path={PATH.PAGE2} element={<Puma/>}/>
            <Route path={PATH.PAGE3} element={<Abibas/>}/>
            <Route path={PATH.PRICES} element={<Prices/>}/>
            {/*<Route path={'/adidas/:id'} element={<Model/>}/>*/}
            <Route path={'/:model/:id'} element={<Model/>}/>

            <Route path={'/*'} element={<Error404/>}/>

            {/*<Route path={'/page/error'} element={<Error404/>}/>*/}
            {/*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*/}
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
