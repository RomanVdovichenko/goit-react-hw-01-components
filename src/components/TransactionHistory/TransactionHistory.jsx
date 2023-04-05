import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr className={styles.table_head}>
                    <th className={styles.table_cell}>Type</th>
                    <th className={styles.table_cell}>Amount</th>
                    <th className={styles.table_cell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr key={item.id} style={{
                        backgroundColor: (i % 2) ? "#eee" : "#fff"
                    }}>
                        <td className={styles.table_cell}>{item.type}</td>
                        <td className={styles.table_cell}>{item.amount}</td>
                        <td className={styles.table_cell}>{item.currency}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}