import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const RadioDemo = () => {
    return (
        <>
            <div style={{ width: 700 }}>
                <h1>Radio</h1>
                <p>
                    Use <code>Toggle</code> component with <code>radio</code> attribute to render a radio button.
                </p>

                <Example title="Basic Radio" content="center" vertical={false}>
                    <bd.Toggle radio name="group1" />
                    <bd.Toggle radio name="group1" />
                    <bd.Toggle radio disabled />
                    <bd.Toggle radio checked disabled />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle radio name='group1' />",
                        "<bd.Toggle radio name='group1' />",
                        "<bd.Toggle radio disabled />",
                        "<bd.Toggle radio checked disabled />",
                    ]}
                />

                <Example title="Label" content="center" vertical={false}>
                    <bd.Toggle radio name="group2" label="Label" checked />
                    <bd.Toggle radio name="group2" label="Disabled" disabled />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle radio name='group2' label='Label' checked />",
                        "<bd.Toggle radio name='group2' label='Disabled' disabled />",
                    ]}
                />

                <Example title="Label placement" content="center" vertical={false}>
                    <bd.Toggle radio name="group3" label="Start" labelPlacement="start" />
                    <bd.Toggle radio name="group3" label="End" labelPlacement="end" />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle radio name='group3' label='Start' labelPlacement='start' />",
                        "<bd.Toggle radio name='group3' label='End' labelPlacement='end' />",
                    ]}
                />

                <Example title="Size" content="center" vertical={false}>
                    <bd.Toggle radio name="group4" label="Small" size="sm" checked />
                    <bd.Toggle radio name="group4" label="Compact" compact checked />
                    <bd.Toggle radio name="group4" label="Normal" checked />
                    <bd.Toggle radio name="group4" label="Large" size="lg" checked />
                    <bd.Toggle radio name="group4" label="fontSize: 54" checked style={{ fontSize: 54 }} />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle radio name='group4' label='Small' size='sm' checked />",
                        "<bd.Toggle radio name='group4' label='Compact' compact checked />",
                        "<bd.Toggle radio name='group4' label='Normal' checked />",
                        "<bd.Toggle radio name='group4' label='Large' size='lg' checked />",
                        "<bd.Toggle radio name='group4' label='fontSize: 54' checked style={{ fontSize: 54 }} />",
                    ]}
                />

                <Example title="Color" content="center" vertical={false}>
                    <bd.Toggle radio checked />
                    <bd.Toggle radio color="secondary" checked />
                    <bd.Toggle radio color="default" checked />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle radio checked />",
                        "<bd.Toggle radio color='secondary' checked />",
                        "<bd.Toggle radio color='default' checked />",
                    ]}
                />
            </div>
        </>
    );
};
