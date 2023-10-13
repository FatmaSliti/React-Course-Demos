import MainNavigation from './MainNavigation'

import { Outlet, useNavigation } from 'react-router-dom'
//the role of useNavigation is to bring back a loading indicator

function RootLayout() {
    const navigation = useNavigation();

    // const events = useLoaderData(); //it returns undefined 
    //useLoaderData can only be used in any component on the same level or lower level then the component where we added the loader (the route on which we added the loader)
    // console.log(events);

    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>loading...</p>}
                <Outlet /> 
            </main>
        </>
    )
}

export default RootLayout


//useNavigation hook is used to give the user an indicator that something is happening (for better user experience)
