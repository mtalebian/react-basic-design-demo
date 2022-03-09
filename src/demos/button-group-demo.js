import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const ButtonGroupDemo = () => {
    return (
        <>
            <div style={{ width: 700 }}>
                <h1>Button group</h1>
                <p className="mb-5">The ButtonGroup component can be used to group related buttons.</p>

                <Example title="Basic button group" vertical={false} content="center" align="center">
                    <bd.ButtonGroup>
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.ButtonGroup>",
                        "	<bd.Button>One</bd.Button>",
                        "	<bd.Button>Two</bd.Button>",
                        "	<bd.Button>Three</bd.Button>",
                        "	<bd.Button active>Active</bd.Button>",
                        "</bd.ButtonGroup>",
                    ]}
                />

                <Example title="Button variants" content="center" align="center">
                    <bd.ButtonGroup variant="flat">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="outline">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="text">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.ButtonGroup variant='flat'>",
                        "	<bd.Button>One</bd.Button>",
                        "	<bd.Button>Two</bd.Button>",
                        "	<bd.Button>Three</bd.Button>",
                        "	<bd.Button active>Active</bd.Button>",
                        "</bd.ButtonGroup>",
                    ]}
                />

                <Example title="Sizes and colors" content="center" align="center">
                    <bd.ButtonGroup variant="outline" size="sm">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="outline" color="secondary">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="outline" size="lg" color="default">
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.ButtonGroup variant='outline' size='sm'> ... </bd.ButtonGroup>",
                        "<bd.ButtonGroup variant='outline' color='secondary'> ... </bd.ButtonGroup>",
                        "<bd.ButtonGroup variant='outline' size='lg' color='default'> ... </bd.ButtonGroup>",
                    ]}
                />

                <Example title="Vertical group" content="center" align="center" vertical={false}>
                    <bd.ButtonGroup variant="outline" vertical>
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="text" vertical>
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>

                    <bd.ButtonGroup variant="contained" vertical>
                        <bd.Button>One</bd.Button>
                        <bd.Button>Two</bd.Button>
                        <bd.Button>Three</bd.Button>
                        <bd.Button active>Active</bd.Button>
                    </bd.ButtonGroup>
                </Example>
                <SourceCode lines={["<bd.ButtonGroup vertical> ... </bd.ButtonGroup>"]} />
            </div>
        </>
    );
};
