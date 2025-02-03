import styles from './About.module.css'

export const metadate = {
    title:"About us",
    description:"This is description"
}


const AboutPage = () => {
    return (
        <div>
            <h1 className={styles.text_color}>
                Hello from about us page
            </h1>
        </div>
    );
};

export default AboutPage;