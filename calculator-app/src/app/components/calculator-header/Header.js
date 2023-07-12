import styles from './Header.module.css'
function Header() {
    return (
        <div id={styles.header_container}>
            <h2 className={styles.left_header}>calc</h2>
            <div className={styles.right_header}>
                <p className={styles.theme}>THEME</p>
                <div className={styles.slide_section}>
                    <div className={styles.slide_choices}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className={styles.slide_bar}></div>
                </div>
            </div>
        </div>
    )
}

export default Header