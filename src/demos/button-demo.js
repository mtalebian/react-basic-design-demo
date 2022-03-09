import React from "react";
import SvgAdd from "../icons/Add";
import SvgNotificationsActive from "../icons/NotificationsActive";
import SvgSave from "../icons/Save";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const ButtonDemo = () => {
    return (
        <>
            <div style={{ maxWidth: 800 }}>
                <h1>Button</h1>

                <Example title="Basic button" vertical={false} content="center">
                    <bd.Button variant="text">Text</bd.Button>
                    <bd.Button variant="contained">Contained</bd.Button>
                    <bd.Button variant="outline">Outlined</bd.Button>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button variant='text'>Text</bd.Button>",
                        "<bd.Button variant='contained'>Contained</bd.Button>",
                        "<bd.Button variant='outline'>Outlined</bd.Button>",
                    ]}
                />

                <Example title="Text button" vertical={false} content="center">
                    <bd.Button>Primary</bd.Button>
                    <bd.Button href="#/">Link</bd.Button>
                    <bd.Button color="secondary">Secondary</bd.Button>
                    <bd.Button color="default">Default</bd.Button>
                    <bd.Button active>Active</bd.Button>
                    <bd.Button disabled>Disabled</bd.Button>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button>Primary</bd.Button>",
                        '<bd.Button href="#/">Link</bd.Button>',
                        '<bd.Button color="secondary">Secondary</bd.Button>',
                        '<bd.Button color="default">Default</bd.Button>',
                        "<bd.Button active>Active</bd.Button>",
                        "<bd.Button disabled>Disabled</bd.Button>",
                    ]}
                />

                <Example title="Contained button" vertical={false} content="center">
                    <bd.Button variant="contained">Contained</bd.Button>
                    <bd.Button variant="flat">Flat</bd.Button>
                    <bd.Button variant="contained" href="#/">
                        Link
                    </bd.Button>
                    <bd.Button variant="contained" color="secondary">
                        Secondary
                    </bd.Button>
                    <bd.Button variant="contained" color="default">
                        Default
                    </bd.Button>
                    <bd.Button variant="contained" active>
                        Active
                    </bd.Button>
                    <bd.Button variant="contained" disabled>
                        Disabled
                    </bd.Button>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button variant='contained'>Contained</bd.Button>",
                        "<bd.Button variant='flat'>Flat</bd.Button>",
                        "<bd.Button variant='contained' href='#/'>Link</bd.Button>",
                        "<bd.Button variant='contained' color='secondary'>Secondary</bd.Button>",
                        "<bd.Button variant='contained' color='default'>Default</bd.Button>",
                        "<bd.Button variant='contained' active>Active</bd.Button>",
                        "<bd.Button variant='contained' disabled>Disabled</bd.Button>",
                    ]}
                />

                <Example title="Outlined button" vertical={false} content="center">
                    <bd.Button variant="outline">Primary</bd.Button>
                    <bd.Button variant="outline" href="#link">
                        Link
                    </bd.Button>
                    <bd.Button variant="outline" color="secondary">
                        Secondary
                    </bd.Button>
                    <bd.Button variant="outline" color="default">
                        Default
                    </bd.Button>
                    <bd.Button variant="outline" active>
                        Active
                    </bd.Button>
                    <bd.Button variant="outline" disabled>
                        Disabled
                    </bd.Button>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button variant='outline'>Primary</bd.Button>",
                        "<bd.Button variant='outline' href='#link'>Link</bd.Button>",
                        "<bd.Button variant='outline' color='secondary'>Secondary</bd.Button>",
                        "<bd.Button variant='outline' color='default'>Default</bd.Button>",
                        "<bd.Button variant='outline' active>Active</bd.Button>",
                        "<bd.Button variant='outline' disabled>Disabled</bd.Button>",
                    ]}
                />

                <Example title="Icon button" vertical={false} content="center">
                    <bd.Button variant="icon">
                        <SvgAdd />
                    </bd.Button>
                    <bd.Button variant="icon" color="secondary">
                        <SvgSave />
                    </bd.Button>
                    <bd.Button variant="icon" color="default">
                        <SvgNotificationsActive />
                    </bd.Button>
                    <bd.Button variant="icon" color="default" active>
                        <SvgNotificationsActive />
                    </bd.Button>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button variant='icon'><SvgAdd /></bd.Button>",
                        "<bd.Button variant='icon' color='secondary'><SvgSave /></bd.Button>",
                        "<bd.Button variant='icon' color='default'><SvgNotificationsActive /></bd.Button>",
                        "<bd.Button variant='icon' color='default' active><SvgNotificationsActive /></bd.Button>",
                    ]}
                />

                <Example title="Sizes" content="center">
                    <div className="d-flex gap-3 align-items-center">
                        <bd.Button size="sm">Small</bd.Button>
                        <bd.Button>Medium</bd.Button>
                        <bd.Button size="lg">Large</bd.Button>
                    </div>

                    <div className="d-flex gap-3 align-items-center my-3">
                        <bd.Button variant="contained" size="sm">
                            Small
                        </bd.Button>
                        <bd.Button variant="contained">Medium</bd.Button>
                        <bd.Button variant="contained" size="lg">
                            Large
                        </bd.Button>
                    </div>

                    <div className="d-flex gap-3 align-items-center my-3">
                        <bd.Button variant="outline" size="sm">
                            Small
                        </bd.Button>
                        <bd.Button variant="outline">Medium</bd.Button>
                        <bd.Button variant="outline" size="lg">
                            Large
                        </bd.Button>
                    </div>

                    <div className="d-flex gap-3 align-items-center">
                        <bd.Button variant="icon" size="sm">
                            <SvgNotificationsActive />
                        </bd.Button>
                        <bd.Button variant="icon" size="md">
                            <SvgNotificationsActive />
                        </bd.Button>
                        <bd.Button variant="icon">
                            <SvgNotificationsActive />
                        </bd.Button>
                        <bd.Button variant="icon" size="lg">
                            <SvgNotificationsActive />
                        </bd.Button>
                    </div>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Button size='sm'>Small</bd.Button>",
                        "<bd.Button>Medium</bd.Button>",
                        "<bd.Button size='lg'>Large</bd.Button>",
                    ]}
                />

                <Example title="Buttons with icons and label" vertical={false} content="center">
                    <bd.Button variant="outline">
                        <SvgAdd /> Add
                    </bd.Button>
                    <bd.Button>
                        <SvgSave /> Save
                    </bd.Button>
                </Example>
                <SourceCode
                    lines={["<bd.Button variant='outline'><SvgAdd /> Add</bd.Button>", "<bd.Button><SvgSave /> Save</bd.Button>"]}
                />
            </div>
        </>
    );
};
