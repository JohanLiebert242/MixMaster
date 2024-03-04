import styles from "./About.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx("wrapper")}>
            <h4>About us</h4>
            <p className={cx("desc")}>
                Introducing "MixMaster," the ultimate party sidekick app that
                fetches cocktails from the hilarious Cocktails DB API. With a
                flick of your finger, you'll unlock a treasure trove of
                enchanting drink recipes that'll make your taste buds dance and
                your friends jump with joy. Get ready to shake up your mixology
                game, one fantastical mocktail at a time, and let the laughter
                and giggles flow!
            </p>
        </div>
    );
}

export default About;
