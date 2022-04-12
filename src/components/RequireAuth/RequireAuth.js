import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {   //eta key er moto react by default eta diye dey.
    const [user] = useAuthState(auth)  //ekhane amader user ta ke dorkar tai amra jehehtu react firebase hook use kortechi tai amra ekhane user ke pawar jonno useAuthState() use korbo.jeta user ke return kore.tai ekhane useAuthState() ejodi amra auth ta ke pathai tahole amra user ke pabo.
    const location = useLocation()
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }}></Navigate> //ei linetar mane holo user joid na thake tahole take login korte pathabe karon se amader je page ta access korte cacche amra take login kora chara dibo tai se jekhan theke login korte jabe so joid login kore take abar se page e niye ashbe.
    }
    return children;
};

export default RequireAuth;