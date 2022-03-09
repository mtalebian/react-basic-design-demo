import React, { useState } from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const SwitchDemo = () => {
    const [isChecked, setIsChecked] = useState();

    return (
        <>
            <div style={{ width: 700 }}>
                <h1>Switch</h1>

                <Example title="Basic switches" content="center" vertical={false}>
                    <bd.Switch model={true} />
                    <bd.Switch />
                    <bd.Switch model={true} disabled />
                    <bd.Switch disabled />
                </Example>
                <SourceCode
                    lines={["<bd.Switch model={true} />", "<bd.Switch />", "<bd.Switch model={true} disabled />", "<bd.Switch disabled />"]}
                />

                <Example title="Label" content="center" vertical={false}>
                    <bd.Switch label="Label" model={true} />
                    <bd.Switch label="Disabled" disabled />
                </Example>
                <SourceCode lines={["<bd.Switch label='Label' model={true} />", "<bd.Switch label='Disabled' disabled />"]} />

                <Example title="Label placement" content="center" vertical={false}>
                    <bd.Switch label="Start" labelPlacement="start" />
                    <bd.Switch label="End" labelPlacement="end" />
                </Example>
                <SourceCode
                    lines={["<bd.Switch label='Start' labelPlacement='start' />", "<bd.Switch label='End' labelPlacement='end' />"]}
                />

                <Example title="Size" content="center" vertical={false}>
                    <bd.Switch size="sm" model={true} />
                    <bd.Switch model={true} />
                </Example>
                <SourceCode lines={["<bd.Switch size='sm' model={true} />", "<bd.Switch model={true} />"]} />

                <Example title="Color" content="center" vertical={false}>
                    <bd.Switch color="primary" model={true} />
                    <bd.Switch color="secondary" model={true} />
                    <bd.Switch color="default" model={true} />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Switch color='primary' model={true} />",
                        "<bd.Switch color='secondary' model={true} />",
                        "<bd.Switch color='default' model={true} />",
                    ]}
                />

                <Example title="Controlled" content="center" vertical={false}>
                    <bd.Switch color="primary" model={isChecked} setModel={setIsChecked} />
                </Example>
                <SourceCode
                    lines={[
                        "const [isChecked, setIsChecked] = useState();",
                        "",
                        "<bd.Switch color='primary' model={isChecked} setModel={setIsChecked} />",
                    ]}
                />
            </div>
        </>
    );
};
