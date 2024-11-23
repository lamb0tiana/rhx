import checkoutStyle from "./checkout.module.scss"

export default function CgvSection() {
    return <div className={checkoutStyle.cgvSection}>
        <p><label><input type="checkbox"/> <span>Jʼ accepte des conditions générales de ventes et offres promo.</span></label></p>
        <p><label><input type="checkbox"/> <span>En soumettant ce formulaire, jʼ accepte que les informations saisies soient exploitées dans le cadre de la relation
            établie avec la société éditrice de ce site internet (contact, demande dʼinformations).</span></label></p>
    </div>
}
