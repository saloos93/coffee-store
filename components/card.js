import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./card.module.css";

const Card = ({ name, href, imageSrc }) => {
  return (
    <div>
      <Link href={href}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.container)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                alt={name}
                className={styles.cardImage}
                src={imageSrc}
                width={260}
                height={160}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Card;
