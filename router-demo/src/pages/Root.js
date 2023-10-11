import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import styles from './Root.module.css'

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main className={styles.content}>
                <Outlet /> {/* render the child routes */}
            </main>
        </>
        //so this component renders a navigation bar above all the childs and nested childs
    )
}

export default Root


// The < Outlet /> component, placed inside the Root component, serves as a placeholder for the content of child routes
