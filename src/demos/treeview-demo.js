import React, { useState } from "react";
import * as bd from "react-basic-design";
import SvgAccountCircle from "../icons/AccountCircle";
import SvgCheckBox from "../icons/CheckBox";
import SvgDarkMode from "../icons/DarkMode";
import { Example, SourceCode } from "./demo-components";

export const TreeViewDemo = () => {
    var [selectedIndices, setSelectedIndices] = useState({});

    const toggleSelection = (id) => {
        console.log(id, selectedIndices);
        setSelectedIndices({ ...selectedIndices, [id]: !selectedIndices[id] });
    };

    return (
        <div style={{ maxWidth: 600 }}>
            <h1>TreeView</h1>

            <Example title="Controlled" shaded>
                <bd.TreeView>
                    <bd.TreeViewItem id="1" title="Root" expanded>
                        <bd.TreeViewItem id="2" title="Item 1" selected={selectedIndices[2]} onToggleSelection={toggleSelection} />
                        <bd.TreeViewItem id="3" title="Subtree 1">
                            <bd.TreeViewItem id="4" title="Item 1 - 1" selected={selectedIndices[4]} onToggleSelection={toggleSelection} />
                            <bd.TreeViewItem id="5" title="Item 1 - 2" selected={selectedIndices[5]} onToggleSelection={toggleSelection} />
                            <bd.TreeViewItem id="6" title="Subtree 1 - 1">
                                <bd.TreeViewItem
                                    id="7"
                                    title="Item 1-1-1"
                                    selected={selectedIndices[7]}
                                    onToggleSelection={toggleSelection}
                                />
                            </bd.TreeViewItem>
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode lines={[""]} />

            <Example title="Basic TreeView" shaded>
                <bd.TreeView>
                    <bd.TreeViewItem title="Root" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1">
                            <bd.TreeViewItem title="Item 1 - 1" />
                            <bd.TreeViewItem title="Item 1 - 2" />
                            <bd.TreeViewItem title="Subtree 1 - 1">
                                <bd.TreeViewItem title="Item 1 - 1 - 1" />
                            </bd.TreeViewItem>
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode
                lines={[
                    "<bd.TreeView>",
                    "    <bd.TreeViewItem title='Root' expanded>",
                    "        <bd.TreeViewItem title='Item 1' />",
                    "        <bd.TreeViewItem title='Subtree 1'>",
                    "            <bd.TreeViewItem title='Item 1 - 1' />",
                    "            <bd.TreeViewItem title='Item 1 - 2' />",
                    "            <bd.TreeViewItem title='Subtree 1 - 1'>",
                    "                <bd.TreeViewItem title='Item 1 - 1 - 1' />",
                    "            </bd.TreeViewItem>",
                    "        </bd.TreeViewItem>",
                    "    </bd.TreeViewItem>",
                    "</bd.TreeView>",
                ]}
            />

            <Example title="Icons" shaded>
                <bd.TreeView>
                    <bd.TreeViewItem title="Root" expanded>
                        <bd.TreeViewItem
                            title={
                                <bd.Flex align="center" gap={2} grow>
                                    <SvgAccountCircle /> User <SvgCheckBox className="m-s-auto" />
                                </bd.Flex>
                            }
                        />
                        <bd.TreeViewItem
                            title={
                                <bd.Flex align="center" gap={2}>
                                    <SvgDarkMode /> <div>Dark mode</div>
                                </bd.Flex>
                            }
                        />
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode
                lines={[
                    "<bd.TreeView>",
                    "    <bd.TreeViewItem title='Root' expanded>",
                    "        <bd.TreeViewItem",
                    "            title={",
                    "                <bd.Flex align='center' gap={2}>",
                    "                    <SvgAccountCircle /> User <SvgCheckBox className='m-s-auto' />",
                    "                </bd.Flex>",
                    "            }",
                    "        />",
                    "        <bd.TreeViewItem",
                    "            title={",
                    "                <bd.Flex align='center' gap={2}>",
                    "                    <SvgDarkMode /> <div>Dark mode</div>",
                    "                </bd.Flex>",
                    "            }",
                    "        />",
                    "</bd.TreeView>",
                ]}
            />

            <Example title="Variants" shaded>
                <bd.TreeView variant="menu">
                    <bd.TreeViewItem title="Menu variant" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1">
                            <bd.TreeViewItem title="Item 1 - 1" />
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>

                <bd.TreeView variant="text">
                    <bd.TreeViewItem title="Text variant" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1">
                            <bd.TreeViewItem title="Item 1 - 1" />
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode
                lines={[
                    "<bd.TreeView variant='text'>",
                    "...",
                    "</bd.TreeView>",
                    "",
                    "<bd.TreeView variant='menu'>",
                    "...",
                    "</bd.TreeView>",
                ]}
            />

            <Example title="Compact" shaded>
                <bd.TreeView compact>
                    <bd.TreeViewItem title="Root" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1">
                            <bd.TreeViewItem title="Item 1 - 1" />
                            <bd.TreeViewItem title="Item 1 - 2" />
                            <bd.TreeViewItem title="Subtree 1 - 1">
                                <bd.TreeViewItem title="Item 1 - 1 - 1" />
                            </bd.TreeViewItem>
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode lines={["<bd.TreeView variant='menu' compact>", "...", "</bd.TreeView>"]} />

            <Example title="Disabled" shaded>
                <bd.TreeView>
                    <bd.TreeViewItem title="Root" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1" disabled>
                            <bd.TreeViewItem title="Item 1 - 1" />
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode lines={["<bd.TreeViewItem title='Subtree 1' disabled>", "...", "</bd.TreeViewItem>"]} />

            <Example title="Focus" shaded>
                <bd.TreeView focus>
                    <bd.TreeViewItem title="Root" expanded>
                        <bd.TreeViewItem title="Item 1" />
                        <bd.TreeViewItem title="Subtree 1">
                            <bd.TreeViewItem title="Item 1 - 1" />
                        </bd.TreeViewItem>
                    </bd.TreeViewItem>
                </bd.TreeView>
            </Example>
            <SourceCode lines={["<bd.TreeView focus>", "...", "</bd.TreeView>"]} />
        </div>
    );
};
