import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "../redux/greeting/greetingSlice";

const Greeting = () => {
    const dispatch = useDispatch();
    const { loading, greeting, error } = useSelector((state) => state.greeting)

    useEffect(() => {
        dispatch(fetchGreetings())
    }, [dispatch])

    let messageGreeting;
    if (loading) {
        messageGreeting = 'Loading'
    } else if (error) {
        messageGreeting = `Error ${error}`
    } else {
        messageGreeting = greeting
    }

    return (
        <>
            <h2>Greeting:</h2>
            <h1>{ messageGreeting.message }</h1>
        </>
    )
 }

export default Greeting