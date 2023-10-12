import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav> 
            <ul className={classes.nav}>
                <li>Home</li>
                <li>Blogs</li>
                <li>Projects</li>
                <li>Todos</li>
                <li>Notes</li>
                <li>Funway</li>
                <li>AboutMe</li>
            </ul>
        </nav>
    );
};

export default Navigation;