import React from "react";
import SvgAdd from "../icons/Add";
import SvgDarkMode from "../icons/DarkMode";
import SvgEmail from "../icons/Email";
import SvgHome from "../icons/Home";
import SvgMoreVert from "../icons/MoreVert";
import SvgSettings from "../icons/Settings";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const ListDemo = () => {
    return (
        <div style={{ maxWidth: 600 }}>
            <h1>List</h1>

            <Example title="Basic List" shaded>
                <bd.List variant="menu" className="bg-default">
                    <bd.ListItem primary="Home" icon={<SvgHome />} />
                    <bd.ListItem primary="Dark Mode" icon={<SvgDarkMode />} />

                    <bd.ListDivider />

                    <bd.ListItem primary="Trash" selected />
                    <bd.ListItem primary="Spam" />
                </bd.List>
            </Example>
            <SourceCode
                lines={[
                    "<bd.List variant='menu' className='bg-default'>",
                    "	<bd.ListItem primary='Home' icon={<SvgHome />} />",
                    "	<bd.ListItem primary='Dark Mode' icon={<SvgDarkMode />} />",
                    "",
                    "	<bd.ListDivider />",
                    "",
                    "	<bd.ListItem primary='Trash' selected />",
                    "	<bd.ListItem primary='Spam' />",
                    "</bd.List>",
                ]}
            />

            <Example title="Nested List" shaded>
                <bd.List variant="menu" className="bg-default" header={<div className="p-3">Nested List Items</div>}>
                    <bd.ListItem primary="Home" icon={<SvgHome />} />
                    <bd.ListItem primary="Inbox" icon={<SvgEmail />} expanded>
                        <bd.ListItem primary="Add" icon={<SvgAdd />} />
                        <bd.ListItem primary="Settings" icon={<SvgSettings />} />
                    </bd.ListItem>
                </bd.List>
            </Example>
            <SourceCode
                lines={[
                    "<bd.List variant='menu' className='bg-default' header={<div className='p-3'>Nested List Items</div>}>",
                    "	<bd.ListItem primary='Home' icon={<SvgHome />} />",
                    "	<bd.ListItem primary='Inbox' icon={<SvgEmail />} expanded>",
                    "		<bd.ListItem primary='Add' icon={<SvgAdd />} />",
                    "		<bd.ListItem primary='Settings' icon={<SvgSettings />} />",
                    "	</bd.ListItem>",
                    "</bd.List>",
                ]}
            />

            <Example title="Text variant & Small & Compact" shaded>
                <bd.List className="bg-default" small compact>
                    <bd.ListItem primary="Single-line item" />
                    <bd.ListItem primary="Single-line item" />
                    <bd.ListItem primary="Single-line item" />
                </bd.List>
            </Example>
            <SourceCode
                lines={[
                    "<bd.List className='bg-default' small compact>",
                    "	<bd.ListItem primary='Single-line item' />",
                    "	<bd.ListItem primary='Single-line item' />",
                    "	<bd.ListItem primary='Single-line item' />",
                    "</bd.List>",
                ]}
            />

            <Example title="Checkbox" shaded>
                <p>Checkbox can be a primary action</p>
                <div>
                    <bd.List variant="menu" className="bg-default">
                        <bd.ListItem primary="List item 1" checked={false} />
                        <bd.ListItem primary="List item 2" checked={true} />
                    </bd.List>
                </div>

                <p>Checkbox can be a secondary action</p>
                <div>
                    <bd.List variant="menu" className="bg-default">
                        <bd.ListItem primary="List item 1" controls={<bd.Toggle checked={true} />} />
                        <bd.ListItem primary="List item 2" controls={<bd.Toggle checked={false} />} />
                    </bd.List>
                </div>
            </Example>
            <SourceCode
                lines={[
                    "<bd.ListItem primary='List item 1' checked={false} />",
                    "<bd.ListItem primary='List item 1' controls={<bd.Toggle checked={true} />} />",
                ]}
            />

            <Example title="Radio" shaded>
                <bd.List variant="menu" className="bg-default">
                    <bd.ListItem primary="List item 3" checked={false} radio={true} />
                    <bd.ListItem primary="List item 4" checked={true} radio={true} />
                </bd.List>
            </Example>
            <SourceCode lines={["<bd.ListItem primary='List item 3' checked={false} radio={true} />"]} />

            <Example title="Inset" shaded>
                <bd.List variant="menu" className="bg-default">
                    <bd.ListItem primary="Home" icon={<SvgHome />} />
                    <bd.ListItem primary="Inset Item" inset />
                </bd.List>
            </Example>
            <SourceCode lines={["<bd.ListItem primary='Inset Item' inset />"]} />

            {/**/}
            <h2>Demo</h2>
            <div className="p-4 mb-5 bg-shade-5 rounded">
                <bd.List
                    variant="menu"
                    className="border nano-scroll pt-0 bg-default"
                    style={{ maxHeight: 450 }}
                    header={<div className="bg-gray-3 p-3">List Header</div>}
                >
                    <bd.ListItem primary="Header" variant="text" />
                    <bd.ListItem primary="Home" icon={<SvgHome />} onClick={() => alert("Home")} />

                    <bd.ListItem
                        variant="text"
                        primary="Dark Mode"
                        icon={<SvgDarkMode />}
                        controls={<bd.Switch size="md" color="primary" className="edge-end" />}
                    />

                    <bd.ListDivider />

                    <bd.ListItem primary="Selected" selected inset />
                    <bd.ListItem primary="Disabled" disabled />
                    <bd.ListDivider />
                    <bd.ListItem
                        variant=""
                        primary="Photos"
                        secondary="Jan 9, 2014"
                        icon={<bd.Avatar content="A" className="bg-primary" />}
                    />
                    <bd.ListItem
                        variant="text"
                        primary="alignTop"
                        secondary={
                            <>
                                Secondary text in 2 line <br />
                                500 items
                            </>
                        }
                        icon={<bd.Avatar src="https://mui.com/static/images/avatar/1.jpg" className="bg-danger" />}
                        alignTop
                        controls={
                            <>
                                <bd.Button variant="icon" color="default" size="md" edge="end">
                                    <SvgMoreVert />
                                </bd.Button>{" "}
                            </>
                        }
                    />
                    <bd.ListDivider />

                    <bd.ListItem primary="SubMenu 1" icon={<SvgSettings />} expanded>
                        <bd.ListItem variant="button" primary="Toggle Radio Button" checked={true} onClick={(e) => alert("click")} />
                        <bd.ListItem
                            primary="Ignore toggle by click title"
                            icon={<SvgSettings />}
                            expanded
                            onTitleClick={(e) => e.stopPropagation()}
                        >
                            <bd.List>
                                <bd.ListItem primary="Checked" checked={true} radio={true} />
                                <bd.ListItem primary="UnChecked" checked={false} radio={false} />
                            </bd.List>
                        </bd.ListItem>
                    </bd.ListItem>
                </bd.List>
            </div>
        </div>
    );
};
