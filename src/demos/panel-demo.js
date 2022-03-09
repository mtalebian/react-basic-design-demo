import React from "react";
import SvgBookmarkBorder from "../icons/BookmarkBorder";
import SvgSave from "../icons/Save";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const PanelDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1 className="mb-5">Panel</h1>

            <Example title="Basic Panel">
                <bd.Panel title="Panel Title">
                    <p className="p-4 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode lines={["<bd.Panel title='Panel Title'>", "	<p className='p-4 m-0'>...</p>", "</bd.Panel>"]} />

            <Example title="Action Buttons">
                <bd.Panel
                    title="Panel Title"
                    controls={
                        <>
                            <bd.Button>
                                <SvgBookmarkBorder />
                            </bd.Button>
                            <bd.Button>
                                <SvgSave />
                            </bd.Button>
                        </>
                    }
                >
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel",
                    "	title='Panel Title'",
                    "	controls={",
                    "		<>",
                    "			<bd.Button>",
                    "				<SvgBookmarkBorder />",
                    "			</bd.Button>",
                    "			<bd.Button>",
                    "				<SvgSave />",
                    "			</bd.Button>",
                    "		</>",
                    "	}",
                    ">",
                    "...",
                    "</bd.Panel>",
                ]}
            />

            <Example title="Sizes">
                <bd.Panel title="Small (height 38px)" size="sm">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Medium (height 48px)" size="md">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Normal (height 56px)">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Large (height 64px)" size="lg">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='Small' size='sm'>...</bd.Panel>",
                    "<bd.Panel title='Medium' size='md' >...</bd.Panel>",
                    "<bd.Panel title='Normal'>...</bd.Panel>",
                    "<bd.Panel title='Large' size='lg'>...</bd.Panel>",
                ]}
            />

            <Example title="Variants">
                <bd.Panel title="Text (default)" variant="text">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Menu" variant="menu">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Button" variant="button">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='Text (default)' variant='text'>...</bd.Panel>",
                    "<bd.Panel title='Menu' variant='menu'>...</bd.Panel>",
                    "<bd.Panel title='Button' variant='button'>...</bd.Panel>",
                ]}
            />

            <Example title="Caret Position">
                <bd.Panel title="Start" caretPosition="start">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Middle" caretPosition="middle">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="End" caretPosition="end">
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='Start' caretPosition='start'>...</bd.Panel>",
                    "<bd.Panel title='Middle' caretPosition='middle'>...</bd.Panel>",
                    "<bd.Panel title='End' caretPosition='end'>...</bd.Panel>",
                ]}
            />

            <Example title="Fixed & Expanded">
                <bd.Panel title="Expanded Panel" expanded>
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>

                <bd.Panel title="Fixed & Expanded Panel" fixed expanded>
                    <p className="p-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </p>
                </bd.Panel>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='Expanded Panel' expanded>...</bd.Panel>",
                    "<bd.Panel title='Fixed & Expanded Panel' fixed expanded>...</bd.Panel>",
                ]}
            />
        </div>
    );
};
