import '@shopify/ui-extensions/preact';
import {render} from "preact";
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body)
}

function Extension() {
  const checboxLabel = shopify.settings?.value.label_checkbox || "Nhận email khuyến mãi";
  const actionDescription = shopify.settings?.value.action_description || "Lam gi co gi bat ngo dau :D";
  const [checked, setChecked] = useState(false);
  const dataJetId = shopify.settings?.value.datajet_id_action || "";
  return (
    <s-banner>
        <s-checkbox
          label={checboxLabel}
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
        />
        {checked && (
          <s-text>
            {actionDescription}
          </s-text>
        )}
    </s-banner>
  );
}