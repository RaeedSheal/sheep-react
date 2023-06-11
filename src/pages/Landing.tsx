import { useState } from "react";
import Footerbar from "../components/Footerbar";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Landing = () => {
    interface user {
        username: string;
        password: string;
        email: string;
    }
    const [newuser, setNewUser] = useState<user>({
        username: "",
        password: "",
        email: "",
    });
    localStorage.setItem("user", JSON.stringify(newuser));

    localStorage.setItem("isLoggedin", "false");
    return (
        <>
            <Navbar />
            <Hero />
            <Footerbar />
        </>
    );
};

export default Landing;
