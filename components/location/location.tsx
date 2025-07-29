import styles from "./location.module.css";

const Location = () => {
  return (
    <div className={styles.location_con}>
      <div className={styles.heading}>
        <h2>Apytiksli lokacija</h2>
        <h3>1 Grafton Street, Dublin, Ireland</h3>
      </div>

      <div className={styles.main}>
        <iframe
          className={styles.map}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default Location;
