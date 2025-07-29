import styles from "@/styles/Home.module.css";
import Header from "@/components/header/header";
import Profile from "@/components/profile/profile";
import Location from "@/components/location/location";
import Raiting from "@/components/raiting/raiting";
import Reviews from "@/components/reviews/reviews";
import Capabilities from "@/components/capabilities/capabilities";
import Languages from "@/components/languages/languages";
import Skills from "@/components/skills/skills";
import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/footer";
import { profile } from "@/mocks/profile";
import { reviews } from "@/mocks/reviews";

const NanyPage = () => {
  const reviewCount = reviews.length;
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Profile
          imgUrl={profile.imgUrl}
          name={profile.name}
          intro={profile.intro}
          pageUrl={profile.pageUrl}
        />
        <div className={styles.additional_data_wrapper}>
          <Raiting raiting={4.9} reviewCount={reviewCount} />
          <Location />
        </div>
        <Reviews reviews={reviews} />
        <div className={styles.skills_wrapper}>
          <Capabilities
            capabilities={[
              "IN_DEMAND",
              "VERIFY",
              "FIRST_AID",
              "TEACHER",
              "ART",
              "SPORT",
            ]}
          />
          <Languages languages={["Lietuvių", "English", "Deutsch", "Polski"]} />
          <Skills
            skills={["nerukanti", "gaminti", "gyvunai", "gitara", "plaukti"]}
          />
        </div>
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default NanyPage;
