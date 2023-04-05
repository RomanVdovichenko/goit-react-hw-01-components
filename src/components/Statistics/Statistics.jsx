import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.stat_list}> 
                {stats.map(item => {
                    return (
                        <li key={item.id} className={styles.item} style={{
                            backgroundColor: getRandomHexColor()
                        }}>
                            <span className={styles.label}>{item.label}</span>
                            <span className={styles.percentage}>{item.percentage}%</span>
                        </li>
                    )
                })}             
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}