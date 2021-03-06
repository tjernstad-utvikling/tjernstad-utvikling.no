export const Footer = () => {
    return (
        <footer>
            <img
                className="footer-logo"
                src="/img/tu-logo.svg"
                style={{ width: '150px' }}
            />
            <address>
                <span> Tjernstad Utvikling </span> <br />
                <span style={{ fontSize: '11px' }}>C/O Ole Tjernstad</span>
                <br />
                <br />
                Sandervegen 590
                <br /> 2116 Sander
            </address>
            <address>
                Tlf: 483 13 283 <br />
                <br /> Org. nr. 924 359 595
            </address>
        </footer>
    );
};
