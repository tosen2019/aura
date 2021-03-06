import { LightningElement, api } from "lwc";

export default class MappedAttrTests extends LightningElement {
    @api format = "default-format";
    @api msg = "default-val1";

    handleChangeValues(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            composed: true,
            detail: { format: 'format-changed-value', msg: 'msg-changed-value' }
        }));
    }
}

MappedAttrTests.interopMap = {
    props: {
        format: 'style',
        msg: 'message'
    }
};
