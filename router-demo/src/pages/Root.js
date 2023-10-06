import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import styles from './Root.module.css'

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main className={styles.content}>
                <Outlet />
            </main>
        </>
    )
}

export default Root
