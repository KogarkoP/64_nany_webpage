import styles from "./capabilities.module.css";
import Capability from "../capability/capability";

type CapabilitiesProps = {
  capabilities: string[];
};

const Capabilities = ({ capabilities }: CapabilitiesProps) => {
  return (
    <div>
      <h2 className={styles.title}>Specialūs įgudžiai</h2>
      <div className={styles.capabilities_wrapper}>
        {capabilities.map((c) => {
          return <Capability key={c} id={c} />;
        })}
      </div>
    </div>
  );
};

export default Capabilities;
